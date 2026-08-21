# How to host this landing page on a DigitalOcean Droplet

This guide explains, step by step, how to put the Contigo Care landing page
online at **https://contigo.care** using an Ubuntu server and Nginx.

It is written for someone who has never done this before. You can copy and
paste every command. Words in `CAPITALS` are things you must replace with your
own values.

Everything here is done from the **DigitalOcean web console** — the terminal
that opens in your browser. You do not need SSH, and you do not need anything
installed on your own computer.

---

## What we are building

This project is a React app built with Vite. When you run the build command, it
turns all the code into a small set of plain files (HTML, CSS, JavaScript,
images). Those files do not need Node.js to run — a web server can just hand
them to the browser.

So the plan is simple:

1. Put the repository on the server.
2. Build it there into a `dist` folder.
3. Copy that folder to the place Nginx serves.
4. Point the domain at the server and turn on HTTPS.

**Nginx** is the web server. Think of it as a waiter: the browser asks for a
page, Nginx finds the file and brings it back.

---

## Before you start

You need:

- A DigitalOcean account.
- The domain `contigo.care`, and access to wherever its DNS is managed.
- Access to the code — either the GitHub repository, or a copy you can upload.

---

## Step 1 — Create the Droplet

A "Droplet" is DigitalOcean's name for a virtual server.

1. Log in to DigitalOcean and click **Create → Droplets**.
2. **Region**: pick the one closest to your users.
3. **Image**: choose **Ubuntu 24.04 (LTS) x64**.
4. **Size**: the cheapest Basic / Regular option is enough for a landing page
   (1 GB RAM). You can grow later.
5. **Authentication**: choose **Password** and set a strong root password. Save
   it somewhere safe — the web console may ask for it.
6. **Hostname**: something like `contigocare-web`.
7. Click **Create Droplet**.

After a minute you get an **IP address**, for example `203.0.113.10`. Write it
down — you will use it a lot. Wherever this guide says `YOUR_SERVER_IP`, use
that number.

---

## Step 2 — Open the web console

In DigitalOcean, open your Droplet and click **Console** (also called *Launch
Droplet Console*). A black terminal window opens in your browser and logs you
in as `root`.

If it asks for a login, type `root` and the password you set in Step 1.

Everything from here on is typed **in that console window**, on the server.

> Copy and paste in the console: `Ctrl+Shift+V` usually works. If it does not,
> DigitalOcean's console has a paste button in its toolbar.

---

## Step 3 — Update the server and install Nginx

```bash
apt update
apt upgrade -y
apt install nginx -y
```

- `apt update` refreshes the list of available software.
- `apt upgrade` installs the latest security fixes.
- `apt install nginx` installs the web server.

Check it worked:

```bash
systemctl status nginx
```

You should see the word **active (running)** in green. Press `q` to exit that
screen.

Now open `http://YOUR_SERVER_IP` in your browser. You should see the default
"Welcome to nginx!" page. If you do, the server is working.

---

## Step 4 — Install Node.js and Git

The site is built **on the server**, so the server needs Node.js. Ubuntu's own
version is too old, so we install Node.js 20 from NodeSource:

```bash
apt install git curl -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install nodejs -y
```

Check both are there:

```bash
node -v
npm -v
```

`node -v` should print `v20.something`.

---

## Step 5 — Turn on the firewall

The firewall blocks every door into the server except the ones we open.

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
ufw status
```

- `Nginx Full` opens port 80 (HTTP) and port 443 (HTTPS).
- `OpenSSH` keeps port 22 open in case you ever want to connect without the web
  console. The DigitalOcean console keeps working either way — it does not go
  through the firewall.

---

## Step 6 — Point the domain at the server

This happens in your DNS provider (DigitalOcean's own **Networking → Domains**
panel, or wherever `contigo.care` is registered).

Create two records:

| Type | Name  | Value            |
|------|-------|------------------|
| A    | `@`   | `YOUR_SERVER_IP` |
| A    | `www` | `YOUR_SERVER_IP` |

`@` means the bare domain `contigo.care`. The `www` record covers
`www.contigo.care`.

DNS changes take time to spread around the internet — usually a few minutes,
sometimes up to an hour. Check whether it is ready with:

```bash
dig +short contigo.care
```

When that prints your server IP, you can continue. **Do not run the HTTPS step
before this works**, because the certificate check needs the domain to reach
your server.

---

## Step 7 — Put the repository on the server

We keep the code in `/opt/contigocare` and build it there.

```bash
mkdir -p /opt
cd /opt
git clone https://github.com/Haile-08/Contigocare_frontend.git contigocare
cd contigocare
```

If the repository is **private**, GitHub asks for a username and password. The
password is not your account password — it is a **personal access token**
(GitHub → Settings → Developer settings → Personal access tokens). Create one
with `repo` read access and paste it when asked.

**If you would rather not use Git**, upload a ZIP of the project instead:

1. On your computer, zip the project folder (without `node_modules` and `dist`).
2. Put the ZIP somewhere the server can download it (a Google Drive / Dropbox
   direct link, or DigitalOcean Spaces).
3. On the server:

   ```bash
   apt install unzip -y
   mkdir -p /opt/contigocare
   cd /opt/contigocare
   curl -L "YOUR_ZIP_URL" -o site.zip
   unzip site.zip
   ```

Either way, you should end up with `package.json` inside `/opt/contigocare`.
Check with:

```bash
ls /opt/contigocare
```

---

## Step 8 — Build the site on the server

Still in the console:

```bash
cd /opt/contigocare
npm install
npm run build
```

`npm install` downloads the libraries the project needs (this takes a couple of
minutes the first time). `npm run build` creates a `dist` folder containing
`index.html`, an `assets` folder with the JavaScript and CSS, and the images.
That folder is the entire website.

If the build runs out of memory on a 1 GB Droplet, give it some swap space
once:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

Then run `npm run build` again.

---

## Step 9 — Publish the built files

Nginx serves files from `/var/www/`, so we copy the build there:

```bash
mkdir -p /var/www/contigo.care
cp -r /opt/contigocare/dist/* /var/www/contigo.care/
```

`/var/www/` is the normal place to keep websites on Ubuntu. We copy the
**contents** of `dist` (note the `/*`), not the folder itself.

---

## Step 10 — Install the Nginx config

The config file is already on the server — it came with the repository, at
`/opt/contigocare/deploy/nginx/contigo.care.conf`.

Put it in place:

```bash
cp /opt/contigocare/deploy/nginx/contigo.care.conf /etc/nginx/sites-available/contigo.care
ln -s /etc/nginx/sites-available/contigo.care /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
```

What is happening here:

- `sites-available` holds all the configs you have written.
- `sites-enabled` holds the ones that are actually switched on. The `ln -s`
  command creates a shortcut from one to the other.
- We remove `default` so the "Welcome to nginx!" page stops taking over.

Test the config for typos, then reload:

```bash
nginx -t
systemctl reload nginx
```

`nginx -t` should say **syntax is ok** and **test is successful**. If it shows
an error, it tells you the exact line number — fix it and test again. Never
reload a config that fails the test.

Now open `http://contigo.care`. Your landing page should be there.

---

## Step 11 — Turn on HTTPS (the padlock)

We use **Certbot** with **Let's Encrypt**, which gives free certificates.

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d contigo.care -d www.contigo.care
```

Certbot will ask you:

- **Your email** — used only to warn you if a certificate is about to expire.
- **Agree to the terms** — type `Y`.
- **Share your email with EFF** — your choice, `N` is fine.

Certbot then edits the Nginx config for you. It adds the HTTPS server block and
makes plain HTTP redirect to HTTPS automatically. You do not have to write any
of that by hand.

Visit `https://contigo.care` — you should see the padlock in the address bar.

Certificates last 90 days and renew themselves. You can confirm the automatic
renewal works with:

```bash
certbot renew --dry-run
```

---

## Step 12 — Check the privacy page

This site uses client side routing, so it has two addresses:

- `https://contigo.care/`
- `https://contigo.care/privacidad`

Open the second one **directly** in a new browser tab (do not click a link to
get there). It must load the privacy page, not a 404.

This works because of one line in the Nginx config:

```nginx
try_files $uri $uri/ /index.html;
```

There is no file called `privacidad` on the server. That line tells Nginx: look
for the file, then look for a folder, and if you find neither, serve
`index.html` anyway and let React figure out which page to show. If you ever
see a 404 on `/privacidad`, this line is missing or wrong.

---

## Deploying updates later

Once everything above is done, publishing a change is four commands in the web
console:

```bash
cd /opt/contigocare
git pull
npm run build
rm -rf /var/www/contigo.care/* && cp -r dist/* /var/www/contigo.care/
```

The `rm -rf` clears out old files so nothing stale is left behind from the
previous build.

You do not need to restart or reload Nginx — it reads the files fresh each
time. You only reload Nginx when you change the **config** file.

If you uploaded a ZIP instead of using Git, replace `git pull` with uploading
and unzipping the new ZIP the same way as in Step 7.

### Optional: a one-command deploy script

Create the script once, on the server:

```bash
nano /usr/local/bin/deploy-contigo
```

Paste this in:

```bash
#!/usr/bin/env bash
set -e

cd /opt/contigocare

echo "Getting latest code..."
git pull

echo "Building..."
npm install
npm run build

echo "Publishing..."
rm -rf /var/www/contigo.care/*
cp -r dist/* /var/www/contigo.care/

echo "Done: https://contigo.care"
```

Save with `Ctrl+O`, `Enter`, then exit with `Ctrl+X`. Make it runnable once:

```bash
chmod +x /usr/local/bin/deploy-contigo
```

After that, every deploy is just:

```bash
deploy-contigo
```

`set -e` means the script stops immediately if the build fails, so a broken
build never gets published.

---

## When something goes wrong

**The page does not load at all**

```bash
systemctl status nginx
```

If it is not running, start it: `systemctl start nginx`.

**I see "Welcome to nginx!" instead of my site**

The default site is still enabled. Run `rm /etc/nginx/sites-enabled/default`
and reload.

**403 Forbidden**

Nginx cannot read the files. Fix the permissions:

```bash
chmod -R 755 /var/www/contigo.care
```

**404 on /privacidad**

The `try_files` line is missing. See Step 12.

**`npm run build` is killed / runs out of memory**

Add swap space — see the block at the end of Step 8.

**I deployed but still see the old site**

Your browser cached it. Try a hard refresh (`Ctrl+Shift+R`, or `Cmd+Shift+R` on
Mac). The config already tells browsers never to cache `index.html`, so this
should only affect you, not new visitors.

**Certbot fails**

Almost always DNS. Check `dig +short contigo.care` returns your server IP, and
that port 80 is open (`ufw status`).

**Read the error log**

This is the most useful command when you are stuck:

```bash
tail -n 50 /var/log/nginx/contigo.care.error.log
```

---

## Quick reference

| What you want | Command |
|---|---|
| Connect to the server | DigitalOcean → your Droplet → **Console** |
| Go to the code | `cd /opt/contigocare` |
| Build the site | `npm run build` |
| Deploy | `deploy-contigo` (or the four commands above) |
| Test the Nginx config | `nginx -t` |
| Apply a config change | `systemctl reload nginx` |
| Restart Nginx | `systemctl restart nginx` |
| See errors | `tail -f /var/log/nginx/contigo.care.error.log` |
| See visits | `tail -f /var/log/nginx/contigo.care.access.log` |
| Renew certificate manually | `certbot renew` |

**Important paths on the server**

| Path | What it is |
|---|---|
| `/opt/contigocare/` | The repository (source code) |
| `/var/www/contigo.care/` | The website files that are served |
| `/etc/nginx/sites-available/contigo.care` | The config you edit |
| `/etc/nginx/sites-enabled/contigo.care` | The shortcut that switches it on |
| `/var/log/nginx/` | The logs |

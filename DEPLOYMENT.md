# How to host this landing page on a DigitalOcean Droplet

This guide explains, step by step, how to put the Contigo Care landing page
online at **https://contigo.care** using an Ubuntu server and Nginx.

It is written for someone who has never done this before. You can copy and
paste every command. Words in `CAPITALS` are things you must replace with your
own values.

---

## What we are building

This project is a React app built with Vite. When you run the build command, it
turns all the code into a small set of plain files (HTML, CSS, JavaScript,
images). Those files do not need Node.js to run — a web server can just hand
them to the browser.

So the plan is simple:

1. Build the site into a `dist` folder.
2. Copy that folder to the server.
3. Tell Nginx to serve it.
4. Point the domain at the server and turn on HTTPS.

**Nginx** is the web server. Think of it as a waiter: the browser asks for a
page, Nginx finds the file and brings it back.

---

## Before you start

You need:

- A DigitalOcean account.
- The domain `contigo.care`, and access to wherever its DNS is managed.
- A terminal on your computer (Terminal on Mac/Linux, PowerShell on Windows).
- Node.js 20 or newer on your computer, to build the site.

---

## Step 1 — Create the Droplet

A "Droplet" is DigitalOcean's name for a virtual server.

1. Log in to DigitalOcean and click **Create → Droplets**.
2. **Region**: pick the one closest to your users.
3. **Image**: choose **Ubuntu 24.04 (LTS) x64**.
4. **Size**: the cheapest Basic / Regular option is enough for a landing page
   (1 GB RAM). You can grow later.
5. **Authentication**: choose **SSH Key** and add yours. This is safer than a
   password. If you do not have one, DigitalOcean shows you how to make it.
6. **Hostname**: something like `contigocare-web`.
7. Click **Create Droplet**.

After a minute you get an **IP address**, for example `203.0.113.10`. Write it
down — you will use it a lot. Wherever this guide says `YOUR_SERVER_IP`, use
that number.

---

## Step 2 — Connect to the server

In your terminal:

```bash
ssh root@YOUR_SERVER_IP
```

The first time it asks "Are you sure you want to continue connecting?" — type
`yes`.

You are now typing commands **on the server**, not on your computer. Keep this
in mind for the rest of the guide; I will say clearly when to switch back.

---

## Step 3 — Update the server and install Nginx

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install nginx -y
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

## Step 4 — Turn on the firewall

The firewall blocks every door into the server except the ones we open.

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

- `OpenSSH` keeps your terminal connection working. **Do not skip it** or you
  will lock yourself out.
- `Nginx Full` opens port 80 (HTTP) and port 443 (HTTPS).

---

## Step 5 — Point the domain at the server

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

## Step 6 — Build the site on your computer

Switch back to **your own computer**, in the project folder:

```bash
npm install
npm run build
```

This creates a `dist` folder. Inside you will find `index.html`, an `assets`
folder with the JavaScript and CSS, and the images. That folder is the entire
website.

You can preview it locally first if you want:

```bash
npm run preview
```

---

## Step 7 — Create the folder on the server

Back in the **server** terminal:

```bash
mkdir -p /var/www/contigo.care
```

`/var/www/` is the normal place to keep websites on Ubuntu. This folder is
where the built site will land in the next step.

---

## Step 8 — Upload the built files

On **your computer**, from the project folder:

```bash
rsync -avz --delete dist/ root@YOUR_SERVER_IP:/var/www/contigo.care/
```

What the parts mean:

- `dist/` — the trailing slash matters. It means "the contents of dist", not
  the folder itself.
- `--delete` — removes old files on the server that no longer exist in your
  build. This keeps things clean between deploys.
- `-avz` — copy everything, keep permissions, compress during transfer.

If you are on Windows without `rsync`, use `scp` instead:

```bash
scp -r dist/* root@YOUR_SERVER_IP:/var/www/contigo.care/
```

---

## Step 9 — Install the Nginx config

The config file lives in this repo at
[deploy/nginx/contigo.care.conf](deploy/nginx/contigo.care.conf).

Copy it to the server from **your computer**:

```bash
scp deploy/nginx/contigo.care.conf root@YOUR_SERVER_IP:/tmp/
```

Then on the **server**, put it in place:

```bash
sudo mv /tmp/contigo.care.conf /etc/nginx/sites-available/contigo.care
sudo ln -s /etc/nginx/sites-available/contigo.care /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

What is happening here:

- `sites-available` holds all the configs you have written.
- `sites-enabled` holds the ones that are actually switched on. The `ln -s`
  command creates a shortcut from one to the other.
- We remove `default` so the "Welcome to nginx!" page stops taking over.

Test the config for typos, then reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

`nginx -t` should say **syntax is ok** and **test is successful**. If it shows
an error, it tells you the exact line number — fix it and test again. Never
reload a config that fails the test.

Now open `http://contigo.care`. Your landing page should be there.

---

## Step 10 — Turn on HTTPS (the padlock)

We use **Certbot** with **Let's Encrypt**, which gives free certificates.

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d contigo.care -d www.contigo.care
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
sudo certbot renew --dry-run
```

---

## Step 11 — Check the privacy page

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

Once everything above is done, publishing a change is just two commands from
your computer:

```bash
npm run build
rsync -avz --delete dist/ root@YOUR_SERVER_IP:/var/www/contigo.care/
```

You do not need to restart or reload Nginx — it reads the files fresh each
time. You only reload Nginx when you change the **config** file.

### Optional: a one-command deploy script

Create a file called `deploy.sh` in the project root:

```bash
#!/usr/bin/env bash
set -e

SERVER="root@YOUR_SERVER_IP"
TARGET="/var/www/contigo.care/"

echo "Building..."
npm run build

echo "Uploading..."
rsync -avz --delete dist/ "$SERVER:$TARGET"

echo "Done: https://contigo.care"
```

Make it runnable once:

```bash
chmod +x deploy.sh
```

After that, every deploy is just:

```bash
./deploy.sh
```

`set -e` means the script stops immediately if the build fails, so a broken
build never gets uploaded.

---

## When something goes wrong

**The page does not load at all**

```bash
systemctl status nginx
```

If it is not running, start it: `sudo systemctl start nginx`.

**I see "Welcome to nginx!" instead of my site**

The default site is still enabled. Run
`sudo rm /etc/nginx/sites-enabled/default` and reload.

**403 Forbidden**

Nginx cannot read the files. Fix the permissions:

```bash
sudo chmod -R 755 /var/www/contigo.care
```

**404 on /privacidad**

The `try_files` line is missing. See Step 11.

**I deployed but still see the old site**

Your browser cached it. Try a hard refresh (`Ctrl+Shift+R`, or `Cmd+Shift+R` on
Mac). The config already tells browsers never to cache `index.html`, so this
should only affect you, not new visitors.

**Certbot fails**

Almost always DNS. Check `dig +short contigo.care` returns your server IP, and
that port 80 is open (`sudo ufw status`).

**Read the error log**

This is the most useful command when you are stuck:

```bash
sudo tail -n 50 /var/log/nginx/contigo.care.error.log
```

---

## Quick reference

| What you want | Command |
|---|---|
| Connect to the server | `ssh root@YOUR_SERVER_IP` |
| Test the Nginx config | `sudo nginx -t` |
| Apply a config change | `sudo systemctl reload nginx` |
| Restart Nginx | `sudo systemctl restart nginx` |
| See errors | `sudo tail -f /var/log/nginx/contigo.care.error.log` |
| See visits | `sudo tail -f /var/log/nginx/contigo.care.access.log` |
| Build the site | `npm run build` |
| Deploy | `rsync -avz --delete dist/ root@YOUR_SERVER_IP:/var/www/contigo.care/` |
| Renew certificate manually | `sudo certbot renew` |

**Important paths on the server**

| Path | What it is |
|---|---|
| `/var/www/contigo.care/` | The website files |
| `/etc/nginx/sites-available/contigo.care` | The config you edit |
| `/etc/nginx/sites-enabled/contigo.care` | The shortcut that switches it on |
| `/var/log/nginx/` | The logs |

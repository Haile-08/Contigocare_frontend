import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Privacy from './components/Privacy'
import Program from './components/Program'
import { COPY, type Lang, type Theme } from './content'
import { ROUTES, useRoute } from './router'
import './styles/landing.css'

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [lang, setLang] = useState<Lang>('es')
  const route = useRoute()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = COPY[lang]

  useEffect(() => {
    document.title =
      route === ROUTES.privacy
        ? `${t.privacy.title} — Contigo Care`
        : `Contigo Care — ${t.eyebrow}`
  }, [route, t])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  return (
    <>
      <Header
        t={t}
        route={route}
        lang={lang}
        onLangChange={setLang}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        {route === ROUTES.privacy ? (
          <Privacy t={t} />
        ) : (
          <>
            <Hero t={t} />
            <Program t={t} />
          </>
        )}
      </main>
    </>
  )
}

export default App

import type { MouseEvent } from 'react'
import logo from '../assets/contigo-logo.png'
import type { Copy, Lang, Theme } from '../content'
import { navigate, ROUTES, type Route } from '../router'

type HeaderProps = {
  t: Copy
  route: Route
  lang: Lang
  onLangChange: (lang: Lang) => void
  theme: Theme
  onThemeToggle: () => void
}

const LANGS: Lang[] = ['en', 'es']

function Header({ t, route, lang, onLangChange, theme, onThemeToggle }: HeaderProps) {
  const onHome = route === ROUTES.home

  // Off the landing page the in-page anchors have no target, so route home first
  // and scroll to the section once it has rendered.
  const goToSection = (hash: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (onHome) return
    event.preventDefault()
    navigate(ROUTES.home)
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView()
    })
  }

  const sectionHref = (hash: string) => (onHome ? hash : `/${hash}`)

  return (
    <header className="header">
      <a className="header__logo" href={sectionHref('#top')} onClick={goToSection('#top')}>
        <img src={logo} alt="Contigo Care" />
      </a>

      <nav className="header__nav">
        <a href={sectionHref('#program')} onClick={goToSection('#program')}>
          {t.navProgram}
        </a>
        <a href={sectionHref('#program')} onClick={goToSection('#program')}>
          {t.navPatients}
        </a>
        <a href={sectionHref('#program')} onClick={goToSection('#program')}>
          {t.navSupport}
        </a>
      </nav>

      <div className="header__actions">
        <div className="lang">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              className="lang__btn"
              aria-pressed={lang === code}
              onClick={() => onLangChange(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="theme-toggle"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={onThemeToggle}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <a
          className="header__cta"
          href={sectionHref('#program')}
          onClick={goToSection('#program')}
        >
          {t.cta}
        </a>
      </div>
    </header>
  )
}

export default Header

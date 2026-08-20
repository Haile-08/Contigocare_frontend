import type { Copy } from '../content'
import { ROUTES } from '../router'
import RouteLink from './RouteLink'

type SiteFooterProps = {
  t: Copy
}

function SiteFooter({ t }: SiteFooterProps) {
  return (
    <footer className="site-footer mono">
      <span>Contigo Care © {new Date().getFullYear()}</span>
      <RouteLink to={ROUTES.privacy} className="site-footer__link">
        {t.privacy.linkLabel}
      </RouteLink>
      <span>{t.footer}</span>
    </footer>
  )
}

export default SiteFooter

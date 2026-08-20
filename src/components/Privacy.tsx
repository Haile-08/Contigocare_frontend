import { PRIVACY_CONTACT, type Copy } from '../content'
import { ROUTES } from '../router'
import RouteLink from './RouteLink'
import SiteFooter from './SiteFooter'

type PrivacyProps = {
  t: Copy
}

function Privacy({ t }: PrivacyProps) {
  const p = t.privacy

  return (
    <section id="top" className="shell legal">
      <header className="legal__head">
        <p className="eyebrow mono">{p.eyebrow}</p>
        <h1 className="legal__title">{p.title}</h1>
        <p className="legal__updated mono">
          {p.updatedLabel} — {p.updated}
        </p>
        <p className="legal__intro">{p.intro}</p>
      </header>

      <div className="legal__sections">
        {p.sections.map((section) => (
          <article key={section.num} className="legal__section">
            <span className="legal__num mono">{section.num}</span>
            <div className="legal__body">
              <h2>{section.title}</h2>
              {section.body.map((block) =>
                Array.isArray(block) ? (
                  <ul key={block.join('|')} className="legal__list">
                    {block.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={block}>{block}</p>
                ),
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="legal__contact">
        <span className="legal__num mono">{p.contactNum}</span>
        <div className="legal__contact-body">
          <h2>{p.contactTitle}</h2>
          <p>{p.contactBody}</p>
          <dl className="legal__contact-list mono">
            <div>
              <dt>{p.contactEmailLabel}</dt>
              <dd>
                <a href={`mailto:${PRIVACY_CONTACT.email}`}>{PRIVACY_CONTACT.email}</a>
              </dd>
            </div>
            <div>
              <dt>{p.contactPhoneLabel}</dt>
              <dd>
                <a href={`tel:+52${PRIVACY_CONTACT.phone.replace(/\s/g, '')}`}>
                  {PRIVACY_CONTACT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt>{p.contactAddressLabel}</dt>
              <dd>{PRIVACY_CONTACT.address}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="closing">
        <p>{t.closing}</p>
        <RouteLink to={ROUTES.home} className="btn btn--ghost btn--lg">
          {p.backHome}
        </RouteLink>
      </div>

      <SiteFooter t={t} />
    </section>
  )
}

export default Privacy

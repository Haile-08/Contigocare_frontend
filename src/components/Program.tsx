import type { Copy } from '../content'
import SiteFooter from './SiteFooter'

type ProgramProps = {
  t: Copy
}

function Program({ t }: ProgramProps) {
  return (
    <section id="program" className="shell program">
      <div className="program__head">
        <h2>{t.h2}</h2>
        <p>{t.h2sub}</p>
      </div>

      <div className="pillars">
        {t.pillars.map((pillar) => (
          <article key={pillar.num} className="pillar">
            <div className="pillar__top">
              <span className="pillar__num">{pillar.num}</span>
              <span className="pillar__arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="pillar__text">
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="closing">
        <p>{t.closing}</p>
        <a className="btn btn--solid btn--lg" href="#top">
          {t.ctaPrimary}
        </a>
      </div>

      <SiteFooter t={t} />
    </section>
  )
}

export default Program

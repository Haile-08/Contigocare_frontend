import type { Copy } from '../content'
import Marquee from './Marquee'

type HeroProps = {
  t: Copy
}

function Hero({ t }: HeroProps) {
  const meta = [
    [t.metaKey1, t.metaVal1],
    [t.metaKey2, t.metaVal2],
  ]

  return (
    <section id="top" className="shell hero">
      <p className="eyebrow mono">{t.eyebrow}</p>

      <h1 className="hero__title">
        {t.h1a} <em>{t.h1b}</em>
      </h1>

      <div className="hero__body">
        <div className="hero__lede">
          <p>{t.sub}</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#program">
              {t.ctaPrimary}
            </a>
            <a className="btn btn--ghost" href="#program">
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        <dl className="hero__meta mono">
          {meta.map(([key, value]) => (
            <div key={key}>
              <dt>+ {key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Marquee items={t.marquee} />
    </section>
  )
}

export default Hero

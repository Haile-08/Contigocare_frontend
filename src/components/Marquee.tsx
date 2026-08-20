type MarqueeProps = {
  items: string[]
}

/** The track holds two copies of the list so the -50% loop is seamless. */
function Marquee({ items }: MarqueeProps) {
  return (
    <div className="marquee">
      <div className="marquee__track mono">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} aria-hidden={i >= items.length}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee

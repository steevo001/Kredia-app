export default function Ticker() {
  const baseItems = [
    'Marketplace', 'Credit Economy', 'OAU Brain',
    'Space Grid', 'Live Campus Map',
  ]
  // Duplicate the array multiple times to ensure the container is wider than any screen
  const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems]

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {items.map((item, i) => (
          <span className="ticker-item" key={`t1-${i}`}>{item}</span>
        ))}
      </div>
      <div className="ticker" aria-hidden="true">
        {items.map((item, i) => (
          <span className="ticker-item" key={`t2-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

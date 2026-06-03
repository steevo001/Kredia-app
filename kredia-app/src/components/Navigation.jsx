import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const links = [
    { to: '/marketplace', label: 'Marketplace' },
    { to: '/brain', label: 'OAU Brain' },
    { to: '/grid', label: 'Space Grid' },
  ]

  return (
    <nav>
      <Link to="/" className="nav-logo">Kred<em>ia</em></Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 700, fontSize: '0.95rem' }}>Log In</Link>
        <Link to="/signup" className="nav-cta">Get Started</Link>
      </div>
    </nav>
  )
}

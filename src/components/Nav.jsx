import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoIcon from '../assets/hyapack-icon.png'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Our Material', href: '/#material' },
  { label: 'Products', href: '/#products' },
  { label: 'Multi-Use Guide', href: '/multi-use-guide' },
  { label: 'About Us', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-brand" aria-label="HYAPACK home">
          <img src={logoIcon} alt="" width="35" height="43" />
          <span>HYAPACK</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="nav-menu"
          className={`nav-links${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-primary nav-cta">
            Start a Custom Project
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Nav

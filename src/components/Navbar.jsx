import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Servicios', href: '/servicios/diseno-web' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const serviceLinks = [
  { label: 'Diseño Web', href: '/servicios/diseno-web' },
  { label: 'Renders Arquitectónicos', href: '/servicios/renders' },
  { label: 'Recorridos Virtuales', href: '/servicios/recorridos-virtuales' },
  { label: 'Motion y Video', href: '/servicios/motion-video' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 60px', maxWidth: '1440px', margin: '0 auto',
        }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-h)', fontSize: 20, fontWeight: 800,
            letterSpacing: 6, color: 'var(--fg-light)',
          }}>
            PRISXEL
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span style={{
                fontSize: 14, color: 'var(--fg-muted)', cursor: 'pointer',
                transition: 'color 0.2s',
              }}
                className="nav-link"
              >
                Servicios ▾
              </span>
              {servicesOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--bg-navy)',
                  border: '1px solid var(--border)',
                  borderRadius: 12, padding: '12px 0',
                  minWidth: 240, marginTop: 12,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}>
                  {serviceLinks.map(l => (
                    <Link key={l.href} to={l.href} style={{
                      display: 'block', padding: '10px 20px',
                      fontSize: 14, color: 'var(--fg-muted)',
                      transition: 'color 0.2s',
                    }}
                      className="dropdown-item"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { label: 'Portafolio', href: '/portafolio' },
              { label: 'Nosotros', href: '/nosotros' },
              { label: 'Contacto', href: '/contacto' },
            ].map(l => (
              <NavLink key={l.href} to={l.href} style={({ isActive }) => ({
                fontSize: 14, color: isActive ? 'var(--fg-light)' : 'var(--fg-muted)',
                transition: 'color 0.2s',
              })} className="nav-link">
                {l.label}
              </NavLink>
            ))}
            <Link to="/cotizar" style={{
              fontSize: 14, fontWeight: 600, color: 'var(--fg-dark)',
              background: 'var(--fg-light)', padding: '10px 24px',
              borderRadius: 9999, transition: 'opacity 0.2s',
            }}>
              Cotizar proyecto
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
            aria-label="Menú"
          >
            <span style={{ width: 24, height: 2, background: 'var(--fg-light)', display: 'block' }} />
            <span style={{ width: 24, height: 2, background: 'var(--fg-light)', display: 'block' }} />
            <span style={{ width: 16, height: 2, background: 'var(--fg-light)', display: 'block' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'var(--bg-navy)', borderTop: '1px solid var(--border)',
            padding: '20px 24px 32px',
          }}>
            <p style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, letterSpacing: 4, marginBottom: 12 }}>
              SERVICIOS
            </p>
            {serviceLinks.map(l => (
              <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '12px 0',
                fontSize: 15, color: 'var(--fg-muted)',
                borderBottom: '1px solid var(--border)',
              }}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { label: 'Portafolio', href: '/portafolio' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Contacto', href: '/contacto' },
              ].map(l => (
                <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)} style={{
                  display: 'block', padding: '12px 0',
                  fontSize: 15, color: 'var(--fg-muted)',
                  borderBottom: '1px solid var(--border)',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/cotizar" onClick={() => setMenuOpen(false)} style={{
              display: 'block', marginTop: 24, textAlign: 'center',
              fontSize: 14, fontWeight: 600, color: 'var(--fg-dark)',
              background: 'var(--fg-light)', padding: '14px 24px',
              borderRadius: 9999,
            }}>
              Cotizar proyecto
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        .nav-link:hover { color: var(--fg-light) !important; }
        .dropdown-item:hover { color: var(--fg-light) !important; background: rgba(255,255,255,0.05); }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

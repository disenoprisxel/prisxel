import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Servicios', href: '/servicios/diseno-web' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
)

const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const IconBehance = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.5 11.25c.83 0 1.5-.67 1.5-1.5S8.33 8.25 7.5 8.25H4.5v3h3zm.5 1.5H4.5v3.25H8c.97 0 1.75-.78 1.75-1.75S8.97 12.75 8 12.75zM2 6h7c1.93 0 3.5 1.57 3.5 3.5 0 1.07-.48 2.02-1.24 2.67C12.37 12.76 13 13.82 13 15c0 2.21-1.79 4-4 4H2V6zm13.5 2.5h5v1h-5v-1zm2.5 4c-.41 0-.75.34-.75.75h4c-.17-1.79-1.38-3-2.9-3-1.79 0-3.1 1.34-3.1 3.25 0 1.91 1.31 3.25 3.1 3.25 1.24 0 2.24-.67 2.76-1.75H21c-.52 1.79-2.1 3-3.5 3-2.21 0-4-1.79-4-4s1.79-4 4-4c1.93 0 3.5 1.34 3.84 3.25H18c-.17-.67-.83-1.75-2-1.75z"/>
  </svg>
)

const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-dark)',
      borderTop: '1px solid var(--border)',
    }}>
      {/* Fila principal: logo | nav | redes */}
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 60px', gap: 32, flexWrap: 'wrap',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo-blanco.png" alt="Prisxel" style={{ height: 40, width: 'auto' }} />
        </Link>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {navLinks.map(l => (
            <Link key={l.href} to={l.href} style={{
              fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s',
            }} className="footer-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Redes sociales */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <a href="https://instagram.com/prisxel.studio" target="_blank" rel="noreferrer"
            style={{ color: 'var(--fg-muted)', transition: 'color 0.2s' }} className="footer-link">
            <IconInstagram />
          </a>
          <a href="https://linkedin.com/company/prisxel" target="_blank" rel="noreferrer"
            style={{ color: 'var(--fg-muted)', transition: 'color 0.2s' }} className="footer-link">
            <IconLinkedin />
          </a>
          <a href="https://behance.net/prisxel" target="_blank" rel="noreferrer"
            style={{ color: 'var(--fg-muted)', transition: 'color 0.2s' }} className="footer-link">
            <IconBehance />
          </a>
        </div>
      </div>

      {/* Barra de contacto */}
      <div style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 60px',
      }}>
        <div style={{
          maxWidth: 1440, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, flexWrap: 'wrap',
        }}>
          {/* Dirección */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '0 32px', borderRight: '1px solid var(--border)',
          }}>
            <span style={{ color: 'var(--accent)' }}><IconLocation /></span>
            <span style={{ fontSize: 14, color: 'var(--fg-muted)' }}>Calle 87 # 96-90</span>
          </div>

          {/* Email */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '0 32px', borderRight: '1px solid var(--border)',
          }}>
            <span style={{ color: 'var(--accent)' }}><IconMail /></span>
            <a href="mailto:disenoprisxel@gmail.com" style={{
              fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s',
            }} className="footer-link">
              disenoprisxel@gmail.com
            </a>
          </div>

          {/* Teléfono */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '0 32px',
          }}>
            <span style={{ color: 'var(--accent)' }}><IconPhone /></span>
            <a href="tel:+573173581768" style={{
              fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s',
            }} className="footer-link">
              317 358 1768
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ padding: '20px 60px', maxWidth: 1440, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: 'var(--fg-muted)', textAlign: 'center' }}>
          © 2026 PRISXEL. Todos los derechos reservados.
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: var(--fg-light) !important; }
        @media (max-width: 768px) {
          footer > div { padding: 20px 24px !important; }
          footer nav { gap: 20px !important; }
          footer div[style*='justify-content: center'] > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding: 12px 0 !important;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

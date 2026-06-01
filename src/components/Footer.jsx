import { Link } from 'react-router-dom'

const services = [
  { label: 'Diseño Web', href: '/servicios/diseno-web' },
  { label: 'Renders Arquitectónicos', href: '/servicios/renders' },
  { label: 'Recorridos Virtuales', href: '/servicios/recorridos-virtuales' },
  { label: 'Motion y Video', href: '/servicios/motion-video' },
]

const company = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Cotizar proyecto', href: '/cotizar' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-dark)',
      borderTop: '1px solid var(--border)',
      padding: '60px 60px 44px',
    }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
          marginBottom: 40,
        }}>
          <div>
            <Link to="/" style={{
              fontFamily: 'var(--font-h)', fontSize: 20, fontWeight: 800,
              letterSpacing: 6, color: 'var(--fg-light)', display: 'block', marginBottom: 12,
            }}>
              PRISXEL
            </Link>
            <p style={{ fontSize: 13, color: 'var(--fg-muted)', maxWidth: 240, lineHeight: 1.6 }}>
              Estudio de diseño digital especializado en experiencias visuales de alto impacto.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--fg-muted)', marginBottom: 20 }}>
                SERVICIOS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {services.map(l => (
                  <Link key={l.href} to={l.href} style={{
                    fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s',
                  }} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--fg-muted)', marginBottom: 20 }}>
                EMPRESA
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {company.map(l => (
                  <Link key={l.href} to={l.href} style={{
                    fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s',
                  }} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--fg-muted)', marginBottom: 20 }}>
                CONTACTO
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a href="mailto:hola@prisxel.com" style={{ fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s' }} className="footer-link">
                  hola@prisxel.com
                </a>
                <a href="https://www.prisxel.com" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--fg-muted)', transition: 'color 0.2s' }} className="footer-link">
                  www.prisxel.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 32, flexWrap: 'wrap' }}>
          {['Instagram', 'Behance', 'LinkedIn', 'YouTube'].map(s => (
            <a key={s} href="#" style={{
              fontSize: 12, color: 'var(--fg-muted)', letterSpacing: 2,
              fontWeight: 500, transition: 'color 0.2s',
            }} className="footer-link">
              {s.toUpperCase()}
            </a>
          ))}
        </div>

        <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />

        <p style={{
          fontSize: 12, color: 'var(--fg-muted)', textAlign: 'center',
        }}>
          © 2026 PRISXEL. Todos los derechos reservados.
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: var(--fg-light) !important; }
        @media (max-width: 768px) {
          footer { padding: 40px 24px 32px !important; }
        }
      `}</style>
    </footer>
  )
}

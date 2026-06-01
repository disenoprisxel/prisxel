import { Link } from 'react-router-dom'

const socials = [
  { name: 'Instagram', handle: '@prisxel.studio', href: 'https://instagram.com/prisxel.studio', icon: '📸' },
  { name: 'Behance', handle: 'prisxel', href: 'https://behance.net/prisxel', icon: '🎨' },
  { name: 'LinkedIn', handle: 'Prisxel Studio', href: 'https://linkedin.com/company/prisxel', icon: '💼' },
]

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'disenoprisxel@gmail.com', href: 'mailto:disenoprisxel@gmail.com' },
  { icon: '💬', label: 'WhatsApp', value: '317 358 1768', href: 'https://wa.me/573173581768' },
  { icon: '📍', label: 'Dirección', value: 'Calle 87 # 96-90', href: null },
  { icon: '🌐', label: 'Web', value: 'www.prisxel.com', href: 'https://www.prisxel.com' },
]

export default function Contacto() {
  return (
    <div>
      {/* Hero split */}
      <section style={{ display: 'flex', minHeight: 600, overflow: 'hidden' }}>
        <div style={{
          flex: 1, background: 'var(--bg-dark)', padding: '80px 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 36,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>CONTACTO</p>
            <h1 style={{
              fontFamily: 'var(--font-h)', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
            }}>
              Hablemos de tu proyecto
            </h1>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8, maxWidth: 440 }}>
              Estamos listos para escucharte. Escríbenos, llámanos o agenda una llamada — como prefieras.
            </p>
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {contactInfo.map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'var(--bg-slate)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18,
                }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontSize: 11, color: 'var(--fg-muted)', fontWeight: 600, letterSpacing: 2, marginBottom: 2 }}>
                    {c.label.toUpperCase()}
                  </p>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 15, color: 'var(--fg-light)', transition: 'color 0.2s' }}
                      className="contact-link">
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: 15, color: 'var(--fg-light)' }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA cotizar */}
          <div style={{
            background: 'var(--bg-slate)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 24,
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg-light)', marginBottom: 6 }}>
                ¿Quieres iniciar un proyecto?
              </p>
              <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
                Completa nuestro formulario de cotización y te respondemos en menos de 24 horas con una propuesta personalizada.
              </p>
            </div>
            <Link to="/cotizar" style={{
              display: 'inline-block', textAlign: 'center',
              padding: '13px 28px', borderRadius: 9999,
              background: 'var(--accent)', color: 'var(--fg-light)',
              fontSize: 14, fontWeight: 700,
            }}>
              Cotizar proyecto →
            </Link>
          </div>
        </div>

        <div style={{
          flex: 1, overflow: 'hidden',
          background: 'url(/images/service-arch.jpg) center/cover no-repeat',
          position: 'relative', minHeight: 400,
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(270deg, transparent 40%, rgba(10,10,10,0.4) 100%)',
          }} />
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Stats */}
      <section style={{ background: 'var(--bg-navy)', padding: '40px 60px' }}>
        <div style={{
          maxWidth: 1440, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        }}>
          {[
            { label: 'Respuesta en', value: '< 24 horas' },
            { label: 'Proyectos completados', value: '150+' },
            { label: 'Países de operación', value: '4+' },
            { label: 'Satisfacción', value: '100%' },
          ].map(s => (
            <div key={s.label} style={{ flex: '1 1 160px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--accent)' }}>
                {s.value}
              </p>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Socials + Llamada */}
      <section style={{
        background: 'var(--bg-slate)', padding: '100px 60px',
        display: 'flex', gap: 80, flexWrap: 'wrap', alignItems: 'flex-start',
      }}>
        {/* Redes sociales */}
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>SÍGUENOS</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)' }}>
              Encuéntranos en redes
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
              Mira nuestro trabajo en tiempo real, procesos creativos y proyectos en curso.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {socials.map(s => (
              <a key={s.name} href={s.href} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '18px 24px', borderRadius: 14,
                background: 'var(--bg-dark)', border: '1px solid var(--border)',
                color: 'var(--fg-light)', transition: 'border-color 0.2s, transform 0.15s',
              }}
                className="social-link"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 22 }}>{s.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{s.name}</span>
                </div>
                <span style={{ fontSize: 13, color: 'var(--fg-muted)' }}>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Llamada + mapa/disponibilidad */}
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>AGENDA UNA LLAMADA</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)' }}>
              Prefiero hablar contigo
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
              Agenda una videollamada de 30 minutos sin compromiso. Analizamos tu proyecto y te orientamos sobre la mejor solución.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-dark)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 20,
          }}>
            {[
              { icon: '⏱', text: '30 minutos de sesión gratuita' },
              { icon: '📹', text: 'Videollamada por Zoom o Meet' },
              { icon: '✅', text: 'Sin compromiso, 100% informativa' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ fontSize: 15, color: 'var(--fg-muted)' }}>{item.text}</span>
              </div>
            ))}
            <a href="#" style={{
              display: 'block', textAlign: 'center',
              padding: '14px 28px', borderRadius: 9999,
              background: 'var(--bg-slate)', border: '1px solid var(--border)',
              fontSize: 14, fontWeight: 700, color: 'var(--fg-light)',
              marginTop: 8, transition: 'border-color 0.2s',
            }}
              className="social-link"
            >
              Agendar llamada →
            </a>
          </div>

          <div style={{
            background: 'var(--bg-dark)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <span style={{ fontSize: 24 }}>💬</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg-light)' }}>WhatsApp directo</p>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 2 }}>Respuesta rápida en horario de oficina</p>
              </div>
            </div>
            <a href="https://wa.me/573173581768" target="_blank" rel="noreferrer" style={{
              display: 'block', textAlign: 'center',
              padding: '14px 28px', borderRadius: 9999,
              background: '#25D366', color: '#fff',
              fontSize: 14, fontWeight: 700,
            }}>
              Escribir por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .contact-link:hover { color: var(--accent) !important; }
        .social-link:hover { border-color: var(--accent) !important; }
        @media (max-width: 768px) {
          section { flex-direction: column !important; padding: 60px 24px !important; }
          section > div[style*='flex: 1']:last-child { min-height: 300px; }
        }
      `}</style>
    </div>
  )
}

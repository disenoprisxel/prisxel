import { Link } from 'react-router-dom'

const socials = [
  { name: 'Instagram', handle: '@prisxel.studio', href: 'https://instagram.com/prisxel.studio', icon: '📸' },
  { name: 'Behance', handle: 'prisxel', href: 'https://behance.net/prisxel', icon: '🎨' },
  { name: 'LinkedIn', handle: 'Prisxel Studio', href: 'https://linkedin.com/company/prisxel', icon: '💼' },
]

export default function Contacto() {
  return (
    <div>

      {/* ── 1. HERO: split — contenido izq | imagen der ── */}
      <section style={{ display: 'flex', minHeight: 600, overflow: 'hidden' }}>

        {/* Lado izquierdo — contenido */}
        <div style={{
          flex: 1, minWidth: 0,
          background: 'var(--bg-dark)',
          padding: '80px 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 48,
        }}>
          {/* Título */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>CONTACTO</p>
            <h1 style={{
              fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 3.5vw, 52px)',
              fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
            }}>
              Hablemos de<br />tu proyecto
            </h1>
            <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.8, maxWidth: 380 }}>
              Estamos en Bogotá y trabajamos de forma remota con clientes en toda Latinoamérica.
            </p>
          </div>

          {/* Datos de contacto — 3 items en columna, limpios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--border)' }}>
            {[
              { icon: '📧', label: 'Email', value: 'disenoprisxel@gmail.com', href: 'mailto:disenoprisxel@gmail.com' },
              { icon: '💬', label: 'WhatsApp', value: '317 358 1768', href: 'https://wa.me/573173581768' },
              { icon: '📍', label: 'Dirección', value: 'Calle 87 # 96-90, Bogotá', href: null },
            ].map(c => (
              <div key={c.label} style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: '20px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'var(--bg-slate)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, color: 'var(--fg-muted)', fontWeight: 600, letterSpacing: 2, marginBottom: 3 }}>
                    {c.label.toUpperCase()}
                  </p>
                  {c.href
                    ? <a href={c.href} style={{ fontSize: 15, color: 'var(--fg-light)', transition: 'color 0.2s' }} className="contact-link">{c.value}</a>
                    : <p style={{ fontSize: 15, color: 'var(--fg-light)' }}>{c.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/cotizar" style={{
              padding: '13px 28px', borderRadius: 9999,
              background: 'var(--accent)', color: 'var(--fg-light)',
              fontSize: 14, fontWeight: 700,
            }}>
              Cotizar proyecto →
            </Link>
            <a href="https://wa.me/573173581768" target="_blank" rel="noreferrer" style={{
              padding: '13px 28px', borderRadius: 9999,
              background: '#25D366', color: '#fff',
              fontSize: 14, fontWeight: 600,
            }}>
              WhatsApp →
            </a>
          </div>
        </div>

        {/* Lado derecho — imagen */}
        <div style={{
          flex: 1, minWidth: 0,
          background: 'url(/images/service-arch.jpg) center/cover no-repeat',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(270deg, transparent 50%, rgba(10,10,10,0.25) 100%)',
          }} />
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* ── 2. STATS ── */}
      <section style={{ background: 'var(--bg-navy)', padding: '36px 60px' }}>
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
            <div key={s.label} style={{ flex: '1 1 140px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-h)', fontSize: 34, fontWeight: 700, color: 'var(--accent)' }}>
                {s.value}
              </p>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* ── 3. MAPA (sin lista de datos — ya están arriba) ── */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>UBICACIÓN</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)' }}>
              Calle 87 # 96-90, Bogotá
            </h2>
          </div>
          <div style={{
            borderRadius: 20, overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5270.664488042536!2d-74.10613690000001!3d4.718388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84b9f4423ca5%3A0xf16c931fbd264ab8!2sCl.%2087%20%2396-90%2C%20Bogot%C3%A1!5e1!3m2!1ses-419!2sco!4v1780330966602!5m2!1ses-419!2sco"
              width="100%"
              height="440"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Prisxel — Calle 87 # 96-90, Bogotá"
            />
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* ── 4. REDES + LLAMADA en una sola sección ── */}
      <section style={{
        background: 'var(--bg-slate)', padding: '80px 60px',
        display: 'flex', gap: 60, flexWrap: 'wrap', alignItems: 'flex-start',
      }}>
        {/* Redes */}
        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>SÍGUENOS</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 28, fontWeight: 700, color: 'var(--fg-light)' }}>
              Nuestro trabajo en redes
            </h2>
            <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
              Procesos creativos, proyectos en curso y resultados finales.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: 12,
                background: 'var(--bg-dark)', border: '1px solid var(--border)',
                color: 'var(--fg-light)', transition: 'border-color 0.2s',
              }} className="social-link">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{s.name}</span>
                </div>
                <span style={{ fontSize: 13, color: 'var(--fg-muted)' }}>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Llamada */}
        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>AGENDA UNA LLAMADA</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 28, fontWeight: 700, color: 'var(--fg-light)' }}>
              ¿Prefieres hablar?
            </h2>
            <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
              Videollamada de 30 min gratuita, sin compromiso. Analizamos tu proyecto juntos.
            </p>
          </div>
          <div style={{
            background: 'var(--bg-dark)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            {[
              { icon: '⏱', text: '30 minutos de sesión gratuita' },
              { icon: '📹', text: 'Zoom o Google Meet' },
              { icon: '✅', text: 'Sin compromiso, 100% informativa' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: 'var(--fg-muted)' }}>{item.text}</span>
              </div>
            ))}
            <a href="#" style={{
              display: 'block', textAlign: 'center', marginTop: 4,
              padding: '13px 24px', borderRadius: 9999,
              background: 'var(--bg-slate)', border: '1px solid var(--border)',
              fontSize: 14, fontWeight: 700, color: 'var(--fg-light)',
              transition: 'border-color 0.2s',
            }} className="social-link">
              Agendar llamada →
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .contact-link:hover { color: var(--accent) !important; }
        .social-link:hover { border-color: var(--accent) !important; }
        @media (max-width: 768px) {
          section { padding: 60px 24px !important; }
          section > div[style*='gap: 32'] { flex-direction: column !important; }
        }
      `}</style>
    </div>
  )
}

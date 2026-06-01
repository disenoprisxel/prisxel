import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  const inputStyle = {
    width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '14px 16px', color: 'var(--fg-light)',
    fontSize: 15, outline: 'none', transition: 'border-color 0.2s',
  }
  const labelStyle = { fontSize: 13, fontWeight: 500, color: 'var(--fg-muted)', marginBottom: 6, display: 'block' }

  return (
    <div>
      {/* Hero split */}
      <section style={{ display: 'flex', height: 600, overflow: 'hidden' }}>
        <div style={{
          flex: 1, background: 'var(--bg-dark)', padding: '80px 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>CONTACTO</p>
            <h1 style={{
              fontFamily: 'var(--font-h)', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
            }}>
              ¿Tienes un proyecto en mente?
            </h1>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8, maxWidth: 440 }}>
              Estamos listos para escucharte. Ya sea que tengas una idea clara o estés empezando, nos encantaría ser parte de tu proyecto.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '📧', label: 'Email', value: 'hola@prisxel.com' },
              { icon: '🌐', label: 'Web', value: 'www.prisxel.com' },
              { icon: '📍', label: 'Ubicación', value: 'Latinoamérica · Remoto global' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{c.icon}</span>
                <div>
                  <p style={{ fontSize: 12, color: 'var(--fg-muted)', fontWeight: 500, letterSpacing: 1, marginBottom: 2 }}>{c.label.toUpperCase()}</p>
                  <p style={{ fontSize: 15, color: 'var(--fg-light)' }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          flex: 1, overflow: 'hidden',
          background: 'url(/images/service-arch.jpg) center/cover no-repeat',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(270deg, transparent, rgba(10,10,10,0.3))',
          }} />
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Contact info row */}
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
              <p style={{
                fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--accent)',
              }}>{s.value}</p>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Form + Social */}
      <section style={{
        background: 'var(--bg-slate)', padding: '100px 60px',
        display: 'flex', gap: 80, flexWrap: 'wrap', alignItems: 'flex-start',
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>ENVÍANOS UN MENSAJE</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--fg-light)' }}>
              Escríbenos directamente
            </h2>
          </div>

          {sent ? (
            <div style={{
              background: 'var(--bg-dark)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 40, textAlign: 'center',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <span style={{ fontSize: 48, color: 'var(--accent)' }}>✓</span>
              <h3 style={{ fontFamily: 'var(--font-h)', fontSize: 22, fontWeight: 700, color: 'var(--fg-light)' }}>
                Mensaje enviado
              </h3>
              <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                Gracias por escribirnos. Te responderemos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <label style={labelStyle}>Nombre *</label>
                  <input name="nombre" required value={form.nombre} onChange={handleChange}
                    placeholder="Tu nombre" style={inputStyle} />
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="tu@email.com" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Asunto</label>
                <input name="asunto" value={form.asunto} onChange={handleChange}
                  placeholder="¿Sobre qué quieres hablar?" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mensaje *</label>
                <textarea name="mensaje" required value={form.mensaje} onChange={handleChange}
                  placeholder="Cuéntanos..." rows={5}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
              </div>
              <button type="submit" style={{
                padding: '16px 32px', borderRadius: 9999,
                background: 'var(--accent)', color: 'var(--fg-light)',
                fontSize: 15, fontWeight: 700,
              }}>
                Enviar mensaje
              </button>
            </form>
          )}
        </div>

        <div style={{ flex: '0 1 320px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)', marginBottom: 24 }}>SÍGUENOS</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { name: 'Instagram', handle: '@prisxel.studio' },
                { name: 'Behance', handle: 'prisxel' },
                { name: 'LinkedIn', handle: 'Prisxel Studio' },
                { name: 'YouTube', handle: '@prisxel' },
              ].map(s => (
                <a key={s.name} href="#" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', borderRadius: 12,
                  background: 'var(--bg-dark)', border: '1px solid var(--border)',
                  color: 'var(--fg-light)', transition: 'border-color 0.2s',
                }}
                  className="social-link"
                >
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--fg-muted)' }}>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--bg-dark)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 24,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg-light)', marginBottom: 8 }}>¿Prefieres una llamada?</p>
            <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: 20 }}>
              Agenda una videollamada de 30 minutos sin compromiso para hablar de tu proyecto.
            </p>
            <a href="#" style={{
              display: 'block', textAlign: 'center', padding: '12px 24px',
              borderRadius: 9999, background: 'var(--bg-slate)', border: '1px solid var(--border)',
              fontSize: 14, fontWeight: 600, color: 'var(--fg-light)',
            }}>
              Agendar llamada →
            </a>
          </div>
        </div>
      </section>

      <style>{`
        input:focus, textarea:focus { border-color: var(--accent) !important; }
        .social-link:hover { border-color: var(--accent) !important; }
        @media (max-width: 768px) {
          section[style*='height: 600'] { height: auto !important; flex-direction: column !important; }
          section { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}

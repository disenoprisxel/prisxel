import { useState } from 'react'

const serviceOptions = [
  'Diseño Web',
  'Renders Arquitectónicos',
  'Recorridos Virtuales',
  'Motion y Video',
  'Otro',
]

const budgetOptions = [
  'Menos de $1,000 USD',
  '$1,000 – $5,000 USD',
  '$5,000 – $15,000 USD',
  '$15,000 – $50,000 USD',
  'Más de $50,000 USD',
]

const nextSteps = [
  { num: '01', title: 'Revisamos tu solicitud', desc: 'En menos de 24 horas analizamos los detalles de tu proyecto.' },
  { num: '02', title: 'Te contactamos', desc: 'Un especialista te llama o escribe para agendar una reunión.' },
  { num: '03', title: 'Propuesta personalizada', desc: 'Enviamos una propuesta detallada con alcance, timeline y precio.' },
  { num: '04', title: 'Comenzamos', desc: 'Firmamos y arrancamos. Tu proyecto empieza a cobrar vida.' },
]

export default function Cotizar() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    servicio: '', presupuesto: '', descripcion: '', plazo: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '14px 16px', color: 'var(--fg-light)',
    fontSize: 15, outline: 'none', transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontSize: 13, fontWeight: 500, color: 'var(--fg-muted)', marginBottom: 6, display: 'block',
  }

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: `url(/images/slide-archviz.jpg) center/cover no-repeat`,
        position: 'relative', overflow: 'hidden',
        padding: '80px 60px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(270deg, #0A0A0AF8 0%, #0A0A0AE8 40%, #0A0A0ADD 100%)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1440, margin: '0 auto',
          display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>
              COTIZAR PROYECTO
            </p>
            <h1 style={{
              fontFamily: 'var(--font-h)', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700, lineHeight: 1.15, color: 'var(--fg-light)',
            }}>
              Hablemos de tu proyecto
            </h1>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
              Completa el formulario y uno de nuestros especialistas te contactará en menos de 24 horas con una propuesta personalizada.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
              {[
                { icon: '📧', label: 'hola@prisxel.com' },
                { icon: '🌐', label: 'www.prisxel.com' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 18 }}>{c.icon}</span>
                  <span style={{ fontSize: 15, color: 'var(--fg-muted)' }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            flex: '1 1 440px',
            background: 'var(--bg-slate)', border: '1px solid var(--border)',
            borderRadius: 20, padding: 40,
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'rgba(249,115,22,0.15)', border: '2px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                }}>
                  <span style={{ fontSize: 32, color: 'var(--accent)' }}>✓</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-h)', fontSize: 24, fontWeight: 700, color: 'var(--fg-light)' }}>
                  ¡Solicitud enviada!
                </h3>
                <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                  Hemos recibido tu solicitud. Uno de nuestros especialistas te contactará en las próximas 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 22, fontWeight: 700, color: 'var(--fg-light)', marginBottom: 4 }}>
                  Cuéntanos tu proyecto
                </h2>

                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <label style={labelStyle}>Nombre *</label>
                    <input name="nombre" required value={form.nombre} onChange={handleChange}
                      placeholder="Tu nombre" style={inputStyle} />
                  </div>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <label style={labelStyle}>Empresa</label>
                    <input name="empresa" value={form.empresa} onChange={handleChange}
                      placeholder="Nombre de empresa" style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="tu@email.com" style={inputStyle} />
                  </div>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <label style={labelStyle}>Teléfono</label>
                    <input name="telefono" value={form.telefono} onChange={handleChange}
                      placeholder="+52 55 0000 0000" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Servicio de interés *</label>
                  <select name="servicio" required value={form.servicio} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Selecciona un servicio</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Presupuesto estimado</label>
                  <select name="presupuesto" value={form.presupuesto} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Selecciona un rango</option>
                    {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Plazo deseado</label>
                  <input name="plazo" value={form.plazo} onChange={handleChange}
                    placeholder="Ej: 2 meses, antes de diciembre..." style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Descripción del proyecto *</label>
                  <textarea name="descripcion" required value={form.descripcion} onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas, tus objetivos, referencias que te gusten..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                </div>

                <button type="submit" style={{
                  padding: '16px 32px', borderRadius: 9999,
                  background: 'var(--accent)', color: 'var(--fg-light)',
                  fontSize: 15, fontWeight: 700,
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.target.style.opacity = '0.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  Enviar solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* What happens next */}
      <section style={{ background: 'var(--bg-navy)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>¿QUÉ PASA DESPUÉS?</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--fg-light)' }}>
              Tu camino hacia el proyecto ideal
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {nextSteps.map(s => (
              <div key={s.num} style={{
                flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 16,
                borderLeft: '2px solid var(--accent)', paddingLeft: 24,
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--accent)' }}>{s.num}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg-light)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: var(--accent) !important;
        }
        @media (max-width: 768px) {
          section { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}

import { Link } from 'react-router-dom'

const process = [
  { num: '01', title: 'Descubrimiento', desc: 'Analizamos tu negocio, audiencia y competencia para entender el contexto estratégico completo.' },
  { num: '02', title: 'Diseño UX/UI', desc: 'Creamos wireframes, prototipos y el diseño visual final. Iteramos contigo hasta la perfección.' },
  { num: '03', title: 'Desarrollo', desc: 'Construimos el sitio con código limpio, optimizado para velocidad, SEO y accesibilidad.' },
  { num: '04', title: 'Lanzamiento', desc: 'Probamos exhaustivamente y lanzamos. Te entregamos control total y soporte continuo.' },
]

const services = [
  { title: 'Landing Pages', desc: 'Páginas de alta conversión diseñadas para captar leads y cerrar ventas.' },
  { title: 'Sitios Corporativos', desc: 'Presencia digital profesional que refleja el valor de tu marca.' },
  { title: 'E-commerce', desc: 'Tiendas online que convierten visitantes en compradores recurrentes.' },
  { title: 'Plataformas Web', desc: 'Aplicaciones web complejas con interfaces intuitivas y escalables.' },
  { title: 'Rediseño Web', desc: 'Transformamos sitios desactualizados en experiencias modernas y efectivas.' },
  { title: 'Optimización CRO', desc: 'Mejoramos la tasa de conversión con análisis de datos y pruebas A/B.' },
]

export default function ServiceDisenioWeb() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: 680,
        background: 'url(/images/service-web.jpg) center/cover no-repeat',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, #0A0A0A10 0%, #0A0A0A60 30%, #0A0A0AE0 70%, #0A0A0AF8 100%)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1, textAlign: 'center',
          maxWidth: 900, padding: '0 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>
            SERVICIO · DISEÑO WEB
          </p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            Sitios web que convierten visitantes en clientes
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 580 }}>
            Diseño estratégico + desarrollo de alto rendimiento para presencias digitales que generan resultados reales.
          </p>
          <Link to="/cotizar" style={{
            padding: '14px 36px', borderRadius: 9999,
            background: 'var(--fg-light)', color: 'var(--fg-dark)',
            fontSize: 14, fontWeight: 600, marginTop: 8,
          }}>
            Cotizar proyecto web
          </Link>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* What we do */}
      <section style={{ background: 'var(--bg-navy)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ maxWidth: 700, marginBottom: 64, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>QUÉ HACEMOS</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
              color: 'var(--fg-light)', lineHeight: 1.2,
            }}>
              Diseño web que va más allá de lo visual
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
              Un sitio web es la primera impresión de tu negocio en el mundo digital. Lo construimos con estrategia, tecnología y creatividad para que se convierta en tu mejor vendedor.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {services.map(s => (
              <div key={s.title} style={{
                flex: '1 1 280px',
                background: 'var(--bg-slate)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 12,
                transition: 'border-color 0.2s',
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg-light)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Process */}
      <section style={{ background: 'var(--bg-slate)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ maxWidth: 600, marginBottom: 64, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>NUESTRO PROCESO</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
              color: 'var(--fg-light)', lineHeight: 1.2,
            }}>
              De la idea al lanzamiento
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {process.map(p => (
              <div key={p.num} style={{
                flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 16,
                borderLeft: '2px solid var(--accent)', paddingLeft: 24,
              }}>
                <span style={{
                  fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--accent)',
                }}>
                  {p.num}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--fg-light)' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Portfolio preview */}
      <section style={{ background: 'var(--bg-warm)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--fg-dark)',
            }}>
              Proyectos web destacados
            </h2>
            <Link to="/portafolio" style={{ fontSize: 14, color: 'var(--fg-dark)', fontWeight: 600 }}>
              Ver portafolio completo →
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{
                flex: '1 1 300px', height: 240, borderRadius: 12,
                background: 'linear-gradient(135deg, var(--bg-navy), var(--bg-slate))',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--accent)', padding: '100px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 700, color: 'var(--fg-light)', maxWidth: 800,
        }}>
          ¿Listo para tu nuevo sitio web?
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', maxWidth: 500 }}>
          Cuéntanos sobre tu proyecto y recibe una propuesta personalizada
        </p>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 600,
        }}>
          Cotizar ahora
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 24px !important; }
          section[style*='height: 680'] { height: auto !important; padding-top: 100px !important; padding-bottom: 60px !important; }
        }
      `}</style>
    </div>
  )
}

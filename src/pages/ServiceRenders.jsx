import { Link } from 'react-router-dom'

const types = [
  { title: 'Renders Exteriores', desc: 'Fachadas y entornos urbanos con luz natural y materiales fotorrealistas.' },
  { title: 'Renders Interiores', desc: 'Ambientaciones de espacios residenciales y comerciales con alto detalle.' },
  { title: 'Perspectivas Aéreas', desc: 'Vistas de pájaro que muestran el contexto urbano y la implantación del proyecto.' },
  { title: 'Renders Conceptuales', desc: 'Visualizaciones artísticas para proyectos en etapa de diseño o concursos.' },
]

export default function ServiceRenders() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: 680,
        background: 'url(/images/service-arch.jpg) center/cover no-repeat',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
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
            SERVICIO · RENDERS ARQUITECTÓNICOS
          </p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            Visualizaciones que enamoran antes de construir
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 580 }}>
            Renders fotorrealistas de alta calidad que comunican tu visión arquitectónica con precisión y emoción.
          </p>
          <Link to="/cotizar" style={{
            padding: '14px 36px', borderRadius: 9999,
            background: 'var(--fg-light)', color: 'var(--fg-dark)',
            fontSize: 14, fontWeight: 600, marginTop: 8,
          }}>
            Solicitar renders
          </Link>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Full-width gallery */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 700 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>POR QUÉ ELEGIRNOS</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
              color: 'var(--fg-light)', lineHeight: 1.2,
            }}>
              Fotorrealismo que vende proyectos
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
              Nuestros renders capturan la esencia de cada proyecto: materiales, luz, sombras y atmósfera. Una imagen que convence a inversionistas, clientes y comités de aprobación.
            </p>
          </div>

          {/* Large showcase */}
          <div style={{ display: 'flex', gap: 24, height: 400, flexWrap: 'wrap' }}>
            <div style={{
              flex: 2, minWidth: 300, borderRadius: 16,
              background: 'linear-gradient(135deg, var(--bg-navy), var(--bg-slate))',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 64, opacity: 0.08 }}>◆</span>
            </div>
            <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[1, 2].map(n => (
                <div key={n} style={{
                  flex: 1, borderRadius: 16,
                  background: 'var(--bg-slate)', border: '1px solid var(--border)',
                }} />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[
              { num: '500+', label: 'Renders entregados' },
              { num: '48h', label: 'Tiempo de respuesta' },
              { num: '100%', label: 'Clientes satisfechos' },
            ].map(s => (
              <div key={s.label} style={{ flex: '1 1 160px' }}>
                <p style={{
                  fontFamily: 'var(--font-h)', fontSize: 48, fontWeight: 700, color: 'var(--accent)',
                }}>{s.num}</p>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Types */}
      <section style={{ background: 'var(--bg-navy)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>TIPOS DE RENDER</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
              color: 'var(--fg-light)',
            }}>
              ¿Qué tipo de render necesitas?
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {types.map(t => (
              <div key={t.title} style={{
                flex: '1 1 260px',
                background: 'var(--bg-slate)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg-light)' }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Process */}
      <section style={{ background: 'var(--bg-slate)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>EL PROCESO</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              Del plano al render en 4 pasos
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { num: '01', title: 'Recibimos tus archivos', desc: 'Planos, modelos 3D, referencias de materiales y acabados.' },
              { num: '02', title: 'Modelado y composición', desc: 'Construimos o importamos el modelo y configuramos cámaras y composición.' },
              { num: '03', title: 'Iluminación y materiales', desc: 'Aplicamos materiales fotorrealistas e iluminación que captura la atmósfera deseada.' },
              { num: '04', title: 'Entrega y revisiones', desc: 'Entregamos alta resolución e incluimos rondas de revisión hasta tu aprobación.' },
            ].map(p => (
              <div key={p.num} style={{
                flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 16,
                borderLeft: '2px solid var(--accent)', paddingLeft: 24,
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--accent)' }}>{p.num}</span>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--fg-light)' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
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
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700, color: 'var(--fg-light)', maxWidth: 700,
        }}>
          ¿Tienes un proyecto que visualizar?
        </h2>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 600,
        }}>
          Solicitar cotización
        </Link>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, color: 'rgba(255,255,255,0.8)' }}>
          WWW.PRISXEL.COM
        </p>
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

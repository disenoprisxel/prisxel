import { Link, useParams } from 'react-router-dom'

const cases = {
  1: {
    title: 'Torre Residencial Norte',
    subtitle: 'Renders Arquitectónicos · 2025',
    client: 'Desarrolladora Inmobiliaria NorCap',
    service: 'Renders Arquitectónicos',
    year: '2025',
    duration: '3 semanas',
    deliverables: '24 renders + 360° panoramas',
    challenge: 'NorCap necesitaba vender el 40% de las unidades de una torre residencial de 120 departamentos antes de iniciar la construcción. Sin un edificio físico que mostrar, la estrategia de ventas dependía completamente de la capacidad de los renders para generar confianza y deseo.',
    solution: 'Desarrollamos una suite completa de renders fotorrealistas que incluía fachadas exteriores con contexto urbano real, interiores de departamentos tipo con diferentes paletas de acabados, perspectivas aéreas del conjunto y vistas desde cada tipología de departamento.',
    results: [
      { num: '60%', label: 'de unidades vendidas antes del inicio de obra' },
      { num: '3x', label: 'retorno sobre la inversión en los renders' },
      { num: '48h', label: 'tiempo de entrega de primeras vistas' },
    ],
    tags: ['Renders Exteriores', 'Renders Interiores', 'Perspectiva Aérea', '360° Panorama'],
  },
}

export default function CasoEstudio() {
  const { id } = useParams()
  const caso = cases[id] || cases[1]

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: 600,
        background: 'url(/images/portfolio-1.jpg) center/cover no-repeat',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.95) 75%, #0A0A0A 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0 60px 48px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {caso.tags.map(t => (
              <span key={t} style={{
                padding: '4px 12px', borderRadius: 9999,
                background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)',
                fontSize: 11, color: 'var(--accent)', fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.1,
          }}>
            {caso.title}
          </h1>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)' }}>{caso.subtitle}</p>
        </div>
      </section>

      {/* Meta info row */}
      <section style={{ background: 'var(--bg-navy)', padding: '40px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', gap: 60, flexWrap: 'wrap' }}>
          {[
            { label: 'Cliente', value: caso.client },
            { label: 'Servicio', value: caso.service },
            { label: 'Año', value: caso.year },
            { label: 'Duración', value: caso.duration },
            { label: 'Entregables', value: caso.deliverables },
          ].map(m => (
            <div key={m.label} style={{ flex: '1 1 140px' }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, color: 'var(--fg-muted)', marginBottom: 6 }}>
                {m.label.toUpperCase()}
              </p>
              <p style={{ fontSize: 14, color: 'var(--fg-light)', lineHeight: 1.5 }}>{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Challenge */}
      <section style={{
        background: 'var(--bg-dark)', padding: '100px 60px',
        display: 'flex', gap: 80, flexWrap: 'wrap', alignItems: 'flex-start',
      }}>
        <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>EL DESAFÍO</p>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
            El reto
          </h2>
        </div>
        <div style={{ flex: 1, minWidth: 300 }}>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', lineHeight: 1.9 }}>
            {caso.challenge}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Image gallery */}
      <section style={{ background: 'var(--bg-slate)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', gap: 24, height: 480, flexWrap: 'wrap' }}>
            <div style={{
              flex: 2, minWidth: 300, borderRadius: 16,
              background: 'linear-gradient(135deg, var(--bg-navy), var(--bg-dark))',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 64, opacity: 0.07 }}>◆</span>
            </div>
            <div style={{ flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[1, 2].map(n => (
                <div key={n} style={{
                  flex: 1, borderRadius: 16,
                  background: 'linear-gradient(135deg, var(--bg-dark), var(--bg-navy))',
                  border: '1px solid var(--border)',
                }} />
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24, height: 280, flexWrap: 'wrap' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{
                flex: '1 1 200px', borderRadius: 16,
                background: 'linear-gradient(135deg, var(--bg-navy), var(--bg-slate))',
                border: '1px solid var(--border)',
              }} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Solution */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px 60px', display: 'flex', gap: 80, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 1 400px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>LA SOLUCIÓN</p>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
            Nuestra propuesta
          </h2>
        </div>
        <div style={{ flex: 1, minWidth: 300 }}>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', lineHeight: 1.9 }}>
            {caso.solution}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Results */}
      <section style={{ background: 'var(--bg-navy)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>RESULTADOS</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              El impacto real
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {caso.results.map(r => (
              <div key={r.label} style={{ flex: '1 1 220px' }}>
                <p style={{
                  fontFamily: 'var(--font-h)', fontSize: 64, fontWeight: 800,
                  color: 'var(--accent)', lineHeight: 1,
                }}>{r.num}</p>
                <p style={{ fontSize: 16, color: 'var(--fg-muted)', marginTop: 12, lineHeight: 1.6 }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* More cases */}
      <section style={{ background: 'var(--bg-slate)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 28, fontWeight: 700, color: 'var(--fg-light)' }}>
              Más proyectos
            </h2>
            <Link to="/portafolio" style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600 }}>
              Ver todos →
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { title: 'Plataforma E-commerce Luna', type: 'Diseño Web', href: '/portafolio/caso/2' },
              { title: 'App Web Fintech Nexus', type: 'Diseño Web', href: '/portafolio/caso/6' },
            ].map(p => (
              <Link key={p.title} to={p.href} style={{
                flex: '1 1 280px', height: 200, borderRadius: 16,
                background: 'linear-gradient(135deg, var(--bg-dark), var(--bg-navy))',
                border: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden', display: 'block',
              }}
                className="portfolio-card"
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px', background: 'linear-gradient(180deg, transparent, rgba(10,10,10,0.9))',
                }}>
                  <p style={{ fontSize: 10, color: 'var(--accent)', fontWeight: 600, letterSpacing: 3, marginBottom: 4 }}>
                    {p.type.toUpperCase()}
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg-light)' }}>{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--accent)', padding: '80px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 700, color: 'var(--fg-light)', maxWidth: 700,
        }}>
          ¿Te gustaría un resultado similar?
        </h2>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 600,
        }}>
          Cotizar proyecto
        </Link>
      </section>

      <style>{`
        .portfolio-card:hover { transform: scale(1.01); transition: transform 0.2s; }
        @media (max-width: 768px) {
          section { padding: 60px 24px !important; }
          section[style*='height: 600'] { height: auto !important; padding-top: 80px !important; }
          section[style*='height: 480'], section[style*='height: 280'] { height: auto !important; }
        }
      `}</style>
    </div>
  )
}

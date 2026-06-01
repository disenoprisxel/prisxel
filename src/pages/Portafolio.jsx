import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['Todos', 'Diseño Web', 'Renders', 'Recorridos Virtuales', 'Motion']

const projects = [
  { id: 1, title: 'Torre Residencial Norte', category: 'Renders', type: 'Renders Arquitectónicos', year: '2025', featured: true },
  { id: 2, title: 'Plataforma E-commerce Luna', category: 'Diseño Web', type: 'Diseño Web', year: '2025', featured: true },
  { id: 3, title: 'Complejo de Oficinas Zenith', category: 'Recorridos Virtuales', type: 'Recorrido Virtual', year: '2025', featured: false },
  { id: 4, title: 'Campaña Visual Korova', category: 'Motion', type: 'Motion & Video', year: '2024', featured: false },
  { id: 5, title: 'Villa Residencial Costa', category: 'Renders', type: 'Renders Arquitectónicos', year: '2024', featured: false },
  { id: 6, title: 'App Web Fintech Nexus', category: 'Diseño Web', type: 'Diseño Web', year: '2024', featured: true },
  { id: 7, title: 'Hotel Boutique Solara', category: 'Recorridos Virtuales', type: 'Recorrido Virtual', year: '2024', featured: false },
  { id: 8, title: 'Showreel Arquitectura 2024', category: 'Motion', type: 'Motion & Video', year: '2024', featured: false },
  { id: 9, title: 'Centro Comercial Plaza Real', category: 'Renders', type: 'Renders Arquitectónicos', year: '2023', featured: false },
]

export default function Portafolio() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)
  const featured = projects.filter(p => p.featured)

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'var(--bg-dark)', padding: '80px 60px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40,
      }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>PORTAFOLIO</p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700, color: 'var(--fg-light)',
          }}>
            Nuestro trabajo
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', maxWidth: 600, lineHeight: 1.6, margin: '0 auto' }}>
            Una selección de proyectos que reflejan nuestra pasión por el diseño y la innovación visual.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              padding: '8px 20px', borderRadius: 9999, fontSize: 13, fontWeight: 500,
              background: active === c ? 'var(--accent)' : 'var(--bg-slate)',
              color: active === c ? 'var(--fg-light)' : 'var(--fg-muted)',
              border: active === c ? 'none' : '1px solid var(--border)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--bg-dark)', padding: '0 60px 80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Row 1: 2 large + 1 */}
          <div style={{ display: 'flex', gap: 24, height: 400, flexWrap: 'wrap' }}>
            {filtered.slice(0, 2).map(p => (
              <Link key={p.id} to={`/portafolio/caso/${p.id}`} style={{
                flex: '1 1 300px', borderRadius: 16, overflow: 'hidden',
                position: 'relative', cursor: 'pointer', display: 'block',
                background: `linear-gradient(135deg, var(--bg-navy), var(--bg-slate))`,
                border: '1px solid var(--border)',
                transition: 'transform 0.2s',
              }}
                className="portfolio-card"
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '24px',
                  background: 'linear-gradient(180deg, transparent, rgba(10,10,10,0.9))',
                }}>
                  <p style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, letterSpacing: 3, marginBottom: 6 }}>
                    {p.type.toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--fg-light)' }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{p.year}</p>
                </div>
              </Link>
            ))}
            {filtered.length > 2 && (
              <Link to={`/portafolio/caso/${filtered[2].id}`} style={{
                flex: '0 1 340px', borderRadius: 16, overflow: 'hidden',
                position: 'relative', display: 'block',
                background: `linear-gradient(135deg, var(--bg-navy), var(--bg-dark))`,
                border: '1px solid var(--border)',
              }}
                className="portfolio-card"
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '24px',
                  background: 'linear-gradient(180deg, transparent, rgba(10,10,10,0.9))',
                }}>
                  <p style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, letterSpacing: 3, marginBottom: 6 }}>
                    {filtered[2].type.toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--fg-light)' }}>{filtered[2].title}</h3>
                </div>
              </Link>
            )}
          </div>

          {/* Row 2: 3 equal */}
          <div style={{ display: 'flex', gap: 24, height: 400, flexWrap: 'wrap' }}>
            {filtered.slice(3, 6).map(p => (
              <Link key={p.id} to={`/portafolio/caso/${p.id}`} style={{
                flex: '1 1 260px', borderRadius: 16, overflow: 'hidden',
                position: 'relative', display: 'block',
                background: `linear-gradient(135deg, var(--bg-slate), var(--bg-navy))`,
                border: '1px solid var(--border)',
              }}
                className="portfolio-card"
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '24px',
                  background: 'linear-gradient(180deg, transparent, rgba(10,10,10,0.9))',
                }}>
                  <p style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, letterSpacing: 3, marginBottom: 6 }}>
                    {p.type.toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-light)' }}>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', gap: 24, height: 360, flexWrap: 'wrap' }}>
            {filtered.slice(6).map(p => (
              <Link key={p.id} to={`/portafolio/caso/${p.id}`} style={{
                flex: '1 1 260px', borderRadius: 16, overflow: 'hidden',
                position: 'relative', display: 'block',
                background: `linear-gradient(135deg, var(--bg-navy), var(--bg-slate))`,
                border: '1px solid var(--border)',
              }}
                className="portfolio-card"
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '24px',
                  background: 'linear-gradient(180deg, transparent, rgba(10,10,10,0.9))',
                }}>
                  <p style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, letterSpacing: 3, marginBottom: 6 }}>
                    {p.type.toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-light)' }}>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Featured case study */}
      <section style={{
        background: 'var(--bg-slate)', height: 520,
        display: 'flex', overflow: 'hidden',
      }}>
        <div style={{
          flex: 1, padding: '60px 48px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24,
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>CASO DESTACADO</p>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700,
            color: 'var(--fg-light)', lineHeight: 1.2,
          }}>
            Torre Residencial Norte
          </h2>
          <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.8, maxWidth: 400 }}>
            Un proyecto de renders arquitectónicos que transformó la estrategia de ventas del desarrollador, generando el 60% de las reservas antes de iniciar construcción.
          </p>
          <Link to="/portafolio/caso/1" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 28px', borderRadius: 9999,
            background: 'var(--accent)', color: 'var(--fg-light)',
            fontSize: 14, fontWeight: 600, width: 'fit-content',
          }}>
            Ver caso de estudio →
          </Link>
        </div>
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, var(--bg-dark), var(--bg-navy))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 80, opacity: 0.07 }}>◆</span>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* CTA */}
      <section style={{
        background: `url(/images/portfolio-1.jpg) center/cover no-repeat`,
        position: 'relative',
        padding: '100px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(22,22,22,0.9), rgba(22,22,22,0.95))',
        }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700, color: 'var(--fg-light)',
          }}>
            ¿Te gustó lo que ves?
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', maxWidth: 500 }}>
            Hagamos que tu próximo proyecto sea parte de este portafolio
          </p>
          <Link to="/cotizar" style={{
            padding: '16px 40px', borderRadius: 9999,
            background: 'var(--accent)', color: 'var(--fg-light)',
            fontSize: 15, fontWeight: 600,
          }}>
            Iniciar proyecto
          </Link>
        </div>
      </section>

      <style>{`
        .portfolio-card:hover { transform: scale(1.01); }
        @media (max-width: 768px) {
          section { padding: 40px 24px !important; }
          section[style*='height: 520'] { height: auto !important; flex-direction: column !important; }
          section[style*='height: 400'], section[style*='height: 360'] { height: auto !important; min-height: 300px; }
        }
      `}</style>
    </div>
  )
}

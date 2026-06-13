import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['Todos', 'Diseño Web', 'Renders', 'Recorridos Virtuales', 'Motion']

const projects = [
  {
    id: 'grs',
    title: 'Graderías GRS',
    category: 'Diseño Web',
    type: 'Diseño Web',
    year: '2024',
    url: 'https://www.graderiasgrs.com',
    desc: 'Sitio web corporativo para empresa líder en venta y alquiler de graderías modulares con más de 25 años en el mercado nacional.',
    image: null,
    featured: true,
  },
  {
    id: 'unictech',
    title: 'Unictech S.A.S.',
    category: 'Diseño Web',
    type: 'Diseño Web',
    year: '2024',
    url: 'https://www.unictechsas.com',
    desc: 'Plataforma web para empresa líder en sistemas de calefacción y soluciones de confort de alta eficiencia y bajo impacto ambiental.',
    image: null,
    featured: true,
  },
  {
    id: 'cognyvita',
    title: 'CognyVita',
    category: 'Diseño Web',
    type: 'Diseño Web',
    year: '2025',
    url: 'https://cognyvita.com',
    desc: 'Sitio web para equipo de profesionales en neuropsicología clínica y educativa, que combina rigor científico con enfoque humano y cercano.',
    image: null,
    featured: true,
  },
]

const PlaceholderCard = ({ project, size = 'md' }) => {
  const letters = project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const colors = {
    'grs':       { from: '#1a2a1a', to: '#0d1a0d', accent: '#4ade80' },
    'unictech':  { from: '#1a1a2a', to: '#0d0d1a', accent: '#60a5fa' },
    'cognyvita': { from: '#2a1a2a', to: '#1a0d1a', accent: '#c084fc' },
  }
  const c = colors[project.id] || { from: '#1a1a1a', to: '#0d0d0d', accent: '#f97316' }

  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 12,
    }}>
      <div style={{
        width: size === 'lg' ? 80 : 60,
        height: size === 'lg' ? 80 : 60,
        borderRadius: 16,
        background: `${c.accent}18`,
        border: `1px solid ${c.accent}40`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-h)', fontSize: size === 'lg' ? 28 : 22,
        fontWeight: 800, color: c.accent,
      }}>
        {letters}
      </div>
      <p style={{ fontSize: 11, color: `${c.accent}80`, letterSpacing: 2, fontWeight: 500 }}>
        MOCKUP PRÓXIMAMENTE
      </p>
    </div>
  )
}

export default function Portafolio() {
  const [active, setActive] = useState('Todos')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'var(--bg-dark)', padding: '80px 60px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40,
      }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>PORTAFOLIO</p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700, color: 'var(--fg-light)',
          }}>
            Nuestro trabajo
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', maxWidth: 560, lineHeight: 1.6, margin: '0 auto' }}>
            Proyectos reales, resultados reales. Cada sitio construido con estrategia, diseño y tecnología.
          </p>
        </div>

        {/* Filtros */}
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

      {/* Grid de proyectos */}
      <section style={{ background: 'var(--bg-dark)', padding: '0 60px 80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>

          {filtered.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '80px 0',
              display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
            }}>
              <p style={{ fontSize: 48, opacity: 0.15 }}>◆</p>
              <p style={{ fontSize: 16, color: 'var(--fg-muted)' }}>Próximamente proyectos en esta categoría</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {filtered.map((p, i) => (
                <div key={p.id}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex',
                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                    height: 440, overflow: 'hidden',
                    borderRadius: i === 0 ? '16px 16px 0 0' : i === filtered.length - 1 ? '0 0 16px 16px' : 0,
                    border: '1px solid var(--border)',
                    marginBottom: i < filtered.length - 1 ? 2 : 0,
                    transition: 'border-color 0.3s',
                    borderColor: hovered === p.id ? 'rgba(249,115,22,0.4)' : 'var(--border)',
                  }}
                >
                  {/* Imagen / placeholder */}
                  <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    {p.image ? (
                      <div style={{
                        width: '100%', height: '100%',
                        background: `url(${p.image}) center/cover no-repeat`,
                        transform: hovered === p.id ? 'scale(1.03)' : 'scale(1)',
                        transition: 'transform 0.5s ease',
                      }} />
                    ) : (
                      <PlaceholderCard project={p} size="lg" />
                    )}
                  </div>

                  {/* Info */}
                  <div style={{
                    flex: '0 0 480px',
                    background: i % 2 === 0 ? 'var(--bg-navy)' : 'var(--bg-slate)',
                    padding: '60px 52px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: 3,
                        color: 'var(--accent)',
                        padding: '4px 12px', borderRadius: 9999,
                        background: 'rgba(249,115,22,0.1)',
                        border: '1px solid rgba(249,115,22,0.25)',
                      }}>
                        {p.type.toUpperCase()}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>{p.year}</span>
                    </div>

                    <h2 style={{
                      fontFamily: 'var(--font-h)', fontSize: 'clamp(24px, 2.5vw, 36px)',
                      fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2,
                    }}>
                      {p.title}
                    </h2>

                    <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
                      {p.desc}
                    </p>

                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                      <a href={p.url} target="_blank" rel="noreferrer" style={{
                        padding: '11px 24px', borderRadius: 9999,
                        background: 'var(--accent)', color: 'var(--fg-light)',
                        fontSize: 14, fontWeight: 600,
                        transition: 'opacity 0.2s',
                      }}>
                        Ver sitio →
                      </a>
                      <Link to={`/portafolio/caso/${p.id}`} style={{
                        padding: '11px 24px', borderRadius: 9999,
                        background: 'transparent', color: 'var(--fg-muted)',
                        fontSize: 14, fontWeight: 500,
                        border: '1px solid var(--border)',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}>
                        Caso de estudio
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* CTA */}
      <section style={{
        background: 'var(--accent)', padding: '80px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700, color: 'var(--fg-light)',
        }}>
          ¿Tu proyecto podría ser el siguiente?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', maxWidth: 480 }}>
          Cuéntanos tu idea y te mostramos cómo la convertimos en realidad.
        </p>
        <Link to="/cotizar" style={{
          padding: '14px 36px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 700,
        }}>
          Cotizar proyecto →
        </Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section { padding: 40px 24px !important; }
          div[style*='flex-direction: row'], div[style*='flex-direction: row-reverse'] {
            flex-direction: column !important;
            height: auto !important;
          }
          div[style*='flex: 0 0 480px'] { flex: unset !important; width: 100% !important; padding: 32px 24px !important; }
        }
      `}</style>
    </div>
  )
}

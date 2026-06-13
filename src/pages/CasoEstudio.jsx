import { Link, useParams } from 'react-router-dom'

const cases = {
  grs: {
    title: 'Graderías GRS',
    subtitle: 'Diseño Web · 2024',
    client: 'Graderías y Escenarios GRS',
    industry: 'Entretenimiento y Eventos Masivos',
    location: 'Bogotá, Colombia',
    service: 'Diseño Web',
    year: '2024',
    duration: '1 mes',
    deliverables: 'Sitio web corporativo completo',
    url: 'https://www.graderiasgrs.com',
    tags: ['Diseño Web', 'Portafolio de Proyectos', 'Filtros Dinámicos', 'Catálogo de Productos'],
    image: '/images/caso-grs-hero.jpg',
    context: 'Graderías y Escenarios GRS es una empresa con más de 25 años en el mercado nacional dedicada a la venta y alquiler de graderías modulares en aluminio y hierro, tarimas, vallas y palcos de honor para eventos masivos, deportivos, culturales y privados a nivel nacional.',
    before: 'GRS contaba con un sitio web a medio hacer: sin información detallada de sus productos, sin especificaciones técnicas y sin un portafolio que mostrara la magnitud de los proyectos que han desarrollado durante más de dos décadas. Una empresa de ese calibre merecía una presencia digital a la altura.',
    challenge: 'El reto principal era mostrar la enorme cantidad de información que tiene para ofrecer la empresa: una diversidad amplia de productos, servicios especializados y proyectos de renombre en todo el país — todo esto de forma ordenada, visualmente atractiva y fácil de navegar.',
    objectives: [
      'Mostrar la calidad y variedad de productos y servicios',
      'Exhibir los proyectos más importantes de forma visual e impactante',
      'Atraer nuevos clientes en todo el territorio nacional',
      'Posicionar a GRS como referente en el sector de eventos masivos',
    ],
    solution: 'Diseñamos y desarrollamos un sitio corporativo que organiza toda la información de forma clara y estratégica. El elemento central es el sistema de proyectos: se visualizan del más reciente al más antiguo, con filtros por categoría y año para facilitar la navegación. Cuando se agrega un nuevo proyecto, el más antiguo se archiva automáticamente en la sección "Ver todos los proyectos", manteniendo siempre el sitio actualizado y limpio.',
    features: [
      'Sistema de proyectos con orden cronológico automático',
      'Filtros por categoría y año de evento',
      'Archivo automático de proyectos anteriores',
      'Catálogo detallado de productos con especificaciones técnicas',
      'Galería visual de alta calidad para cada proyecto',
      'Formulario de cotización integrado',
    ],
    results: [
      { num: '25+', label: 'años de historia correctamente representados' },
      { num: '1 mes', label: 'tiempo total de desarrollo y lanzamiento' },
      { num: '100%', label: 'de la información organizada y publicada' },
    ],
  },
  unictech: {
    title: 'Unictech S.A.S.',
    subtitle: 'Diseño Web · 2024',
    client: 'Unictech S.A.S.',
    industry: 'Sistemas de Calefacción y Confort',
    location: 'Colombia',
    service: 'Diseño Web',
    year: '2024',
    duration: 'Próximamente',
    deliverables: 'Sitio web corporativo',
    url: 'https://www.unictechsas.com',
    tags: ['Diseño Web', 'Corporativo'],
    image: null,
    context: 'Unictech S.A.S. es una empresa líder en sistemas de calefacción y soluciones de confort, especializada en diseños de calidad, sistemas de bajo impacto ambiental y alta eficiencia.',
    before: 'Caso de estudio en construcción.',
    challenge: 'Próximamente.',
    objectives: [],
    solution: 'Próximamente.',
    features: [],
    results: [],
  },
  cognyvita: {
    title: 'CognyVita',
    subtitle: 'Diseño Web · 2025',
    client: 'CognyVita',
    industry: 'Neuropsicología Clínica y Educativa',
    location: 'Colombia',
    service: 'Diseño Web',
    year: '2025',
    duration: 'Próximamente',
    deliverables: 'Sitio web corporativo',
    url: 'https://cognyvita.com',
    tags: ['Diseño Web', 'Salud', 'Neuropsicología'],
    image: null,
    context: 'CognyVita es un equipo de profesionales apasionados por el estudio e intervención del comportamiento humano, que combina neuropsicología clínica y educativa con un enfoque profundamente humano.',
    before: 'Caso de estudio en construcción.',
    challenge: 'Próximamente.',
    objectives: [],
    solution: 'Próximamente.',
    features: [],
    results: [],
  },
}

const otherProjects = {
  grs:      [{ id: 'unictech', title: 'Unictech S.A.S.', type: 'Diseño Web' }, { id: 'cognyvita', title: 'CognyVita', type: 'Diseño Web' }],
  unictech: [{ id: 'grs', title: 'Graderías GRS', type: 'Diseño Web' }, { id: 'cognyvita', title: 'CognyVita', type: 'Diseño Web' }],
  cognyvita:[{ id: 'grs', title: 'Graderías GRS', type: 'Diseño Web' }, { id: 'unictech', title: 'Unictech S.A.S.', type: 'Diseño Web' }],
}

export default function CasoEstudio() {
  const { id } = useParams()
  const caso = cases[id]

  if (!caso) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
      <p style={{ fontSize: 48, opacity: 0.1 }}>◆</p>
      <p style={{ color: 'var(--fg-muted)', fontSize: 16 }}>Caso de estudio no encontrado</p>
      <Link to="/portafolio" style={{ color: 'var(--accent)', fontSize: 14 }}>← Volver al portafolio</Link>
    </div>
  )

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', minHeight: 520, overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
        background: caso.image
          ? `url(${caso.image}) center/cover no-repeat`
          : 'linear-gradient(135deg, #0d1a0d, #0A0A0A)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.97) 100%)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          padding: '0 60px 56px', width: '100%',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <Link to="/portafolio" style={{
            fontSize: 13, color: 'var(--fg-muted)', display: 'flex', alignItems: 'center', gap: 6,
            transition: 'color 0.2s',
          }} className="back-link">
            ← Volver al portafolio
          </Link>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {caso.tags.map(t => (
              <span key={t} style={{
                padding: '4px 12px', borderRadius: 9999,
                background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)',
                fontSize: 11, color: 'var(--accent)', fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.1,
          }}>
            {caso.title}
          </h1>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)' }}>{caso.subtitle}</p>
        </div>
      </section>

      {/* Meta */}
      <section style={{ background: 'var(--bg-navy)', padding: '36px 60px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[
              { label: 'Cliente', value: caso.client },
              { label: 'Industria', value: caso.industry },
              { label: 'Ubicación', value: caso.location },
              { label: 'Duración', value: caso.duration },
              { label: 'Año', value: caso.year },
            ].map(m => (
              <div key={m.label}>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 3, color: 'var(--fg-muted)', marginBottom: 5 }}>
                  {m.label.toUpperCase()}
                </p>
                <p style={{ fontSize: 14, color: 'var(--fg-light)' }}>{m.value}</p>
              </div>
            ))}
          </div>
          <a href={caso.url} target="_blank" rel="noreferrer" style={{
            padding: '11px 24px', borderRadius: 9999,
            background: 'var(--accent)', color: 'var(--fg-light)',
            fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap',
          }}>
            Ver sitio en vivo →
          </a>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Contexto + Antes */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', gap: 80, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>EL CLIENTE</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
              ¿Quiénes son?
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.9 }}>{caso.context}</p>
          </div>
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>ANTES DE PRISXEL</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
              La situación inicial
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.9 }}>{caso.before}</p>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* El reto + objetivos */}
      <section style={{ background: 'var(--bg-slate)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', gap: 80, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>EL RETO</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
              El desafío
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.9 }}>{caso.challenge}</p>
          </div>
          {caso.objectives.length > 0 && (
            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>OBJETIVOS</p>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
                Qué buscaban lograr
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {caso.objectives.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: 'var(--accent)',
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7, paddingTop: 2 }}>{o}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Solución + features */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>LA SOLUCIÓN</p>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
                Nuestra propuesta
              </h2>
              <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.9 }}>{caso.solution}</p>
            </div>
            {caso.features.length > 0 && (
              <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>FUNCIONALIDADES</p>
                <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 32, fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2 }}>
                  Qué incluye
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {caso.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                      <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Placeholder galería */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{
                flex: '1 1 280px', height: 220, borderRadius: 16,
                background: 'linear-gradient(135deg, #0d1a0d, #0A0A0A)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 8,
              }}>
                <span style={{ fontSize: 28, opacity: 0.15 }}>🖥</span>
                <p style={{ fontSize: 11, color: 'var(--fg-muted)', letterSpacing: 2 }}>SCREENSHOT PRÓXIMAMENTE</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      {caso.results.length > 0 && (
        <>
          <div style={{ height: 1, background: 'var(--border)' }} />
          <section style={{ background: 'var(--accent)', padding: '80px 60px' }}>
            <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'rgba(255,255,255,0.7)' }}>RESULTADOS</p>
                <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
                  El impacto del proyecto
                </h2>
              </div>
              <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
                {caso.results.map(r => (
                  <div key={r.label} style={{ flex: '1 1 200px' }}>
                    <p style={{
                      fontFamily: 'var(--font-h)', fontSize: 56, fontWeight: 800,
                      color: 'var(--fg-light)', lineHeight: 1,
                    }}>{r.num}</p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginTop: 10, lineHeight: 1.6 }}>{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Más proyectos */}
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
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {(otherProjects[id] || []).map(p => (
              <Link key={p.id} to={`/portafolio/caso/${p.id}`} style={{
                flex: '1 1 280px', height: 180, borderRadius: 16,
                background: 'linear-gradient(135deg, var(--bg-dark), var(--bg-navy))',
                border: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden', display: 'block',
                transition: 'border-color 0.2s',
              }} className="portfolio-card">
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px', background: 'linear-gradient(180deg, transparent, rgba(10,10,10,0.92))',
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
        background: 'var(--bg-dark)', padding: '80px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        textAlign: 'center', borderTop: '1px solid var(--border)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 700, color: 'var(--fg-light)', maxWidth: 600,
        }}>
          ¿Quieres un sitio web como este?
        </h2>
        <Link to="/cotizar" style={{
          padding: '14px 36px', borderRadius: 9999,
          background: 'var(--accent)', color: 'var(--fg-light)',
          fontSize: 15, fontWeight: 700,
        }}>
          Cotizar proyecto →
        </Link>
      </section>

      <style>{`
        .back-link:hover { color: var(--fg-light) !important; }
        .portfolio-card:hover { border-color: rgba(249,115,22,0.4) !important; }
        @media (max-width: 768px) {
          section { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}

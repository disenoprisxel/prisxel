import { Link } from 'react-router-dom'

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Excelencia',
    desc: 'Cada pixel cuenta. No entregamos proyectos buenos, entregamos proyectos excepcionales que superan expectativas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    title: 'Innovación',
    desc: 'Exploramos constantemente nuevas tecnologías y tendencias para ofrecer soluciones a la vanguardia del diseño digital.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Compromiso',
    desc: 'Tu proyecto es nuestro proyecto. Nos involucramos profundamente para entender tu visión y llevarla más allá.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Resultados',
    desc: 'Diseñamos con propósito. Cada decisión creativa está respaldada por estrategia y orientada a generar impacto real.',
  },
]

const steps = [
  { num: '01', title: 'Descubrimiento', desc: 'Entendemos tu marca, tus objetivos y tu audiencia para crear una base sólida.' },
  { num: '02', title: 'Concepto', desc: 'Desarrollamos propuestas creativas alineadas con tu visión y estrategia de negocio.' },
  { num: '03', title: 'Diseño', desc: 'Materializamos el concepto con diseños de alta fidelidad cuidando cada detalle.' },
  { num: '04', title: 'Entrega', desc: 'Refinamos, optimizamos y entregamos un producto final que supera expectativas.' },
]

export default function Nosotros() {
  return (
    <div>

      {/* ── 0. HERO ── */}
      <section style={{
        position: 'relative', minHeight: 540, overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'url(/images/portfolio-2.jpg) center/cover no-repeat',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(10,10,10,0.82) 45%, rgba(10,10,10,0.35) 100%)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          padding: '80px 60px',
          display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 720,
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>
            NOSOTROS
          </p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 4.5vw, 60px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            Creamos experiencias digitales que transforman tu visión en realidad
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: 520 }}>
            Somos un estudio creativo en Bogotá especializado en diseño web, visualización arquitectónica y producción audiovisual.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* ── 1. MISIÓN / VISIÓN — grid 2×2 ── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto' }}>

        {/* Celda 1 — Misión (texto) */}
        <div style={{
          background: 'var(--bg-dark)',
          padding: '80px 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
          borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 2, background: 'var(--accent)' }} />
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>NUESTRA MISIÓN</p>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(24px, 2.5vw, 36px)',
            fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2,
          }}>
            Impulsar el crecimiento de marcas ambiciosas
          </h2>
          <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
            Combinamos creatividad, tecnología y estrategia para entregar soluciones que no solo se ven extraordinarias, sino que generan resultados reales.
          </p>
        </div>

        {/* Celda 2 — Imagen laptop */}
        <div style={{
          minHeight: 340,
          background: 'url(/images/service-web.jpg) center/cover no-repeat',
          borderBottom: '1px solid var(--border)',
        }} />

        {/* Celda 3 — Imagen arquitectura */}
        <div style={{
          minHeight: 340,
          background: 'url(/images/service-arch.jpg) center/cover no-repeat',
          borderRight: '1px solid var(--border)',
        }} />

        {/* Celda 4 — Visión (texto) */}
        <div style={{
          background: 'var(--bg-navy)',
          padding: '80px 60px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 2, background: 'var(--accent)' }} />
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>NUESTRA VISIÓN</p>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(24px, 2.5vw, 36px)',
            fontWeight: 700, color: 'var(--fg-light)', lineHeight: 1.2,
          }}>
            Ser el referente en diseño digital en Colombia
          </h2>
          <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
            Reconocidos por la calidad excepcional de nuestro trabajo y por transformar cada proyecto en una experiencia memorable.
          </p>
        </div>
      </section>

      {/* ── 2. STATS — fondo naranja ── */}
      <section style={{
        background: 'var(--accent)', padding: '48px 60px',
      }}>
        <div style={{
          maxWidth: 1440, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
        }}>
          {[
            { num: '+50', label: 'Proyectos entregados' },
            { num: '+30', label: 'Clientes satisfechos' },
            { num: '4',   label: 'Servicios especializados' },
            { num: '5+',  label: 'Años de experiencia' },
          ].map(s => (
            <div key={s.label} style={{ flex: '1 1 140px', textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 800, color: 'var(--fg-light)', lineHeight: 1,
              }}>{s.num}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 6, fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. VALORES ── */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          {/* Header centrado */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>NUESTROS VALORES</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 700, color: 'var(--fg-light)',
            }}>
              Lo que nos define como estudio
            </h2>
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {values.map(v => (
              <div key={v.title} style={{
                flex: '1 1 220px',
                background: 'var(--bg-slate)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                {/* Ícono en caja naranja */}
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'rgba(249,115,22,0.15)',
                  border: '1px solid rgba(249,115,22,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-light)' }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Franja de imágenes */}
          <div style={{ display: 'flex', height: 220, borderRadius: 16, overflow: 'hidden', gap: 3 }}>
            {[
              'url(/images/service-motion.jpg)',
              'url(/images/slide-archviz.jpg)',
              'url(/images/service-web.jpg)',
              'url(/images/service-arch.jpg)',
            ].map((img, i) => (
              <div key={i} style={{
                flex: 1,
                background: `${img} center/cover no-repeat`,
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCESO ── */}
      <section style={{ background: 'var(--bg-navy)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>CÓMO TRABAJAMOS</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700, color: 'var(--fg-light)', maxWidth: 560, lineHeight: 1.2,
            }}>
              Un proceso diseñado para resultados extraordinarios
            </h2>
          </div>

          {/* Cards de pasos */}
          <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{
                flex: '1 1 200px',
                background: 'var(--bg-slate)', border: '1px solid var(--border)',
                borderRadius: i === 0 ? '14px 0 0 14px' : i === steps.length - 1 ? '0 14px 14px 0' : 0,
                padding: '36px 28px',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                <p style={{
                  fontFamily: 'var(--font-h)', fontSize: 48, fontWeight: 800,
                  color: 'rgba(249,115,22,0.25)', lineHeight: 1,
                }}>{s.num}</p>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-light)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent)' }}>
                  <div style={{ width: 20, height: 2, background: 'var(--accent)' }} />
                  <span style={{ fontSize: 16, fontWeight: 700 }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. QUOTE — imagen de fondo con texto ── */}
      <section style={{
        position: 'relative', minHeight: 340, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'url(/images/portfolio-2.jpg) center/cover no-repeat',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,10,10,0.72)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          padding: '80px 60px', maxWidth: 700,
        }}>
          <p style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 700, fontStyle: 'italic',
            color: 'var(--fg-light)', lineHeight: 1.4, marginBottom: 20,
          }}>
            "Cada proyecto es una oportunidad de crear algo extraordinario."
          </p>
          <p style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600 }}>
            — El equipo Prisxel
          </p>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section style={{
        background: 'var(--bg-dark)', padding: '80px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 24, textAlign: 'center',
        borderTop: '1px solid var(--border)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 700, color: 'var(--fg-light)',
        }}>
          ¿Listo para dar el siguiente paso?
        </h2>
        <p style={{ fontSize: 16, color: 'var(--fg-muted)', maxWidth: 480 }}>
          Cuéntanos tu proyecto y te mostramos cómo podemos transformarlo.
        </p>
        <Link to="/cotizar" style={{
          padding: '14px 36px', borderRadius: 9999,
          background: 'var(--accent)', color: 'var(--fg-light)',
          fontSize: 15, fontWeight: 700,
        }}>
          Cotizar proyecto →
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*='grid'] {
            grid-template-columns: 1fr !important;
          }
          section { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}

import { Link } from 'react-router-dom'

const team = [
  { name: 'Christian M.', role: 'Director Creativo & Fundador' },
  { name: 'Ana L.', role: 'Diseñadora UX/UI Senior' },
  { name: 'Carlos R.', role: 'Especialista 3D & Renders' },
  { name: 'María T.', role: 'Motion Designer & Video' },
]

const values = [
  { title: 'Excelencia visual', desc: 'Cada píxel cuenta. Obsesionados con los detalles que marcan la diferencia entre bueno y extraordinario.' },
  { title: 'Impacto real', desc: 'El diseño bonito que no convierte no sirve. Creamos piezas que generan resultados medibles.' },
  { title: 'Innovación constante', desc: 'Adoptamos las últimas tecnologías para que nuestros clientes siempre estén a la vanguardia.' },
  { title: 'Relación a largo plazo', desc: 'No somos proveedores, somos socios estratégicos. Crecemos junto a cada cliente.' },
]

export default function Nosotros() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: 600,
        background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-navy) 100%)',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%',
          background: 'url(/images/portfolio-1.jpg) center/cover',
          opacity: 0.3,
        }} />
        <div style={{
          position: 'relative', zIndex: 1, padding: '0 60px', maxWidth: 700,
          display: 'flex', flexDirection: 'column', gap: 24,
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>QUIÉNES SOMOS</p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            Creamos experiencias digitales que transforman negocios
          </h1>
          <p style={{ fontSize: 17, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
            Somos un estudio de diseño digital con sede en Latinoamérica, especializados en crear identidades visuales y experiencias digitales que generan impacto real para nuestros clientes.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Stats */}
      <section style={{
        background: 'var(--bg-navy)', padding: '40px 60px',
      }}>
        <div style={{
          maxWidth: 1440, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
        }}>
          {[
            { num: '150+', label: 'Proyectos completados' },
            { num: '80+', label: 'Clientes satisfechos' },
            { num: '6', label: 'Años de experiencia' },
            { num: '4', label: 'Países de impacto' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', flex: '1 1 160px' }}>
              <p style={{
                fontFamily: 'var(--font-h)', fontSize: 48, fontWeight: 700, color: 'var(--accent)',
              }}>{s.num}</p>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Story */}
      <section style={{
        background: 'var(--bg-dark)', padding: '100px 60px',
        display: 'flex', gap: 80, alignItems: 'center', flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>NUESTRA HISTORIA</p>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
            color: 'var(--fg-light)', lineHeight: 1.2,
          }}>
            Nacimos de la pasión por el diseño
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
            Prisxel nació en 2018 con una misión clara: democratizar el diseño de alto impacto para empresas latinoamericanas. Lo que comenzó como un pequeño estudio de renders arquitectónicos, evolucionó hasta convertirse en un estudio multidisciplinar con especialidades en diseño web, visualización 3D, recorridos virtuales y producción audiovisual.
          </p>
          <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
            Hoy trabajamos con clientes en más de 4 países, desde startups hasta corporativos, siempre con el mismo compromiso: entregar diseño que funciona.
          </p>
        </div>
        <div style={{
          flex: '1 1 400px', height: 400, borderRadius: 20,
          background: 'var(--bg-slate)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '80%', height: '80%',
            background: 'linear-gradient(135deg, var(--bg-navy), var(--bg-slate))',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 64, opacity: 0.1 }}>◆</span>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Values */}
      <section style={{
        background: 'var(--bg-slate)', padding: '100px 60px',
        display: 'flex', flexDirection: 'column', gap: 56,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>NUESTROS VALORES</p>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
            color: 'var(--fg-light)',
          }}>
            Lo que nos define
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {values.map(v => (
            <div key={v.title} style={{
              flex: '1 1 260px',
              background: 'var(--bg-dark)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 32,
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg-light)' }}>{v.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Team */}
      <section style={{
        background: 'var(--bg-navy)', padding: '100px 60px',
        display: 'flex', flexDirection: 'column', gap: 56, alignItems: 'center',
      }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>EL EQUIPO</p>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)',
          }}>
            Las personas detrás de Prisxel
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
          {team.map(m => (
            <div key={m.name} style={{
              flex: '1 1 220px', maxWidth: 280,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
            }}>
              <div style={{
                width: 120, height: 120, borderRadius: '50%',
                background: 'var(--bg-slate)', border: '2px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 40, opacity: 0.3 }}>◆</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg-light)' }}>{m.name}</p>
                <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--accent)', padding: '80px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 3vw, 44px)',
          fontWeight: 700, color: 'var(--fg-light)', maxWidth: 700,
        }}>
          ¿Listo para dar el siguiente paso?
        </h2>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 14, fontWeight: 600,
        }}>
          Cotizar proyecto
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 24px !important; flex-direction: column !important; }
          section[style*='height: 600'] { height: auto !important; padding-top: 80px !important; padding-bottom: 60px !important; }
        }
      `}</style>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function ServiceRecorridos() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: 680,
        background: 'url(/images/slide-archviz.jpg) center/cover no-repeat',
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
            SERVICIO · RECORRIDOS VIRTUALES
          </p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            Explora tu proyecto antes de construirlo
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 580 }}>
            Recorridos virtuales interactivos e inmersivos que permiten a tu cliente vivir el espacio antes de que exista.
          </p>
          <Link to="/cotizar" style={{
            padding: '14px 36px', borderRadius: 9999,
            background: 'var(--fg-light)', color: 'var(--fg-dark)',
            fontSize: 14, fontWeight: 600, marginTop: 8,
          }}>
            Solicitar recorrido virtual
          </Link>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* What */}
      <section style={{ background: 'var(--bg-navy)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>QUÉ ES</p>
            <h2 style={{
              fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
              color: 'var(--fg-light)', lineHeight: 1.2,
            }}>
              Inmersión total en espacios que aún no existen
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
              Un recorrido virtual es una experiencia interactiva en 3D o 360° que permite navegar por un espacio arquitectónico de forma libre. Es la herramienta de ventas más poderosa para proyectos inmobiliarios y de arquitectura.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Compatible con web, tablet y dispositivos VR',
                'Navegación libre o guiada por puntos',
                'Cambio de materiales y acabados en tiempo real',
                'Embebible en tu sitio web o app',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontSize: 16, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            flex: '1 1 400px', height: 400, borderRadius: 20,
            background: 'var(--bg-slate)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 64, opacity: 0.1 }}>▶</span>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)' }}>Demo interactivo</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Use cases */}
      <section style={{ background: 'var(--bg-slate)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>APLICACIONES</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              ¿Para qué tipo de proyecto?
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { icon: '🏠', title: 'Proyectos inmobiliarios', desc: 'Vende unidades antes del primer ladrillo. Tus compradores vivirán el espacio desde casa.' },
              { icon: '🏨', title: 'Hoteles y resorts', desc: 'Muestra habitaciones, amenidades y vistas panorámicas que motivan la reserva.' },
              { icon: '🏢', title: 'Oficinas y corporativos', desc: 'Presenta el nuevo espacio de trabajo a empleados y directivos antes de mudarse.' },
              { icon: '🏪', title: 'Retail y comercio', desc: 'Diseña y valida la experiencia de compra física antes de la construcción.' },
            ].map(c => (
              <div key={c.title} style={{
                flex: '1 1 260px',
                background: 'var(--bg-dark)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <span style={{ fontSize: 32 }}>{c.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg-light)' }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Tech */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56, alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 700 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>TECNOLOGÍA</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              Lo mejor de la tecnología inmersiva
            </h2>
            <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
              Utilizamos motores de renderizado en tiempo real, WebGL y plataformas VR de vanguardia para crear experiencias que sorprenden y convierten.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Unreal Engine', 'Three.js', 'WebGL', 'VR Ready', 'Web Embed'].map(t => (
              <div key={t} style={{
                padding: '12px 24px', borderRadius: 9999,
                background: 'var(--bg-slate)', border: '1px solid var(--border)',
                fontSize: 13, fontWeight: 500, color: 'var(--fg-muted)',
              }}>
                {t}
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
          Dale vida a tu proyecto con un recorrido virtual
        </h2>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 600,
        }}>
          Solicitar cotización
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

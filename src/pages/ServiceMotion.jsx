import { Link } from 'react-router-dom'

const offerings = [
  { title: 'Motion Graphics', desc: 'Animaciones de marca, infografías animadas y piezas para redes sociales que llaman la atención.' },
  { title: 'Videos Corporativos', desc: 'Producción audiovisual que comunica la esencia y valores de tu empresa.' },
  { title: 'Animaciones 3D', desc: 'Productos, arquitectura y conceptos animados en 3D con acabado cinematográfico.' },
  { title: 'Videos de Producto', desc: 'Presentaciones visuales que muestran las características y beneficios de tu producto.' },
  { title: 'Intros y Transitions', desc: 'Elementos visuales para YouTube, streaming y presentaciones que elevan tu marca.' },
  { title: 'Campañas Digitales', desc: 'Piezas audiovisuales para campañas de marketing digital en múltiples formatos.' },
]

export default function ServiceMotion() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative', height: 680,
        background: 'url(/images/service-motion.jpg) center/cover no-repeat',
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
            SERVICIO · MOTION Y VIDEO
          </p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            Tu marca en movimiento. Con impacto.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 580 }}>
            Animaciones y producción audiovisual que comunican tu marca con movimiento, ritmo e impacto visual duradero.
          </p>
          <Link to="/cotizar" style={{
            padding: '14px 36px', borderRadius: 9999,
            background: 'var(--fg-light)', color: 'var(--fg-dark)',
            fontSize: 14, fontWeight: 600, marginTop: 8,
          }}>
            Iniciar proyecto
          </Link>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Reel / Showreel */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>SHOWREEL</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              El movimiento es nuestra lengua nativa
            </h2>
          </div>
          <div style={{
            width: '100%', height: 480, borderRadius: 20,
            background: 'var(--bg-slate)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(249,115,22,0.15)', border: '2px solid var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto',
              }}>
                <span style={{ fontSize: 28, color: 'var(--accent)' }}>▶</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--fg-muted)' }}>Ver showreel 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Services */}
      <section style={{ background: 'var(--bg-navy)', padding: '100px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>QUÉ PRODUCIMOS</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              De la idea al pixel final
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {offerings.map(o => (
              <div key={o.title} style={{
                flex: '1 1 280px',
                background: 'var(--bg-slate)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--fg-light)' }}>{o.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.7 }}>{o.desc}</p>
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
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>PROCESO CREATIVO</p>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700, color: 'var(--fg-light)' }}>
              Cómo lo hacemos
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { num: '01', title: 'Briefing creativo', desc: 'Entendemos tu marca, mensaje, audiencia y objetivos del video.' },
              { num: '02', title: 'Guión y storyboard', desc: 'Desarrollamos la narrativa visual antes de producir un solo frame.' },
              { num: '03', title: 'Producción', desc: 'Animación, grabación y postproducción con estándares cinematográficos.' },
              { num: '04', title: 'Entrega multi-formato', desc: 'Formatos optimizados para web, redes sociales, TV y presentaciones.' },
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
          ¿Listo para darle vida a tu marca?
        </h2>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 600,
        }}>
          Iniciar proyecto
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

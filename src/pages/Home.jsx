import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

const services = [
  {
    title: 'Diseño Web',
    desc: 'Sitios web que convierten visitantes en clientes. Diseño estratégico y desarrollo de alto rendimiento.',
    href: '/servicios/diseno-web',
    bg: 'linear-gradient(135deg, #1a1a3a66, #0A0A0A99)',
  },
  {
    title: 'Renders Arquitectónicos',
    desc: 'Visualizaciones fotorrealistas que dan vida a tus proyectos antes de construirlos.',
    href: '/servicios/renders',
    bg: 'linear-gradient(135deg, #2a1a0a66, #0A0A0A99)',
  },
  {
    title: 'Recorridos Virtuales',
    desc: 'Experiencias inmersivas que permiten explorar espacios antes de que existan.',
    href: '/servicios/recorridos-virtuales',
    bg: 'linear-gradient(135deg, #0a2a1a66, #0A0A0A99)',
  },
  {
    title: 'Motion y Video',
    desc: 'Animaciones y producción audiovisual que comunican tu marca con movimiento e impacto.',
    href: '/servicios/motion-video',
    bg: 'linear-gradient(135deg, #0a1a2a66, #0A0A0A99)',
  },
]

const reasons = [
  { num: '01', title: 'Diseño estratégico', desc: 'Cada decisión visual tiene un propósito. Combinamos estética con estrategia para resultados que importan.' },
  { num: '02', title: 'Tecnología de punta', desc: 'Utilizamos las herramientas más avanzadas del mercado para entregar resultados excepcionales.' },
  { num: '03', title: 'Resultados medibles', desc: 'Nuestros proyectos generan impacto real: más visibilidad, más clientes, más valor para tu marca.' },
]

const slides = [
  {
    label: 'DISEÑO WEB',
    title: 'Tu web. Tu mejor vendedor.',
    desc: 'Diseño que convierte.',
    href: '/servicios/diseno-web',
    cta: 'Ver servicio',
    image: '/images/slide-web.jpg',
  },
  {
    label: 'RENDERS ARQUITECTÓNICOS',
    title: 'Ve tu proyecto antes de construirlo.',
    desc: 'Fotorrealismo que vende.',
    href: '/servicios/renders',
    cta: 'Ver servicio',
    image: '/images/slide-renders.jpg',
  },
  {
    label: 'RECORRIDOS VIRTUALES',
    title: 'Entra. Explora. Enamórate.',
    desc: 'Espacios inmersivos en 3D.',
    href: '/servicios/recorridos-virtuales',
    cta: 'Ver servicio',
    video: '/images/slide-rv.mp4',
    image: '/images/slide-archviz.jpg',
  },
  {
    label: 'MOTION Y VIDEO',
    title: 'Tu marca en movimiento.',
    desc: 'Animación con propósito.',
    href: '/servicios/motion-video',
    cta: 'Ver servicio',
    video: '/images/slide-motion.mp4',
    image: '/images/service-motion.jpg',
  },
]

function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }, [animating])

  // Auto-play cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section style={{ position: 'relative', height: '780px', overflow: 'hidden' }}>
      {/* Slides de fondo — todos montados, solo el activo visible */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.7s ease',
          zIndex: 0,
        }}>
          {s.video ? (
            <video
              autoPlay muted loop playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              poster={s.image}
            >
              <source src={s.video} type="video/mp4" />
            </video>
          ) : (
            <div style={{
              width: '100%', height: '100%',
              background: `url(${s.image}) center/cover no-repeat`,
            }} />
          )}
        </div>
      ))}

      {/* Overlay gradiente */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, #0A0A0A20 0%, #0A0A0A55 35%, #0A0A0ADD 70%, #0A0A0AF5 100%)',
      }} />

      {/* Contenido */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
          maxWidth: 860,
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: 'var(--accent)' }}>
            {slide.label}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: 'clamp(34px, 5vw, 64px)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--fg-light)',
          }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 540 }}>
            {slide.desc}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to={slide.href} style={{
              padding: '14px 36px', borderRadius: 9999,
              background: 'var(--accent)', color: 'var(--fg-light)',
              fontSize: 14, fontWeight: 600,
            }}>
              {slide.cta}
            </Link>
            <Link to="/cotizar" style={{
              padding: '14px 36px', borderRadius: 9999,
              background: 'rgba(255,255,255,0.1)', color: 'var(--fg-light)',
              fontSize: 14, fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              Cotizar proyecto
            </Link>
          </div>
        </div>
      </div>

      {/* Indicadores / dots */}
      <div style={{
        position: 'absolute', bottom: 36, left: 0, right: 0, zIndex: 3,
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,
      }}>
        {slides.map((s, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          }}>
            {/* Barra de progreso */}
            <div style={{
              width: i === current ? 40 : 20, height: 3, borderRadius: 9999,
              background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.35s ease',
            }} />
          </button>
        ))}
      </div>

      {/* Flechas laterales */}
      <button onClick={() => goTo((current - 1 + slides.length) % slides.length)} style={{
        position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
        zIndex: 3, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%', width: 48, height: 48, cursor: 'pointer',
        color: 'white', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s',
      }} className="hero-arrow">
        ‹
      </button>
      <button onClick={() => goTo((current + 1) % slides.length)} style={{
        position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
        zIndex: 3, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%', width: 48, height: 48, cursor: 'pointer',
        color: 'white', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s',
      }} className="hero-arrow">
        ›
      </button>

      <style>{`
        .hero-arrow:hover { background: rgba(249,115,22,0.4) !important; border-color: var(--accent) !important; }
      `}</style>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Services alternating */}
      {services.map((s, i) => (
        <div key={s.title}>
          <section style={{
            display: 'flex', alignItems: 'center',
            background: i % 2 === 0 ? 'var(--bg-navy)' : 'var(--bg-slate)',
            height: 480, padding: '40px 60px', gap: 60,
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
          }}>
            <div style={{
              flex: 1, borderRadius: 12,
              background: s.bg, height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '80%', height: '60%', borderRadius: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>
                SERVICIO
              </p>
              <h2 style={{
                fontFamily: 'var(--font-h)', fontSize: 36, fontWeight: 700,
                color: 'var(--fg-light)', lineHeight: 1.2,
              }}>
                {s.title}
              </h2>
              <p style={{ fontSize: 16, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                {s.desc}
              </p>
              <Link to={s.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 600, color: 'var(--fg-light)',
                marginTop: 8,
              }}>
                Conocer más →
              </Link>
            </div>
          </section>
          <div style={{ height: 1, background: 'var(--border)' }} />
        </div>
      ))}

      {/* Portfolio preview */}
      <section style={{
        background: 'var(--bg-warm)', padding: '100px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
          color: 'var(--fg-dark)',
        }}>
          Nuestro trabajo habla por nosotros
        </h2>
        <div style={{ display: 'flex', gap: 24, width: '100%', flexWrap: 'wrap' }}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{
              flex: '1 1 280px', height: 280, borderRadius: 12,
              background: `linear-gradient(135deg, var(--bg-navy), var(--bg-slate))`,
              overflow: 'hidden', position: 'relative',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}>
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: 48, opacity: 0.15 }}>◆</span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/portafolio" style={{
          padding: '14px 40px', borderRadius: 9999,
          background: 'var(--fg-dark)', color: 'var(--fg-light)',
          fontSize: 14, fontWeight: 600,
        }}>
          Ver portafolio completo
        </Link>
      </section>

      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Why Prisxel */}
      <section style={{
        background: 'var(--bg-navy)', padding: '100px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56,
      }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, color: 'var(--accent)' }}>
            POR QUÉ PRISXEL
          </p>
          <h2 style={{
            fontFamily: 'var(--font-h)', fontSize: 40, fontWeight: 700,
            color: 'var(--fg-light)',
          }}>
            Diseño que genera resultados
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 48, width: '100%', flexWrap: 'wrap' }}>
          {reasons.map(r => (
            <div key={r.num} style={{
              flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <span style={{
                fontFamily: 'var(--font-h)', fontSize: 48, fontWeight: 700,
                color: 'var(--accent)', opacity: 0.8,
              }}>
                {r.num}
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--fg-light)' }}>
                {r.title}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--accent)', padding: '100px 60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: 28, textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 700, color: 'var(--fg-light)',
          maxWidth: 800, lineHeight: 1.2,
        }}>
          ¿Listo para transformar tu proyecto?
        </h2>
        <Link to="/cotizar" style={{
          padding: '16px 40px', borderRadius: 9999,
          background: 'var(--fg-light)', color: 'var(--fg-dark)',
          fontSize: 15, fontWeight: 600,
        }}>
          Cotizar proyecto
        </Link>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, color: 'rgba(255,255,255,0.8)' }}>
          disenoprisxel@gmail.com
        </p>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*='height: 480px'] {
            flex-direction: column !important;
            height: auto !important;
            padding: 40px 24px !important;
          }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </div>
  )
}

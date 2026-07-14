import useParallax from '../hooks/useParallax'

export default function ParallaxLayer({ image, speed = 0.12, style = {} }) {
  const ref = useParallax(speed)
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute', top: -80, left: 0, right: 0, bottom: -80,
        background: `url(${image}) center/cover no-repeat`,
        willChange: 'transform',
        ...style,
      }}
    />
  )
}

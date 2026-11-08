import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

/**
 * Interactive Particle Network for Hero Section
 * Lightweight HTML5 Canvas particle constellation with gentle organic drift
 * and restrained cursor proximity interaction. Automatically pauses offscreen.
 */
export default function HeroParticleNetwork() {
  const canvasRef = useRef(null)
  const { isLight } = useTheme()
  const isLightRef = useRef(isLight)

  useEffect(() => {
    isLightRef.current = isLight
  }, [isLight])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isVisible = true
    let isTabActive = !document.hidden
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const mouse = { x: -2000, y: -2000, active: false }

    const isMobile = width < 768
    const particleCount = isMobile ? 14 : 34
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.3 + 0.8,
        baseAlpha: Math.random() * 0.25 + 0.15,
      })
    }

    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    const handleMouseMove = (e) => {
      if (!hasFinePointer) return
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const handleVisibility = () => {
      isTabActive = !document.hidden
    }

    // IntersectionObserver to pause loop when Hero is not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    window.addEventListener('resize', handleResize, { passive: true })
    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true })
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    }
    document.addEventListener('visibilitychange', handleVisibility)

    const render = () => {
      if (!isVisible || !isTabActive) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)
      const light = isLightRef.current

      // Particle update and draw
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0

          // Gentle mouse avoidance
          if (mouse.active) {
            const dx = mouse.x - p.x
            const dy = mouse.y - p.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 90) {
              const force = (90 - dist) / 90
              p.x -= (dx / dist) * force * 0.7
              p.y -= (dy / dist) * force * 0.7
            }
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = light
          ? `rgba(22, 166, 173, ${p.baseAlpha * 0.85})`
          : `rgba(44, 196, 201, ${p.baseAlpha})`
        ctx.fill()

        // Connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 95) {
            const lineAlpha = (1 - dist / 95) * (light ? 0.08 : 0.12)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = light
              ? `rgba(22, 166, 173, ${lineAlpha})`
              : `rgba(44, 196, 201, ${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
      document.removeEventListener('visibilitychange', handleVisibility)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 h-full w-full opacity-70"
    />
  )
}


import { useEffect, useRef } from 'react'

/**
 * Living Ambient Canvas Background
 * High-performance, ultra-subtle dark teal matrix with cyan and soft white node constellation.
 */
export default function DeveloperBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isTabVisible = true
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouse = { x: -1000, y: -1000, active: false }

    const isMobile = width < 768
    const particleCount = isMobile ? 14 : 26
    const particles = []

    let isLightMode = document.documentElement.classList.contains('light')

    const getColors = () => (
      isLightMode
        ? [
            'rgba(22, 166, 173, ',
            'rgba(82, 97, 113, ',
            'rgba(241, 107, 131, ',
          ]
        : [
            'rgba(100, 255, 218, ',
            'rgba(0, 245, 212, ',
            'rgba(136, 146, 176, ',
            'rgba(230, 241, 255, ',
          ]
    )

    let colors = getColors()

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.2 + 0.6,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.2 + 0.08,
      })
    }

    // Observe theme class switches on <html>
    const observer = new MutationObserver(() => {
      const currentLight = document.documentElement.classList.contains('light')
      if (currentLight !== isLightMode) {
        isLightMode = currentLight
        colors = getColors()
        particles.forEach((p) => {
          p.colorPrefix = colors[Math.floor(Math.random() * colors.length)]
        })
      }
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const handleVisibility = () => {
      isTabVisible = !document.hidden
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height)
      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseleave', handleMouseLeave)
        document.removeEventListener('visibilitychange', handleVisibility)
      }
    }

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
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
          if (dist < 100) {
            p.x -= (dx / dist) * 0.3
            p.y -= (dy / dist) * 0.3
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.colorPrefix}${p.baseAlpha})`
        ctx.fill()

        // Proximity lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = isLightMode
              ? `rgba(22, 166, 173, ${alpha})`
              : `rgba(100, 255, 218, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibility)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-50"
    />
  )
}

import { useEffect, useRef, useState } from 'react'

/**
 * Desktop subtle ambient cursor spotlight in Cyan / Dark Teal.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasFinePointer || prefersReducedMotion) {
      setIsEnabled(false)
      return
    }

    setIsEnabled(true)

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY
    let rafId

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!isEnabled) return null

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-10 h-[500px] w-[500px] rounded-full will-change-transform opacity-50"
      style={{
        background:
          'radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, rgba(2, 12, 27, 0) 70%)',
        filter: 'blur(45px)',
      }}
    />
  )
}

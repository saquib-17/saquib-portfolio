import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

/**
 * Ambient Cursor Spotlight & Mobile Static Fallback
 * Features smoothly interpolated cursor tracking on desktop fine-pointer devices,
 * and falls back to a calm static ambient glow on mobile/touch screens or reduced motion.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { isLight } = useTheme()

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    setHasFinePointer(finePointerQuery.matches)
    setPrefersReducedMotion(reducedMotionQuery.matches)

    const handlePointerChange = (e) => setHasFinePointer(e.matches)
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches)

    finePointerQuery.addEventListener('change', handlePointerChange)
    reducedMotionQuery.addEventListener('change', handleMotionChange)

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      return () => {
        finePointerQuery.removeEventListener('change', handlePointerChange)
        reducedMotionQuery.removeEventListener('change', handleMotionChange)
      }
    }

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
      // Smooth lerp interpolation
      currentX += (mouseX - currentX) * 0.07
      currentY += (mouseY - currentY) * 0.07

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 260}px, ${currentY - 260}px, 0)`
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      finePointerQuery.removeEventListener('change', handlePointerChange)
      reducedMotionQuery.removeEventListener('change', handleMotionChange)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Static ambient glow for touch devices and reduced-motion mode
  if (!hasFinePointer || prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-10 left-1/2 -translate-x-1/2 -z-10 h-[380px] w-[380px] rounded-full blur-[75px] opacity-25"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(22, 166, 173, 0.15) 0%, rgba(22, 166, 173, 0) 70%)'
            : 'radial-gradient(circle, rgba(44, 196, 201, 0.18) 0%, rgba(44, 196, 201, 0) 70%)',
        }}
      />
    )
  }

  // Interactive interpolated cursor glow for desktop
  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 -z-10 h-[520px] w-[520px] rounded-full will-change-transform transition-opacity duration-300"
      style={{
        background: isLight
          ? 'radial-gradient(circle, rgba(22, 166, 173, 0.10) 0%, rgba(255, 255, 255, 0) 70%)'
          : 'radial-gradient(circle, rgba(44, 196, 201, 0.12) 0%, rgba(2, 12, 27, 0) 70%)',
        filter: 'blur(55px)',
      }}
    />
  )
}

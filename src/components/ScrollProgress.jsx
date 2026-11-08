import { useEffect, useState } from 'react'

/**
 * Scroll reading progress indicator pinned to top of the screen in cyan.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      const currentScroll = window.scrollY
      const ratio = Math.min(Math.max(currentScroll / totalHeight, 0), 1)
      setProgress(ratio)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 h-[2px] w-full bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-bright via-cyan to-coral shadow-cyan-glow transition-transform duration-75 ease-out"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: 'left',
        }}
      />
    </div>
  )
}

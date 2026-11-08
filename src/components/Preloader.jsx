import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Premium Developer Terminal + Personal Name Reveal Preloader
 *
 * Sequence:
 * Stage 1 (0ms - 600ms): Developer Terminal Initialization with blinking cyan cursor
 * Stage 2 (600ms - 1300ms): Geometric 'SA' Monogram + Name Reveal
 * Stage 3 (1300ms - 2000ms): Cyan Progress Line + "PREPARING YOUR EXPERIENCE"
 * Stage 4 (2000ms - 2400ms): "WELCOME TO MY PORTFOLIO" + Cinematic upward curtain exit
 */
export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(1)
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Respect user's motion preference: skip if prefers-reduced-motion is enabled
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      if (onComplete) onComplete()
      return
    }

    // Lock scrolling while preloader is visible
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Stage 1 -> 2: Reveal Personal Identity at 650ms
    const timerStage2 = setTimeout(() => {
      setStage(2)
    }, 650)

    // Stage 2 -> 3: Begin Progress Track at 1250ms
    const timerStage3 = setTimeout(() => {
      setStage(3)
    }, 1250)

    // Smooth progress increment from 0 to 100% during Stage 3 (1250ms - 1950ms)
    let progressInterval = null
    const timerProgressStart = setTimeout(() => {
      const startTime = performance.now()
      const duration = 700

      const updateProgress = (now) => {
        const elapsed = now - startTime
        const rawProgress = Math.min(100, Math.round((elapsed / duration) * 100))
        setProgress(rawProgress)
        if (rawProgress < 100) {
          progressInterval = requestAnimationFrame(updateProgress)
        }
      }
      progressInterval = requestAnimationFrame(updateProgress)
    }, 1250)

    // Stage 3 -> 4: Welcome Message at 2000ms
    const timerStage4 = setTimeout(() => {
      setStage(4)
    }, 2000)

    // Stage 4 -> Exit Curtain Lift at 2350ms
    const timerExit = setTimeout(() => {
      setIsExiting(true)
    }, 2350)

    // Complete and unmount preloader at 2850ms (after exit animation completes)
    const timerComplete = setTimeout(() => {
      document.body.style.overflow = originalOverflow || ''
      if (onComplete) onComplete()
    }, 2850)

    return () => {
      clearTimeout(timerStage2)
      clearTimeout(timerStage3)
      clearTimeout(timerProgressStart)
      clearTimeout(timerStage4)
      clearTimeout(timerExit)
      clearTimeout(timerComplete)
      if (progressInterval) cancelAnimationFrame(progressInterval)
      document.body.style.overflow = originalOverflow || ''
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09131a] text-slate-100 select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio experience"
        >
          {/* Subtle Ambient Matrix & Radial Glows */}
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Central Centered Preloader Frame */}
          <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center">
            {/* Terminal Window Header Card */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full rounded-xl border border-white/10 bg-[#0d1d27]/90 backdrop-blur-md p-4 sm:p-5 shadow-glass"
            >
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="text-primary">&gt;_</span>
                  <span>saquib@portfolio: ~</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Stage 1: Terminal Command Output */}
              <div className="flex items-center justify-center gap-2 font-mono text-xs text-primary/90 h-6">
                <span>$</span>
                <span className="tracking-wider">
                  {stage === 1 && 'INITIALIZING PORTFOLIO...'}
                  {stage >= 2 && 'SYSTEM_READY // MOUNT_PROFILE'}
                </span>
                <span className="inline-block w-1.5 h-3.5 bg-primary animate-pulse" />
              </div>

              {/* Stage 2: Geometric SA Monogram & Name Reveal */}
              <div className="py-4 flex flex-col items-center justify-center min-h-[110px]">
                {stage >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                  >
                    {/* Geometric Origami Diamond Frame with 'SA' Initials */}
                    <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl rotate-45 blur-md" />
                      <div className="w-10 h-10 rounded-lg border border-primary/50 bg-gradient-to-br from-primary/20 to-secondary/15 rotate-45 flex items-center justify-center shadow-cyan-sm">
                        <span className="font-mono text-xs font-bold text-primary -rotate-45 tracking-tighter">
                          SA
                        </span>
                      </div>
                    </div>

                    {/* Name Reveal */}
                    <motion.h1
                      initial={{ opacity: 0, letterSpacing: '0.35em' }}
                      animate={{ opacity: 1, letterSpacing: '0.18em' }}
                      transition={{ duration: 0.5, delay: 0.08 }}
                      className="font-heading text-sm sm:text-base font-bold text-white uppercase"
                    >
                      Mohammed Saquib Ansari
                    </motion.h1>

                    {/* Subtitle Tagline */}
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.18 }}
                      className="font-mono text-[10px] sm:text-[10.5px] text-slate-400 mt-1 tracking-wider"
                    >
                      MCA Student • Software & Full-Stack Developer
                    </motion.p>
                  </motion.div>
                )}
              </div>

              {/* Stage 3 & 4: Progress Line & Dynamic Status */}
              <div className="pt-2 flex flex-col items-center space-y-2">
                {/* Thin Cyan Progress Bar */}
                <div className="w-full max-w-[240px] h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full shadow-[0_0_10px_rgba(44,196,201,0.8)]"
                    style={{
                      width: `${stage >= 4 ? 100 : progress}%`,
                      transition: stage >= 3 ? 'width 0.1s linear' : 'none',
                    }}
                  />
                </div>

                {/* Status Message */}
                <div className="h-5 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {stage < 4 ? (
                      <motion.div
                        key="status-preparing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5 text-[9.5px] font-mono tracking-widest text-slate-400 uppercase"
                      >
                        <span>PREPARING YOUR EXPERIENCE</span>
                        {stage >= 3 && (
                          <span className="text-primary font-bold">
                            {progress}%
                          </span>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="status-welcome"
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        <span>WELCOME TO MY PORTFOLIO</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}


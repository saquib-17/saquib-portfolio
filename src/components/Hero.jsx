import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Lottie } from 'lottie-react'
import { useTheme } from '../context/ThemeContext.jsx'
import heroAnimationDark from '../assets/hero-animation-dark.json'
import heroAnimationLight from '../assets/hero-animation-light.json'
import { hero } from '../data/portfolio.js'

export default function Hero() {
  const { isLight } = useTheme()
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = hero.typewriterTitles
  const animationData = isLight ? heroAnimationLight : heroAnimationDark

  useEffect(() => {
    const text = titles[currentIndex]
    let timeoutId

    if (currentText.length < text.length) {
      timeoutId = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1))
      }, 85)
    } else {
      timeoutId = setTimeout(() => {
        setCurrentText('')
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }, 2200)
    }

    return () => clearTimeout(timeoutId)
  }, [currentText, currentIndex, titles])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-14 text-center md:text-left"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Ambient Layered Glows for Depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[260px] bg-secondary/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="text-center md:text-left z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-primary font-mono text-[11px] sm:text-xs mb-1.5 tracking-widest font-semibold"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="text-hero font-bold text-foreground mb-1 tracking-tight"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs sm:text-[13px] font-mono text-cyan/90 font-medium tracking-wide mb-2"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="text-hero-sub font-mono font-medium text-foreground/80 mb-3.5 min-h-[32px] flex items-center justify-center md:justify-start"
            >
              <span className="text-primary font-bold mr-1.5">&gt;</span>
              <span className="text-foreground font-semibold">{currentText}</span>
              <span className="inline-block w-2 h-5 bg-primary animate-pulse ml-1" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="max-w-lg mx-auto md:mx-0"
            >
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-foreground/80">
                {hero.description}
              </p>
            </motion.div>

            {/* Premium Refined Glow Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="relative z-10 flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start mt-6 sm:mt-7"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary-glow flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>VIEW MY WORK</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary-glow flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>GET IN TOUCH</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Theme-Aware Illustration with Ambient Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center relative group"
          >
            {/* Ambient Radial Halo Backdrop */}
            <div
              className={`absolute inset-0 w-full h-full max-w-[340px] max-h-[340px] m-auto rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
                isLight
                  ? 'bg-gradient-to-tr from-cyan-400/20 via-primary/15 to-secondary/10'
                  : 'bg-gradient-to-tr from-primary/25 via-cyan/20 to-secondary/15 animate-pulse'
              }`}
            />

            {/* Floating Interactive Illustration Shell */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full flex items-center justify-center"
            >
              <Lottie
                key={isLight ? 'hero-light' : 'hero-dark'}
                src={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-auto max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] drop-shadow-md select-none pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator matching reference */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center space-y-0.5 animate-float cursor-pointer text-primary focus:outline-none group"
          aria-label="Scroll to About section"
        >
          <span className="text-primary font-mono text-xs tracking-widest uppercase font-bold">
            SCROLL
          </span>
          <ChevronDown className="w-5 h-5 text-primary transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  )
}

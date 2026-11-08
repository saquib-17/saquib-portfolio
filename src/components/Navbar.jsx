import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/portfolio.js'

export default function Navbar({ onNavigateResume }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)
  const { isLight, toggleTheme } = useTheme()

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'py-2.5 sm:py-3 bg-[var(--navbar-bg)] backdrop-blur-md border-b border-border shadow-glass'
          : 'py-3.5 sm:py-4 bg-transparent'
      }`}
    >
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6 flex items-center justify-between">
        {/* Geometric Origami Bird SVG Logo from Reference */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
          className="group flex items-center gap-2 focus:outline-none"
          aria-label={`${profile.name} — Return to top`}
        >
          <div className="w-8 h-8 transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 200 150"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-sm"
            >
              <path
                d="M20 20 L90 70 L100 95 L60 70 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinejoin="round"
                className="text-foreground transition-colors group-hover:text-primary"
              />
              <path
                d="M180 20 L110 70 L100 95 L140 70 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinejoin="round"
                className="text-foreground transition-colors group-hover:text-primary"
              />
              <polygon
                points="100,102 115,117 100,132 85,117"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
                className="text-primary"
              />
            </svg>
          </div>
          <span className="font-heading font-semibold text-sm tracking-tight text-foreground group-hover:text-primary transition-colors">
            {profile.shortName}
          </span>
        </a>

        {/* Right Navigation Links (Desktop) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center space-x-6 text-[13px] font-medium"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-primary font-semibold' : 'text-foreground/75 hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-cyan-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            )
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full border border-border text-foreground/80 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_12px_rgba(44,196,201,0.25)] transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* Refined Glassmorphic Resume Button */}
          <a
            href="/resume"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigateResume) {
                onNavigateResume()
              } else {
                window.history.pushState({}, '', '/resume')
                window.dispatchEvent(new PopStateEvent('popstate'))
              }
            }}
            className="px-3 py-1 rounded-md border border-primary/40 text-primary text-[11px] font-mono font-semibold tracking-wider uppercase hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(44,196,201,0.35)] transition-all duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger & Theme Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-border text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {isLight ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-border text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            title={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-3 sm:mx-6 rounded-xl border border-border bg-card/95 backdrop-blur-xl p-3.5 sm:p-5 shadow-glass overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left font-sans text-sm sm:text-base font-medium transition-all px-3 py-2.5 rounded-lg flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'text-primary bg-primary/10 border border-primary/20 font-semibold shadow-cyan-sm'
                        : 'text-foreground/85 hover:text-primary hover:bg-[var(--subtle-chip-bg)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-primary shadow-cyan-sm shrink-0" />
                    )}
                  </button>
                )
              })}
              <div className="pt-2 mt-1 border-t border-border">
                <a
                  href="/resume"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    if (onNavigateResume) {
                      onNavigateResume()
                    } else {
                      window.history.pushState({}, '', '/resume')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }
                  }}
                  className="block text-center w-full py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-primary border border-primary/50 rounded-lg hover:bg-primary/10 transition-colors shadow-cyan-sm cursor-pointer"
                >
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

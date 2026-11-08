import { useState, useEffect } from 'react'
import { ArrowUp, Copy, Check, ExternalLink } from 'lucide-react'
import { profile, socialLinks, navigationLinks } from '../data/portfolio.js'

export default function Footer({ onNavigateResume }) {
  const [copied, setCopied] = useState(false)
  const [istTime, setIstTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
        setIstTime(timeStr)
      } catch {
        setIstTime('IST')
      }
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href) => {
    if (href === '/resume') {
      if (onNavigateResume) {
        onNavigateResume()
      } else {
        window.history.pushState({}, '', '/resume')
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
      return
    }

    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = href
    }
  }

  return (
    <footer className="border-t border-border bg-[var(--footer-bg)] pt-8 pb-6 text-xs font-mono relative z-20">
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-12">
        {/* Main 3-Column Footer Grid matching reference (sec_95s.png) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-border">
          {/* Left Column (5 cols): Identity & Outlined Social Pills */}
          <div className="md:col-span-5 space-y-2.5">
            <h3 className="card-title text-base sm:text-lg text-foreground">
              {profile.name}
            </h3>
            <p className="text-xs text-foreground/75 leading-relaxed font-sans max-w-md">
              MCA Student at PES University • Java & Full-Stack Developer exploring practical web applications and problem-solving.
            </p>

            {/* Status Pill Badge */}
            <div className="pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-coral/40 bg-coral/5 text-[10.5px] font-mono text-coral font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-ping" />
                <span>Open to opportunities</span>
              </span>
            </div>

            <p className="text-[9.5px] text-foreground/50 pt-0.5">
              Built with React 18 • Vite • Tailwind CSS
            </p>

            {/* Outlined Social Button Pills matching reference */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-md border border-cyan/40 bg-cyan/5 text-cyan hover:bg-cyan/15 hover:border-cyan text-[10.5px] font-mono tracking-wider uppercase transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-md border border-coral/40 bg-coral/5 text-coral hover:bg-coral/15 hover:border-coral text-[10.5px] font-mono tracking-wider uppercase transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-md border border-cyan/40 bg-cyan/5 text-cyan hover:bg-cyan/15 hover:border-cyan text-[10.5px] font-mono tracking-wider uppercase transition-all duration-200"
              >
                LeetCode
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="px-2.5 py-1 rounded-md border border-border bg-[var(--subtle-chip-bg)] text-foreground/80 hover:border-primary/50 hover:text-primary text-[10.5px] font-mono tracking-wider uppercase transition-all duration-200"
              >
                Email
              </a>
            </div>
          </div>

          {/* Center Column (3 cols): Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              Navigate
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-foreground/75 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('/resume')}
                  className="text-cyan font-bold hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Resume</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column (4 cols): Isometric Graphic & Contact Anchor */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right space-y-3 pr-0 md:pr-4 lg:pr-8">
            {/* Ambient Isometric Accent */}
            <div className="relative w-20 h-20 mb-1 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan/10 rounded-full blur-xl" />
              <div className="w-12 h-12 rounded-xl border border-cyan/30 bg-gradient-to-br from-cyan/20 to-coral/10 rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(44,196,201,0.25)]">
                <span className="font-mono text-xs font-bold text-cyan -rotate-45">&lt;/&gt;</span>
              </div>
            </div>

            <h4 className="font-sans font-bold text-base sm:text-lg text-foreground">
              Get In Touch
            </h4>

            {/* Email Address with Copy Trigger */}
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="text-xs font-mono text-cyan hover:underline"
              >
                {profile.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
            {copied && (
              <span className="text-[10px] text-emerald-400 font-mono">
                Email copied to clipboard!
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar: Location/Time, Attribution, Back-to-Top Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Bengaluru, India • {istTime} IST</span>
          </div>

          <p className="text-center">
            Made with <span className="text-coral">❤️</span> by {profile.name}
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg border border-cyan/30 bg-cyan/5 hover:bg-cyan/15 hover:border-cyan text-cyan transition-all duration-200 flex items-center justify-center"
            title="Back to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Download,
  FileText,
  AlertCircle,
  Mail,
  GraduationCap,
  Code2,
  CheckCircle2,
  Sun,
  Moon,
  MapPin,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/portfolio.js'

export default function ResumePage({ onBackToPortfolio }) {
  const [pdfAvailable, setPdfAvailable] = useState(null)
  const [loading, setLoading] = useState(true)
  const { isLight, toggleTheme } = useTheme()

  const pdfUrl = '/mohammed_saquib_ansari_resume.pdf'

  useEffect(() => {
    window.scrollTo(0, 0)

    // Check if resume.pdf is physically present in /public
    fetch(pdfUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
          setPdfAvailable(true)
        } else if (res.ok && res.status === 200) {
          const ct = res.headers.get('content-type') || ''
          setPdfAvailable(ct.includes('pdf'))
        } else {
          setPdfAvailable(false)
        }
      })
      .catch(() => setPdfAvailable(false))
      .finally(() => setLoading(false))
  }, [pdfUrl])

  return (
    <div className="h-screen h-[100dvh] w-full bg-background text-foreground antialiased flex flex-col overflow-hidden">
      {/* Mobile & Tablet Compact Navigation Bar (< 1024px) */}
      <header className="lg:hidden shrink-0 z-40 bg-[var(--navbar-bg)] backdrop-blur-md border-b border-border px-3 sm:px-4 py-2 flex items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={onBackToPortfolio}
            className="p-1.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:border-primary/50 text-foreground/80 hover:text-primary transition-colors cursor-pointer shrink-0"
            aria-label="Back to Portfolio"
            title="Back to Portfolio"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="min-w-0">
            <h1 className="text-xs sm:text-sm font-heading font-bold text-foreground truncate">
              {profile.name}
            </h1>
            <p className="text-[10px] font-mono text-foreground/60 truncate">
              Curriculum Vitae • MCA Student
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full border border-border bg-[var(--subtle-chip-bg)] text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {isLight ? <Moon className="w-3.5 h-3.5 text-primary" /> : <Sun className="w-3.5 h-3.5 text-primary" />}
          </button>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md font-mono text-[11px] font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-colors shadow-glow"
            title="Open PDF in new tab"
            aria-label="Open PDF in new tab"
          >
            <span className="hidden min-[360px]:inline">Open</span>
            <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
          <a
            href={pdfUrl}
            download="Mohammed_Saquib_Ansari_Resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md font-mono text-[11px] font-semibold bg-secondary text-secondary-foreground hover:brightness-110 transition-colors shadow-[0_0_10px_rgba(255,84,121,0.3)]"
            title="Download PDF"
            aria-label="Download resume PDF"
          >
            <Download className="h-3 w-3 shrink-0" />
          </a>
        </div>
      </header>

      {/* Main Split-Screen Workspace */}
      <main className="flex-1 w-full max-w-[1680px] mx-auto p-2 sm:p-2.5 lg:p-3 flex flex-col lg:flex-row gap-2.5 lg:gap-3.5 overflow-hidden min-h-0">

        {/* Tablet-Only Portrait Banner (768px – 1023px) */}
        <div className="hidden md:block lg:hidden shrink-0 glass-card p-3 rounded-xl border border-border shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-cyan/30 bg-cyan/10 text-[10px] font-mono text-cyan">
                  <FileText className="h-3 w-3" />
                  <span>Curriculum Vitae</span>
                </span>
                <span className="text-xs font-mono text-foreground/60">
                  PES University, Bengaluru
                </span>
              </div>
              <h2 className="text-sm font-heading font-bold text-foreground">
                {profile.name} — <span className="font-mono text-xs font-normal text-primary">Java & Full-Stack Developer</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={pdfUrl}
                download="Mohammed_Saquib_Ansari_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-bold bg-secondary text-secondary-foreground hover:brightness-110 transition-colors shadow-[0_0_10px_rgba(255,84,121,0.3)]"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Left Profile Panel (>= 1024px) */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="hidden lg:flex lg:w-[30%] lg:min-w-[310px] lg:max-w-[380px] flex-col justify-between glass-card p-4 xl:p-5 rounded-2xl border border-border shadow-xl overflow-hidden shrink-0 h-full"
        >
          {/* Top Section: Navigation + Profile Info */}
          <div className="shrink-0 space-y-3 xl:space-y-3.5">
            {/* Action Row */}
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <button
                onClick={onBackToPortfolio}
                className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                aria-label="Back to Portfolio"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-primary" />
                <span>Back to Portfolio</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-border bg-[var(--subtle-chip-bg)] text-foreground/80 hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
                aria-label="Toggle Theme"
                title="Toggle Theme"
              >
                {isLight ? <Moon className="w-3.5 h-3.5 text-primary" /> : <Sun className="w-3.5 h-3.5 text-primary" />}
              </button>
            </div>

            {/* Profile Identity */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-cyan/30 bg-cyan/10 text-[10.5px] font-mono font-medium text-cyan">
                <FileText className="h-3 w-3" />
                <span>Official Curriculum Vitae</span>
              </div>
              <h1 className="text-xl xl:text-2xl font-heading font-bold text-foreground tracking-tight leading-tight">
                {profile.name}
              </h1>
              <div className="space-y-0.5">
                <p className="text-xs font-mono font-semibold text-primary">
                  MCA Student @ PES University, Bengaluru
                </p>
                <p className="text-xs font-mono text-foreground/70">
                  Java & Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Brief Bio */}
            <p className="text-xs leading-relaxed text-foreground/75 font-sans">
              MCA candidate passionate about scalable backend engineering, Data Structures & Algorithms, and modern full-stack web applications.
            </p>
          </div>

          {/* Middle Section: The 3 Boxes Stretched to Cover Available Space */}
          <div className="flex-1 flex flex-col justify-between gap-2.5 my-3 min-h-0">
            {/* Box 1: Education */}
            <div className="flex-1 min-h-[50px] flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[var(--subtle-chip-bg)] border border-border/60 hover:border-primary/40 transition-all duration-200 shadow-sm">
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold">
                  Education
                </p>
                <p className="text-xs font-mono text-foreground/90 truncate font-medium">
                  PES University • MCA (2024–2026)
                </p>
              </div>
            </div>

            {/* Box 2: Tech Focus */}
            <div className="flex-1 min-h-[50px] flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[var(--subtle-chip-bg)] border border-border/60 hover:border-cyan/40 transition-all duration-200 shadow-sm">
              <div className="p-2 rounded-lg bg-cyan/10 text-cyan shrink-0">
                <Code2 className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-cyan font-semibold">
                  Tech Focus
                </p>
                <p className="text-xs font-mono text-foreground/90 truncate font-medium">
                  Java, DSA & MERN Stack
                </p>
              </div>
            </div>

            {/* Box 3: Availability */}
            <div className="flex-1 min-h-[50px] flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[var(--subtle-chip-bg)] border border-border/60 hover:border-secondary/40 transition-all duration-200 shadow-sm">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-secondary font-semibold">
                  Availability
                </p>
                <p className="text-xs font-mono text-foreground/90 truncate font-medium">
                  Available for SDE / Internships
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Actions & Meta Info */}
          <div className="shrink-0 pt-3 border-t border-border/60 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 shadow-glow text-center"
              >
                <span>Open PDF</span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
              <a
                href={pdfUrl}
                download="Mohammed_Saquib_Ansari_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider bg-secondary text-secondary-foreground hover:brightness-110 transition-all duration-200 shadow-[0_0_12px_rgba(255,84,121,0.35)] text-center"
              >
                <span>Download</span>
                <Download className="h-3 w-3 shrink-0" />
              </a>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-foreground/55 pt-0.5">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-cyan" />
                <span>Bengaluru, India</span>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-primary transition-colors truncate max-w-[160px]"
                title={profile.email}
              >
                {profile.email}
              </a>
            </div>
          </div>
        </motion.aside>

        {/* Right Panel: Dedicated PDF Viewer */}
        <motion.section
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 h-full w-full min-h-0 rounded-2xl overflow-hidden border border-border bg-[var(--inner-box-bg)] shadow-2xl relative flex flex-col"
        >
          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 space-y-3 font-mono text-xs text-foreground/60">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <p>Initializing PDF Document Viewer...</p>
            </div>
          ) : pdfAvailable ? (
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="Mohammed Saquib Ansari Resume"
              className="w-full h-full block border-0 flex-1"
            />
          ) : (
            /* Graceful Fallback if PDF is missing or failed */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                <AlertCircle className="h-7 w-7" />
              </div>
              <div className="space-y-1.5 max-w-md">
                <h2 className="text-lg font-heading font-bold text-foreground">
                  Resume Document Ready on Request
                </h2>
                <p className="text-xs text-foreground/70 font-sans">
                  The verified PDF resume is maintained for official applications. You can contact Mohammed directly to request the latest document.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <a
                  href={`mailto:${profile.email}?subject=Resume%20Inquiry%20-%20Mohammed%20Saquib%20Ansari`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold bg-primary text-primary-foreground hover:brightness-110 transition-colors shadow-glow"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Request PDF via Email</span>
                </a>
                <button
                  onClick={onBackToPortfolio}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-[var(--subtle-chip-bg)] text-xs font-mono text-foreground/80 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Portfolio</span>
                </button>
              </div>
            </div>
          )}
        </motion.section>
      </main>
    </div>
  )
}

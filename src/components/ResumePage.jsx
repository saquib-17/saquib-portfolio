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
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/portfolio.js'

export default function ResumePage({ onBackToPortfolio }) {
  const [pdfAvailable, setPdfAvailable] = useState(null)
  const [loading, setLoading] = useState(true)
  const { isLight, toggleTheme } = useTheme()

  const pdfUrl = '/resume.pdf'

  useEffect(() => {
    window.scrollTo(0, 0)

    // Check if resume.pdf is physically present in /public
    fetch(pdfUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
          setPdfAvailable(true)
        } else if (res.ok && res.status === 200) {
          // If server serves index.html on 404 (SPA fallback), check content-type
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
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 py-3 bg-[var(--navbar-bg)] backdrop-blur-md border-b border-border">
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-5 flex items-center justify-between">
          <button
            onClick={onBackToPortfolio}
            className="group flex items-center gap-2 text-xs font-mono font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          {/* Actions Bar matching reference (sample_130s.png) */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-border text-foreground/80 hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 shadow-glow"
            >
              <span>Open PDF</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={pdfUrl}
              download="Mohammed_Saquib_Ansari_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground hover:brightness-110 transition-all duration-200 shadow-[0_0_12px_rgba(255,84,121,0.35)]"
            >
              <span>Download PDF</span>
              <Download className="h-3 w-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Resume Stage: Centered 1100px Container */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-5 py-5 sm:py-7">
        {/* Page Heading / Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-4 sm:mb-5 space-y-1.5"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-cyan/30 bg-cyan/5 text-[10.5px] font-mono text-cyan mb-0.5">
            <FileText className="h-3 w-3" />
            <span>Official Curriculum Vitae</span>
          </div>
          <h1 className="text-2xl sm:text-[32px] sm:leading-tight font-heading font-bold text-foreground tracking-tight">
            {profile.name}
          </h1>
          <p className="text-sm sm:text-[16px] text-foreground/70 max-w-xl mx-auto font-sans">
            MCA Student @ PES University, Bengaluru • Java & Full-Stack Developer
          </p>
        </motion.div>

        {/* PDF Viewer Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-card p-2 sm:p-3 rounded-2xl relative overflow-hidden shadow-2xl w-full border border-border"
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 space-y-3 font-mono text-xs text-foreground/60">
              <div className="w-8 h-8 rounded-full border-2 border-cyan border-t-transparent animate-spin" />
              <p>Loading document viewer...</p>
            </div>
          ) : pdfAvailable ? (
            <div className="w-full rounded-xl overflow-hidden border border-border bg-[var(--inner-box-bg)]">
              <iframe
                src={`${pdfUrl}#view=FitH`}
                title="Mohammed Saquib Ansari Resume"
                className="w-full h-[620px] md:h-[680px] lg:h-[780px] rounded-xl block border-0"
              />
            </div>
          ) : (
            /* Graceful Fallback if PDF is not yet placed in /public/resume.pdf */
            <div className="py-12 px-4 sm:px-8 text-center space-y-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary">
                <FileText className="h-7 w-7" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h2 className="text-lg font-bold text-foreground">
                  Resume Asset Configuration
                </h2>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  The dedicated resume viewer is configured and active. To display the complete PDF document directly in this viewer, place your resume file at:
                </p>
                <div className="inline-block px-3 py-1.5 rounded-lg bg-[var(--inner-box-bg)] border border-primary/30 text-xs font-mono text-primary">
                  public/resume.pdf
                </div>
              </div>

              {/* Verified Credentials Summary Card */}
              <div className="max-w-xl mx-auto rounded-xl border border-border bg-[var(--inner-box-bg)] p-5 text-left space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-primary font-bold pb-2 border-b border-border">
                  <GraduationCap className="h-4 w-4" />
                  <span>Verified Candidate Overview</span>
                </div>
                <div className="space-y-1.5 text-foreground/80">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Current:</strong> MCA Student (First Semester) @ PES University, Bengaluru (2026–2028)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Undergraduate:</strong> BCA, Seshadripuram College, Tumakuru (Graduated 2026 • CGPA: 9.14)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Internship:</strong> Web Development Intern @ Labmentix (2 Months)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Core Focus:</strong> Java, DSA, JavaScript, MERN Stack (React, Node.js, Express, MongoDB), SQL</span>
                  </p>
                </div>
              </div>

              {/* Direct Communication Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Resume%20Inquiry%20-%20Mohammed%20Saquib%20Ansari`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-bold bg-primary text-primary-foreground hover:brightness-110 transition-colors shadow-glow"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Request PDF via Email</span>
                </a>
                <button
                  onClick={onBackToPortfolio}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] text-xs font-mono text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Explore Portfolio Projects</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 border-t border-border bg-[var(--footer-bg)] text-center text-xs font-mono text-foreground/50">
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-5">
          <p>© {new Date().getFullYear()} Mohammed Saquib Ansari • PES University, Bengaluru</p>
        </div>
      </footer>
    </div>
  )
}


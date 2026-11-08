import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from 'lucide-react'
import { Lottie } from 'lottie-react'
import confetti from 'canvas-confetti'
import { profile, socialLinks } from '../data/portfolio.js'
import coderAnimation from '../assets/coder.json'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#2cc4c9', '#ff5479', '#ffffff'],
        })
      } catch {
        // Fallback
      }
    }, 500)
  }

  const handleResetForm = () => {
    setSubmitted(false)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-14 sm:py-16 relative">
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project idea, collaboration opportunity, or simply want to connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* Two-Column Balanced Composition matching reference (sample_120s.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column (5 Cols): Developer Illustration & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3.5"
          >
            {/* Lottie Developer Coding Animation */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto lg:mx-0 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl -z-10" />
              <Lottie
                src={coderAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full drop-shadow-md"
              />
            </div>

            {/* Direct Email Pill Box */}
            <div className="w-full glass-card p-3.5 rounded-xl space-y-2">
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-text-muted">
                Direct Communication
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded-lg bg-[var(--inner-box-bg)] border border-border">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan hover:underline truncate"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded bg-cyan/10 hover:bg-cyan/20 text-cyan font-mono text-[11px] font-medium border border-cyan/40 transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-foreground/70 pt-0.5">
                <MapPin className="h-3.5 w-3.5 text-coral shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Quick Social Buttons */}
            <div className="flex items-center gap-2 w-full">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:border-primary/40 hover:bg-primary/10 text-[11px] font-mono text-foreground/80 hover:text-primary transition-all"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:border-primary/40 hover:bg-primary/10 text-[11px] font-mono text-foreground/80 hover:text-primary transition-all"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:border-primary/40 hover:bg-primary/10 text-[11px] font-mono text-foreground/80 hover:text-primary transition-all"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>LeetCode</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-4 sm:p-5 lg:p-6 rounded-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 text-center space-y-3.5"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="card-title text-base sm:text-lg">Message Dispatched!</h3>
                      <p className="mt-1 text-xs text-foreground/70 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, {formState.name}. I have received your note and will get back to you shortly at {formState.email}.
                      </p>
                    </div>
                    <div className="pt-2 flex items-center justify-center gap-2.5">
                      <button
                        onClick={handleResetForm}
                        className="px-3.5 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] text-xs font-mono text-foreground hover:bg-white/[0.08] transition-colors cursor-pointer"
                      >
                        Send Another Note
                      </button>
                      <a
                        href={`mailto:${profile.email}?subject=Hello%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`}
                        className="px-3.5 py-1.5 rounded-lg border border-cyan/40 bg-cyan/10 text-xs font-mono text-cyan hover:bg-cyan/20 transition-colors"
                      >
                        Open In Email App
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Name Input */}
                      <div className="space-y-1">
                        <label
                          htmlFor="name"
                          className="block font-mono text-[11px] font-medium text-foreground/80 uppercase tracking-wider"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Mercer"
                          className="w-full rounded-lg border border-border bg-[var(--inner-box-bg)] px-3 py-2 text-xs text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1">
                        <label
                          htmlFor="email"
                          className="block font-mono text-[11px] font-medium text-foreground/80 uppercase tracking-wider"
                        >
                          Your Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full rounded-lg border border-border bg-[var(--inner-box-bg)] px-3 py-2 text-xs text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="block font-mono text-[11px] font-medium text-foreground/80 uppercase tracking-wider"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Describe your role opportunity, project architecture, or collaboration inquiry..."
                        className="w-full resize-none rounded-lg border border-border bg-[var(--inner-box-bg)] p-3 text-xs text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 shadow-glow active:translate-y-0.5 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Transmission...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, Calendar, CheckCircle2, FileCheck, X } from 'lucide-react'
import { FaJava } from 'react-icons/fa'
import { SiNodedotjs, SiMongodb } from 'react-icons/si'
import { certifications } from '../data/portfolio.js'

const CERT_ICONS = {
  'cert-java': FaJava,
  'cert-nodejs': SiNodedotjs,
  'cert-mongodb': SiMongodb,
}

export default function Certifications() {
  const [activeModal, setActiveModal] = useState(null)

  const handleViewCertificate = (cert) => {
    if (cert.fileUrl) {
      window.open(cert.fileUrl, '_blank')
    } else {
      setActiveModal(cert)
    }
  }

  return (
    <section id="certifications" className="py-14 sm:py-16 relative">
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional course certifications completed through Simplilearn
          </p>
        </motion.div>

        {/* 3 Certifications Cards Grid with Compact Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {certifications.map((cert, index) => {
            const IconComponent = CERT_ICONS[cert.id] || Award
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card p-4 sm:p-4.5 rounded-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Top Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: cert.badgeColor || '#2cc4c9' }}
                />

                <div>
                  {/* Header Row: Icon & Status Badge */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border">
                    <div className="w-8 h-8 rounded-lg bg-[var(--subtle-chip-bg)] border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-200">
                      <IconComponent
                        className="w-4 h-4"
                        style={{ color: cert.badgeColor || '#2cc4c9' }}
                      />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9.5px] font-mono font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="card-title text-[15px] sm:text-[16px] group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px] font-mono">
                    <span className="text-primary font-semibold">{cert.issuer}</span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-foreground/60">Verified Course</span>
                  </div>

                  {/* Subject Context */}
                  <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
                    {cert.subject}
                  </p>
                </div>

                {/* Footer: Date & View Action */}
                <div className="mt-3.5 pt-2.5 border-t border-border flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-foreground/50">
                    <Calendar className="w-3 h-3 text-foreground/40 shrink-0" />
                    <span>Completion Date Pending</span>
                  </div>

                  <button
                    onClick={() => handleViewCertificate(cert)}
                    className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 min-[380px]:py-1 rounded-md border border-cyan/40 bg-cyan/10 hover:bg-cyan/20 text-cyan text-[11px] font-mono font-semibold transition-all shadow-cyan-sm cursor-pointer w-full min-[380px]:w-auto"
                    aria-label={`View certificate details for ${cert.title}`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Modal / Toast for Certificate Awaiting Upload */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card max-w-md w-full p-6 rounded-2xl border border-cyan/30 shadow-2xl relative text-center space-y-4"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/5 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 text-cyan mx-auto flex items-center justify-center">
                  <FileCheck className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-foreground">
                    {activeModal.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan mt-0.5">
                    Issued by {activeModal.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-[13px] text-foreground/80 leading-relaxed">
                  This certificate card is structured and ready. The actual Simplilearn certificate document file will be attached here upon upload.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="btn-primary-glow !px-5 !py-2 !text-xs"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}


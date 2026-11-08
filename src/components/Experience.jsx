import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { internshipExperience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 relative">
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Hands-on professional web development internship and practical technical workflow
          </p>
        </motion.div>

        {/* Experience Timeline Container with Progressive Scroll Line */}
        <div className="max-w-3xl mx-auto relative pl-0 sm:pl-6 space-y-4">
          {/* Progressive Scroll Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-cyan to-secondary origin-top opacity-60 rounded-full"
          />

          {internshipExperience.map((internship, index) => (
            <div key={internship.id} className="relative">
              {/* Timeline Node Dot */}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="hidden sm:block absolute -left-[27px] top-6 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background shadow-cyan-sm z-10"
              />

              <motion.div
                initial={{ opacity: 0, y: 18, x: -6 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card p-4 sm:p-5 lg:p-6 rounded-xl hover:border-cyan/40 transition-colors duration-300 group relative overflow-hidden"
              >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan to-secondary opacity-60" />

              {/* Header: Role, Company & Duration Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-border">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-primary shrink-0" />
                    <h3 className="card-title text-[16px] sm:text-[17.5px] group-hover:text-cyan transition-colors">
                      {internship.role}
                    </h3>
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-cyan font-semibold">{internship.company}</span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-foreground/70 flex items-center gap-1 font-mono text-[11px]">
                      <MapPin className="w-3 h-3 text-coral" />
                      {internship.location}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-mono font-medium tracking-wider text-cyan border border-cyan/30 bg-cyan/10 uppercase">
                    <Calendar className="w-3 h-3" />
                    {internship.duration}
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded-md text-[9.5px] font-mono font-medium text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 uppercase">
                    Completed
                  </span>
                </div>
              </div>

              {/* Verified Context Summary */}
              <p className="mt-3 text-xs sm:text-[13px] text-foreground/80 leading-relaxed">
                {internship.description}
              </p>

              {/* Responsibilities & Learning Highlights with Cyan Diamond Markers */}
              <div className="mt-3.5 pt-3 border-t border-border">
                <span className="text-[10.5px] font-mono text-primary font-semibold uppercase tracking-wider block mb-2">
                  Key Responsibilities & Practical Learning
                </span>
                <ul className="space-y-1.5">
                  {internship.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-[12.5px] text-foreground/75 leading-relaxed"
                    >
                      <span className="text-cyan text-xs mt-0.5 shrink-0 select-none">◆</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied Badge Row */}
              <div className="mt-3.5 pt-2.5 border-t border-border flex flex-wrap items-center gap-1.5 font-mono text-[10.5px]">
                <span className="text-foreground/50 mr-1 text-[10px]">Workflow & Tools:</span>
                {['MERN Stack', 'GitHub', 'Postman', 'Vercel', 'Render', 'Netlify'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded bg-[var(--subtle-chip-bg)] border border-border text-primary text-[10px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

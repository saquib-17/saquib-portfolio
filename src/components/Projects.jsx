import { motion } from 'framer-motion'
import {
  Folder,
  BarChart3,
  UserCheck,
  Mic,
  Clock,
  Sparkles,
  FileCode,
  ArrowUpRight,
  Github,
} from 'lucide-react'
import { userProjects } from '../data/portfolio.js'

const PROJECT_ICONS = {
  'ai-analyst-dashboard': BarChart3,
  'smart-ai-attendance': UserCheck,
  'speech-to-text-app': Mic,
  mynotes: Folder,
}

export default function Projects() {
  const featured = userProjects.featured || []
  const additional = (userProjects.additional || []).filter((p) => p.enabled !== false)

  return (
    <section id="projects" className="py-14 sm:py-16 relative">
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Curated software applications and practical development projects
          </p>
        </motion.div>

        {/* Featured Projects Stack with Compact Proportions */}
        <div className="space-y-5 sm:space-y-6">
          {featured.map((project, index) => {
            const IconComponent = PROJECT_ICONS[project.id] || Sparkles
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-4 sm:p-5 lg:p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-cyan/35 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
                  {/* Left: Prepared Preview Canvas (Proportionate, not oversized) */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-xl overflow-hidden border border-border bg-[var(--inner-box-bg)] p-4 sm:p-5 flex flex-col items-center justify-center text-center space-y-2.5 min-h-[160px] sm:min-h-[175px] group-hover:border-primary/40 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                      <div className="p-2.5 rounded-lg bg-[var(--subtle-chip-bg)] border border-border text-primary group-hover:scale-105 transition-transform duration-300 shadow-cyan-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-0.5 relative z-10">
                        <h4 className="card-title text-xs sm:text-[13px]">
                          {project.title}
                        </h4>
                        <p className="text-[10px] font-mono text-foreground/50">
                          Architecture & Interface Preview
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[9.5px] font-mono text-primary">
                        <Clock className="w-3 h-3" />
                        <span>Screenshots & Details Pending</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Project Details & Readiness State */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-2.5">
                    <div>
                      <span className="font-mono text-[10.5px] font-semibold text-primary tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="card-title text-[18px] sm:text-[20px] text-foreground mt-0.5 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11.5px] text-foreground/60 font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Elevated Description Box */}
                    <div className="rounded-xl bg-[var(--inner-box-bg)] border border-border p-3 sm:p-3.5 shadow-lg text-xs leading-relaxed text-foreground/75">
                      Detailed project description, feature breakdown, technology stack specifications, and architecture overview will be provided upon update.
                    </div>

                    {/* Tech Stack Readiness State */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-primary/80">
                      <FileCode className="w-3.5 h-3.5 text-primary" />
                      <span>Tech Stack: Awaiting detailed specification</span>
                    </div>

                    {/* Action Buttons (Disabled / Ready State) */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5 font-mono text-[11px]">
                      <span className="px-2.5 py-1.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] text-foreground/50 inline-flex items-center gap-1.5 cursor-not-allowed select-none">
                        <Github className="w-3.5 h-3.5" />
                        <span>Repository (Soon)</span>
                      </span>
                      <span className="px-2.5 py-1.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] text-foreground/50 inline-flex items-center gap-1.5 cursor-not-allowed select-none">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Live Demo (Soon)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Project Section (MyNotes) */}
        {additional.length > 0 && (
          <div className="mt-10 sm:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="text-center mb-6"
            >
              <h3 className="section-title text-[20px] sm:text-[22px]">
                Additional Projects
              </h3>
              <p className="section-subtitle !mb-0 mt-0.5">
                Productivity tools and ongoing software explorations
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {additional.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card p-4 sm:p-5 rounded-xl flex flex-col justify-between hover:border-cyan/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2.5">
                      <Folder className="h-6 w-6 text-cyan group-hover:text-cyan-bright transition-colors" />
                      <span className="px-2 py-0.5 rounded text-[9.5px] font-mono text-cyan bg-cyan/10 border border-cyan/20">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="card-title text-[15px] sm:text-[16px] group-hover:text-cyan transition-colors mt-0.5 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      Personal notes management and study productivity application. Detailed features, technology stack, and repository links will be attached upon documentation completion.
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-border flex items-center justify-between text-[10.5px] font-mono text-foreground/50">
                    <span>Awaiting documentation update</span>
                    <span className="text-cyan/70">Optional card • Ready</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

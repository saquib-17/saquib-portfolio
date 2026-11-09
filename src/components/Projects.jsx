import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart3,
  UserCheck,
  Mic,
  Brain,
  Clock,
  Sparkles,
  ArrowUpRight,
  Github,
  X,
} from 'lucide-react'
import TechnicalGrid from './TechnicalGrid.jsx'
import { userProjects } from '../data/portfolio.js'

const PROJECT_ICONS = {
  'datamind-ai': BarChart3,
  'smart-ai': UserCheck,
  'speechscribe-ai': Mic,
  'techquery-ai': Brain,
}

function ProjectThumbnail({ project, className = '', priority = false }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const IconComponent = PROJECT_ICONS[project.id] || Sparkles

  return (
    <div
      className={`rounded-lg overflow-hidden border border-border bg-[var(--inner-box-bg)] relative flex items-center justify-center ${className}`}
    >
      {/* Subtle ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      {/* Fallback architectural preview while screenshot is loading or awaiting manual upload */}
      {!loaded && (
        <div className="p-4 flex flex-col items-center justify-center text-center space-y-1.5 relative z-10 w-full h-full">
          <div className="p-2 rounded-lg bg-[var(--subtle-chip-bg)] border border-border text-primary shadow-cyan-sm">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-0.5">
            <h4 className="card-title text-xs sm:text-[13px]">{project.title}</h4>
            <p className="text-[10px] font-mono text-foreground/50">
              Interface Preview
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[9px] font-mono text-primary">
            <Clock className="w-2.5 h-2.5" />
            <span>Screenshot Awaiting Upload</span>
          </div>
        </div>
      )}

      {/* Actual Screenshot once uploaded to public/images/projects/ */}
      {!failed && (
        <img
          src={project.image}
          alt={`${project.title} dashboard screenshot`}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={(e) => {
            if (e.target.naturalWidth > 0) {
              setLoaded(true)
            } else {
              setFailed(true)
            }
          }}
          onError={() => {
            setFailed(true)
            setLoaded(false)
          }}
          className={`w-full h-full object-cover object-top transition-all duration-500 absolute inset-0 ${loaded ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'
            }`}
        />
      )}
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = Array.isArray(userProjects)
    ? userProjects
    : (userProjects.featured || [])

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [selectedProject])

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-12 sm:py-14 relative overflow-hidden">
      {/* Selective Technical Grid */}
      <TechnicalGrid />

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

        {/* Compact Two-Column Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.32, delay: index * 0.06 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card p-3.5 sm:p-4 rounded-xl border border-border/70 hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-cyan-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedProject(project)
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="space-y-2.5">
                {/* Project Screenshot Thumbnail (Target ~180px height on desktop) */}
                <div className="overflow-hidden rounded-lg">
                  <ProjectThumbnail
                    project={project}
                    className="w-full h-[165px] sm:h-[180px] group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Row 1: Category & Status Badge */}
                <div className="flex items-start justify-between gap-2 pt-0.5">
                  <span className="font-mono text-[9.5px] sm:text-[10px] font-semibold text-primary tracking-wider uppercase leading-snug">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium border shrink-0 ${project.status === 'Active Development'
                      ? 'text-cyan bg-cyan/10 border-cyan/30'
                      : 'text-amber-400 bg-amber-400/10 border-amber-400/30'
                      }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${project.status === 'Active Development'
                        ? 'bg-cyan animate-pulse'
                        : 'bg-amber-400'
                        }`}
                    />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Row 2: Project Title */}
                <h3 className="card-title text-[16px] sm:text-[17px] text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Row 3: Short Description (max 2 lines) */}
                <p className="text-xs text-foreground/75 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                  {project.description}
                </p>

                {/* Row 4: Maximum 4 Primary Technology Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[var(--subtle-chip-bg)] border border-border text-foreground/75"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-primary/80 bg-primary/10 border border-primary/25">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 5: View Details Action */}
              <div className="mt-3.5 pt-2.5 border-t border-border flex items-center justify-between">
                <span className="text-[11px] font-mono font-medium text-primary group-hover:underline inline-flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>

                {project.github && (
                  <span
                    className="text-foreground/40 group-hover:text-primary transition-colors p-1"
                    title="GitHub Repository available"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 pb-6 px-3 sm:px-6 bg-background/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="glass-card max-w-[1040px] w-full max-h-[calc(100vh-105px)] sm:max-h-[calc(100vh-120px)] flex flex-col rounded-2xl border border-border/80 shadow-2xl relative overflow-hidden bg-card/95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER: PROJECT DETAILS label, category, status, close button */}
              <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-b border-border flex items-center justify-between gap-3 shrink-0 bg-card/95">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 min-w-0">
                  <span className="font-mono text-[11px] font-bold text-primary tracking-wider uppercase">
                    PROJECT DETAILS
                  </span>
                  <span className="text-foreground/30 hidden sm:inline">•</span>
                  <span className="font-mono text-[10.5px] text-foreground/60 uppercase tracking-wider truncate">
                    {selectedProject.category}
                  </span>
                  <span className="text-foreground/30 hidden sm:inline">•</span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-medium border shrink-0 ${selectedProject.status === 'Active Development'
                      ? 'text-cyan bg-cyan/10 border-cyan/30'
                      : 'text-amber-400 bg-amber-400/10 border-amber-400/30'
                      }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${selectedProject.status === 'Active Development'
                        ? 'bg-cyan animate-pulse'
                        : 'bg-amber-400'
                        }`}
                    />
                    <span>{selectedProject.status}</span>
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 sm:p-2 rounded-lg bg-[var(--subtle-chip-bg)] border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 transition-colors cursor-pointer shrink-0"
                  aria-label="Close project details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* MAIN CONTENT: Controlled Internal Scrolling */}
              <div className="p-5 sm:p-6 lg:p-7 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* LEFT COLUMN: Project screenshot & action buttons */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <ProjectThumbnail
                      project={selectedProject}
                      className="w-full h-[190px] sm:h-[210px] lg:h-[220px] shadow-md"
                      priority
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 font-mono">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:bg-card hover:border-primary/40 text-foreground/85 hover:text-foreground text-xs font-medium inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-cyan-sm hover:-translate-y-0.5 cursor-pointer w-full"
                          aria-label={`View ${selectedProject.title} GitHub repository`}
                        >
                          <Github className="w-4 h-4 text-primary shrink-0" />
                          <span>GitHub Repository</span>
                        </a>
                      )}

                      {selectedProject.liveDemo && (
                        <a
                          href={selectedProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg border border-cyan/40 bg-cyan/15 hover:bg-cyan/25 text-cyan text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-cyan-sm hover:shadow-cyan-md hover:-translate-y-0.5 cursor-pointer w-full"
                          aria-label={`Launch ${selectedProject.title} live deployment`}
                        >
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Project Overview, Key Features, Technology Stack */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* SECTION 1: PROJECT OVERVIEW */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10.5px] font-bold text-primary tracking-wider uppercase block">
                        PROJECT OVERVIEW
                      </span>
                      <h3
                        id="modal-project-title"
                        className="card-title text-[20px] sm:text-[22px] text-foreground leading-tight"
                      >
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-foreground/80 leading-relaxed pt-0.5">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* SECTION 2: KEY FEATURES */}
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-border/60">
                        <span className="font-mono text-[10.5px] font-bold text-primary tracking-wider uppercase block">
                          KEY FEATURES
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-foreground/80 font-sans">
                          {selectedProject.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-primary mt-0.5 shrink-0 text-[10px]">
                                ▹
                              </span>
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* SECTION 3: TECHNOLOGY STACK */}
                    <div className="space-y-2 pt-2 border-t border-border/60">
                      <span className="font-mono text-[10.5px] font-bold text-primary tracking-wider uppercase block">
                        TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--subtle-chip-bg)] border border-border text-foreground/85 hover:border-primary/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

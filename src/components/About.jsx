import { motion } from 'framer-motion'
import {
  Code2,
  GraduationCap,
  Download,
  Sparkles,
  Brain,
  Lightbulb,
  Wrench,
  Cpu,
  Heart,
  Users,
  Globe2,
  BookOpen,
} from 'lucide-react'
import { Lottie } from 'lottie-react'
import coderAnimationData from '../assets/coder.json'
import { profile } from '../data/portfolio.js'

export default function About({ onNavigateResume }) {
  const interests = [
    {
      icon: Brain,
      label: 'Continuous Learning',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
    },
    {
      icon: Lightbulb,
      label: 'Problem Solving & DSA',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
    {
      icon: Wrench,
      label: 'Clean Architecture',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
    {
      icon: Cpu,
      label: 'Systems & Scalability',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: Code2,
      label: 'Full-Stack Craft',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
    },
    {
      icon: Heart,
      label: 'Technical Mentorship',
      color: 'text-coral',
      bg: 'bg-coral/10',
    },
    {
      icon: Users,
      label: 'Collaborative Work',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
    },
    {
      icon: Globe2,
      label: 'Web Exploration',
      color: 'text-teal-400',
      bg: 'bg-teal-400/10',
    },
    {
      icon: BookOpen,
      label: 'Engineering Reading',
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10',
    },
  ]

  return (
    <section id="about" className="py-14 sm:py-16 relative">
      <div className="max-w-[1140px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-14 xl:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid with Compact Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
          {/* Card 1: Who I Am (2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="md:col-span-2 glass-card p-4 sm:p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="card-title mb-2.5 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                Who I Am
              </h3>
              <div className="space-y-2 text-foreground/80 leading-relaxed text-xs sm:text-[13px]">
                <p>
                  I'm <span className="font-semibold text-foreground">Mohammed Saquib Ansari</span>, an MCA student at PES University with a strong interest in software development and problem-solving.
                </p>
                <p>
                  I enjoy building practical web applications and understanding the logic behind the systems I develop. My current focus is strengthening my Java and Data Structures & Algorithms skills while developing my knowledge of full-stack web development using JavaScript and the MERN stack.
                </p>
                <p>
                  I believe in learning by building, experimenting with technologies, and understanding the fundamentals behind the code. I'm continuously working on improving my programming, problem-solving, and software development skills.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
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
                className="btn-primary-glow !px-4 !py-1.5 !text-[11.5px] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>
              <span className="text-[11px] font-mono text-foreground/50">
                Bengaluru, Karnataka
              </span>
            </div>
          </motion.div>

          {/* Card 2: Lottie Coder Illustration (1 column, compact) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="md:col-span-1 glass-card p-3 flex flex-col items-center justify-center overflow-hidden group min-h-[170px]"
          >
            <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Lottie
                src={coderAnimationData}
                loop={true}
                autoplay={true}
                className="w-full h-auto max-w-[160px] sm:max-w-[180px]"
              />
            </div>
          </motion.div>

          {/* Card 3: Education Card (2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="md:col-span-2 glass-card p-4 sm:p-5"
          >
            <h3 className="card-title mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-secondary" />
              Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* MCA */}
              <div className="space-y-1 relative pl-3 border-l-2 border-primary/50">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-cyan-sm" />
                <p className="text-foreground font-semibold text-xs sm:text-[14px] leading-snug">
                  Master of Computer Applications (MCA)
                </p>
                <p className="text-[11.5px] text-foreground/75 font-medium">
                  PES University
                </p>
                <p className="text-[10.5px] text-foreground/55 font-mono">
                  Bengaluru, Karnataka
                </p>
                <span className="inline-block mt-0.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium text-primary bg-primary/10 border border-primary/30">
                  Currently Pursuing (First Semester) • 2026–2028
                </span>
              </div>

              {/* BCA */}
              <div className="space-y-1 relative pl-3 border-l-2 border-secondary/50">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-secondary shadow-coral-sm" />
                <p className="text-foreground font-semibold text-xs sm:text-[14px] leading-snug">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-[11.5px] text-foreground/75 font-medium">
                  Seshadripuram College, Tumakuru
                </p>
                <p className="text-[10.5px] text-foreground/55 font-mono">
                  Graduation Year: 2026
                </p>
                <span className="inline-block mt-0.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium text-secondary bg-secondary/10 border border-secondary/30">
                  Graduated • CGPA: 9.14
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card: Focus Areas (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="md:col-span-1 glass-card p-3.5 sm:p-4 flex flex-col justify-center"
          >
            <span className="text-[10.5px] font-mono text-primary font-semibold uppercase tracking-wider mb-2">
              Focus Areas
            </span>
            <ul className="space-y-1.5 text-[11.5px] sm:text-xs text-foreground/80 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>Java & Algorithmic Problem Solving (DSA)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>Full-Stack Web Development (MERN)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>Backend & API Engineering (Node.js)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>Databases (MongoDB & SQL)</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 4: Beyond Code (3 columns full width) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="md:col-span-3 glass-card p-4 sm:p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <h3 className="card-title flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                Beyond Code
              </h3>
              <span className="text-[10.5px] font-mono text-foreground/50 tracking-wider uppercase">
                Interests & Values
              </span>
            </div>

            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {interests.map((interest) => {
                const Icon = interest.icon
                return (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:bg-card hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-cyan-sm transition-all duration-200"
                  >
                    <div className={`p-1 rounded-md ${interest.bg} ${interest.color} shrink-0`}>
                      <Icon className="w-3 h-3" />
                    </div>
                    <span className="text-[11px] font-medium text-foreground/85 leading-tight truncate">
                      {interest.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

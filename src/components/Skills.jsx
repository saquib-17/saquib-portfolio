import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNetlify,
  SiRender,
  SiPython,
  SiFlask,
  SiLeetcode,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbSql, TbBrandVercel } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { Layers, Server, Sparkles, BookOpen } from 'lucide-react'
import TechnicalGrid from './TechnicalGrid.jsx'
import { currentlyLearning } from '../data/portfolio.js'

const BRAND_COLORS_DARK = {
  Java: '#F89820',
  JavaScript: '#F7DF1E',
  'Data Structures & Algorithms': '#FFA116',
  HTML: '#E34F26',
  CSS: '#1572B6',
  React: '#61DAFB',
  'Tailwind CSS': '#38BDF8',
  'Node.js': '#68A063',
  'Express.js': '#64ffda',
  'MERN Stack': '#2cc4c9',
  MongoDB: '#47A248',
  SQL: '#4479A1',
  Git: '#F05032',
  GitHub: '#FFFFFF',
  'Visual Studio Code': '#007ACC',
  Postman: '#FF6C37',
  Vercel: '#FFFFFF',
  Netlify: '#00C7B7',
  Render: '#46E3B7',
}

const BRAND_COLORS_LIGHT = {
  Java: '#E76F00',
  JavaScript: '#D49A00',
  'Data Structures & Algorithms': '#E68A00',
  HTML: '#E34F26',
  CSS: '#1572B6',
  React: '#087EA4',
  'Tailwind CSS': '#0284C7',
  'Node.js': '#4F8A4B',
  'Express.js': '#17212B',
  'MERN Stack': '#16A6AD',
  MongoDB: '#3F8A40',
  SQL: '#336688',
  Git: '#E03C1B',
  GitHub: '#181717',
  'Visual Studio Code': '#0078D4',
  Postman: '#FF6C37',
  Vercel: '#000000',
  Netlify: '#008B80',
  Render: '#0E9F6E',
}

const CATEGORIES = [
  {
    id: 'programming',
    name: 'Programming & Core',
    skills: [
      { name: 'Java', icon: FaJava, note: 'Primary Focus • DSA & OOP' },
      { name: 'JavaScript', icon: SiJavascript, note: 'Web Development Primary' },
      { name: 'Data Structures & Algorithms', icon: SiLeetcode, note: 'DSA using Java' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: SiHtml5, note: 'Semantic Markup' },
      { name: 'CSS', icon: SiCss, note: 'Responsive Layouts' },
      { name: 'React', icon: SiReact, note: 'Fundamentals & Components' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, note: 'Utility-First Styling' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, note: 'V8 Server Runtime' },
      { name: 'Express.js', icon: SiExpress, note: 'RESTful Routing & APIs' },
      { name: 'MERN Stack', icon: Layers, note: 'Full-Stack Architecture' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, note: 'Document Database' },
      { name: 'SQL', icon: TbSql, note: 'Relational Queries & Schemas' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, note: 'Version Control' },
      { name: 'GitHub', icon: SiGithub, note: 'Code Collaboration' },
      { name: 'Visual Studio Code', icon: VscCode, note: 'Development IDE' },
      { name: 'Postman', icon: SiPostman, note: 'API Testing & Contracts' },
      { name: 'Vercel', icon: TbBrandVercel, note: 'Frontend Deployment' },
      { name: 'Netlify', icon: SiNetlify, note: 'Web Hosting' },
      { name: 'Render', icon: SiRender, note: 'Cloud Application Hosting' },
    ],
  },
]

const LEARNING_ICONS = {
  Python: SiPython,
  Flask: SiFlask,
  'Backend Fundamentals': Server,
  'Data Structures & Algorithms in Java': FaJava,
}

export default function Skills() {
  const { isLight } = useTheme()
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)

  const activeGroup = CATEGORIES.find((cat) => cat.id === activeCategory) || CATEGORIES[0]
  const brandColors = isLight ? BRAND_COLORS_LIGHT : BRAND_COLORS_DARK

  return (
    <section id="skills" className="py-14 sm:py-16 relative overflow-hidden">
      {/* Selective Technical Blueprint Grid */}
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
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core programming languages, frameworks, and tools applied in software and web development
          </p>
        </motion.div>

        {/* Bento Interactive Skills Shell */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-card p-4 sm:p-5 lg:p-6 relative overflow-hidden"
        >
          {/* Subtle Dotted Matrix Texture */}
          <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

          {/* Ambient Corner Glows */}
          <div className="absolute -top-12 -left-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-4 lg:gap-6 items-start">
            {/* Left Column: Category Tabs Selector */}
            <div className="w-full md:w-44 lg:w-48 shrink-0 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-[11px] sm:text-xs font-mono font-medium tracking-wide uppercase transition-all duration-200 whitespace-nowrap focus:outline-none cursor-pointer ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-cyan-sm font-semibold border border-primary/80 md:translate-x-1'
                        : 'bg-[var(--subtle-chip-bg)] hover:bg-card border border-border text-foreground/75 hover:text-primary hover:border-primary/40'
                    }`}
                  >
                    {category.name}
                  </button>
                )
              })}
            </div>

            {/* Right Column: Grid of Skill Cards */}
            <div className="flex-1 w-full min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2.5"
                >
                  {activeGroup.skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    const brandColor = brandColors[skill.name] || (isLight ? '#16A6AD' : '#2cc4c9')
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ duration: 0.18, delay: index * 0.03 }}
                        className="p-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:bg-card flex flex-col items-center justify-center gap-1 min-h-[76px] sm:min-h-[80px] transition-colors duration-200 hover:border-primary/50 hover:shadow-cyan-sm group cursor-default"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md bg-[var(--inner-box-bg)] border border-border group-hover:scale-105 transition-transform duration-200">
                          <IconComponent
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform"
                            style={{ color: brandColor }}
                          />
                        </div>
                        <span className="text-[11px] font-mono font-medium text-foreground/90 group-hover:text-primary transition-colors text-center truncate max-w-full">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono text-foreground/50 text-center truncate max-w-full">
                          {skill.note}
                        </span>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Section 7: Currently Learning Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="mt-5 glass-card p-4 sm:p-5 rounded-xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2.5 border-b border-border mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <h3 className="card-title text-sm sm:text-[15px]">
                {currentlyLearning.title}
              </h3>
            </div>
            <span className="text-[10.5px] font-mono text-primary flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Active Expansion</span>
            </span>
          </div>

          <p className="text-[11.5px] sm:text-xs text-foreground/75 leading-relaxed mb-3 max-w-2xl">
            {currentlyLearning.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {currentlyLearning.items.map((item) => {
              const IconComp = LEARNING_ICONS[item.name] || Sparkles
              return (
                <div
                  key={item.name}
                  className="p-2.5 rounded-lg border border-border bg-[var(--subtle-chip-bg)] hover:bg-card transition-all duration-200 flex flex-col justify-between gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-snug truncate">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-border">
                    <span className="text-[9.5px] text-foreground/60 leading-tight truncate">
                      {item.purpose}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium text-cyan bg-cyan/10 shrink-0">
                      {item.badge}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

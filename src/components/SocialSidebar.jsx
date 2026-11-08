import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Mail } from 'lucide-react'
import { socialLinks } from '../data/portfolio.js'

export default function SocialSidebar() {
  const socialItems = [
    { name: 'GitHub', icon: Github, href: socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, href: socialLinks.linkedin },
    { name: 'LeetCode', icon: Code2, href: socialLinks.leetcode },
    { name: 'Email', icon: Mail, href: `mailto:${socialLinks.email}` },
  ]

  return (
    <motion.aside
      aria-label="Social links sidebar"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="hidden md:block fixed left-3.5 lg:left-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
    >
      <div className="flex flex-col items-center space-y-5 pointer-events-auto">
        {socialItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="text-foreground/60 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(44,196,201,0.6)]"
            >
              <Icon size={20} />
            </a>
          )
        })}
        <div className="w-px h-20 bg-border" />
      </div>
    </motion.aside>
  )
}

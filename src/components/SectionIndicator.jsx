import { useEffect, useState } from 'react'

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      aria-label="Section quick navigation"
      className="fixed right-3.5 lg:right-4 top-20 sm:top-24 z-40 hidden md:flex flex-col items-center select-none pointer-events-none"
    >
      <div className="flex flex-col items-center space-y-2.5 pointer-events-auto">
        {sections.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive
                  ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(44,196,201,0.85)] ring-2 ring-primary/40'
                  : 'bg-foreground/25 hover:bg-primary/70 hover:scale-110'
              }`}
              aria-label={`Go to ${item.label} section`}
              aria-current={isActive ? 'true' : undefined}
              title={item.label}
            />
          )
        })}
      </div>
    </nav>
  )
}

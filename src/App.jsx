import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Preloader from './components/Preloader.jsx'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import ResumePage from './components/ResumePage.jsx'

function MainContent() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPath === '/resume') {
    return <ResumePage onBackToPortfolio={() => navigateTo('/')} />
  }

  return (
    <Layout onNavigateResume={() => navigateTo('/resume')}>
      <Hero />
      <About onNavigateResume={() => navigateTo('/resume')} />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </Layout>
  )
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/resume') {
      return false
    }
    return true
  })

  return (
    <ThemeProvider>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
      <MainContent />
    </ThemeProvider>
  )
}

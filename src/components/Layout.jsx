import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import SocialSidebar from './SocialSidebar.jsx'
import SectionIndicator from './SectionIndicator.jsx'
import EmailSidebar from './EmailSidebar.jsx'
import DeveloperBackground from './DeveloperBackground.jsx'
import AuroraBackground from './AuroraBackground.jsx'
import CursorGlow from './CursorGlow.jsx'
import ScrollProgress from './ScrollProgress.jsx'

/**
 * Global Layout Shell
 * Houses Navbar, Left Social Sidebar, Right Section Indicator, Right Email Sidebar,
 * ambient aurora, ambient canvas, and footer.
 */
export default function Layout({ children, onNavigateResume }) {
  return (
    <div id="top" className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased selection:bg-primary/25 selection:text-primary">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgress />

      {/* Ambient Aurora Gradient Lighting */}
      <AuroraBackground />

      {/* Living Ambient Canvas Background */}
      <DeveloperBackground />

      {/* Ambient Desktop Cursor Spotlight */}
      <CursorGlow />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-bold focus:text-primary-foreground focus:shadow-cyan-md"
      >
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar onNavigateResume={onNavigateResume} />

      {/* Fixed Left Social Sidebar */}
      <SocialSidebar />

      {/* Fixed Right Section Indicator */}
      <SectionIndicator />

      {/* Fixed Right Email Sidebar */}
      <EmailSidebar />

      {/* Primary Main Landmark */}
      <main id="main-content" className="relative z-10">
        {children}
      </main>

      {/* Site Footer */}
      <Footer onNavigateResume={onNavigateResume} />
    </div>
  )
}

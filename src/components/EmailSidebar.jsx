import { profile } from '../data/portfolio.js'

export default function EmailSidebar() {
  return (
    <aside
      aria-label="Email contact sidebar"
      className="hidden md:flex fixed right-3.5 lg:right-4 bottom-4 lg:bottom-6 z-30 flex-col items-center space-y-2 select-none pointer-events-none max-h-[500px]:hidden"
    >
      <a
        href={`mailto:${profile.email}`}
        className="pointer-events-auto text-foreground/50 hover:text-primary transition-all duration-300 font-mono text-[10px] tracking-wide hover:drop-shadow-[0_0_8px_rgba(44,196,201,0.6)] hover:-translate-y-0.5"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        title={`Send email to ${profile.email}`}
      >
        {profile.email}
      </a>
      <div className="w-px h-8 bg-border" />
    </aside>
  )
}


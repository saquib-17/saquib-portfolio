/**
 * Subtle Floating Geometric Elements
 * Delicate technical rings, crosshairs, and translucent accent particles
 * adding organic depth around illustrations without cluttering content.
 */
export default function FloatingGeometry({ variant = 'hero' }) {
  if (variant === 'about') {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-visible select-none"
      >
        {/* Top-Right Rotating Dashed Ring */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-dashed border-cyan/25 animate-spin-slow opacity-60" />

        {/* Bottom-Left Floating Technical Plus */}
        <div className="absolute -bottom-3 -left-3 font-mono text-cyan/35 text-xs font-bold animate-float-slow">
          +
        </div>

        {/* Top-Left Subtle Coral Accent Dot */}
        <div className="absolute top-1/4 -left-4 w-2 h-2 rounded-full bg-secondary/40 animate-pulse-subtle blur-[1px]" />

        {/* Bottom-Right Minimalist Square Wireframe */}
        <div className="absolute bottom-6 -right-5 w-6 h-6 border border-primary/20 rotate-12 animate-float-reverse rounded-sm opacity-50" />
      </div>
    )
  }

  // Default 'hero' variant
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-visible select-none"
    >
      {/* Upper-Right Large Subtle Orbit Ring */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-dashed border-cyan/20 animate-spin-slow opacity-50" />

      {/* Top-Left Technical Crosshair */}
      <div className="absolute top-2 -left-6 font-mono text-cyan/40 text-sm font-semibold animate-float-slow">
        +
      </div>

      {/* Center-Right Pulsing Micro-Node */}
      <div className="absolute top-1/2 -right-5 w-2.5 h-2.5 rounded-full bg-primary/35 animate-pulse-subtle blur-[1px]" />

      {/* Lower-Left Floating Coral Node */}
      <div className="absolute bottom-8 -left-4 w-2 h-2 rounded-full bg-secondary/40 animate-pulse-subtle blur-[1px]" />

      {/* Lower-Right Technical Wireframe Diamond */}
      <div className="absolute -bottom-4 right-10 w-7 h-7 border border-primary/25 rotate-45 animate-float-reverse rounded-sm opacity-60" />
    </div>
  )
}


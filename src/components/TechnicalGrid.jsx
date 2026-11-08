import { useTheme } from '../context/ThemeContext.jsx'

/**
 * Selective Technical Grid with Gentle Light Sweep
 * Renders an ultra-subtle blueprint/matrix grid behind selected sections
 * (Skills, Featured Projects) with a soft radial falloff and slow light sweep.
 */
export default function TechnicalGrid() {
  const { isLight } = useTheme()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
      style={{
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 85%)',
      }}
    >
      {/* Precision SVG Grid */}
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          opacity: isLight ? 0.04 : 0.05,
          color: isLight ? '#16a6ad' : '#2cc4c9',
        }}
      >
        <defs>
          <pattern
            id="tech-grid-pattern"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 44 0 L 0 0 0 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            {/* Subtle Node Point at Grid Intersections */}
            <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid-pattern)" />
      </svg>

      {/* Gentle Animated Light Sweep */}
      <div className="absolute inset-0 animate-grid-sweep pointer-events-none">
        <div
          className="w-full h-32"
          style={{
            background: isLight
              ? 'linear-gradient(180deg, transparent 0%, rgba(22, 166, 173, 0.04) 50%, transparent 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(44, 196, 201, 0.06) 50%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}


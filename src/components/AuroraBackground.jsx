import { useTheme } from '../context/ThemeContext.jsx'

/**
 * Global Animated Aurora Background
 * Pure CSS GPU-accelerated organic gradient blobs providing a continuous,
 * sophisticated ambient lighting atmosphere across the entire portfolio.
 */
export default function AuroraBackground() {
  const { isLight } = useTheme()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden transition-opacity duration-700"
    >
      {/* Cyan / Teal Primary Aurora Blob (Top-Left Drift) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[700px] h-[550px] sm:w-[900px] sm:h-[700px] rounded-full animate-aurora-1 will-change-transform"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse at center, rgba(22, 166, 173, 0.10) 0%, rgba(22, 166, 173, 0) 70%)'
            : 'radial-gradient(ellipse at center, rgba(44, 196, 201, 0.13) 0%, rgba(44, 196, 201, 0) 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Deep Blue / Teal Secondary Aurora Blob (Center-Right Drift) */}
      <div
        className="absolute top-[35%] -right-[15%] w-[600px] h-[650px] sm:w-[850px] sm:h-[750px] rounded-full animate-aurora-2 will-change-transform"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse at center, rgba(186, 215, 240, 0.18) 0%, rgba(186, 215, 240, 0) 70%)'
            : 'radial-gradient(ellipse at center, rgba(16, 75, 110, 0.16) 0%, rgba(16, 75, 110, 0) 70%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Subtle Coral Ambient Aurora Blob (Bottom-Center Warmth) */}
      <div
        className="absolute -bottom-[20%] left-[25%] w-[500px] h-[450px] sm:w-[700px] sm:h-[600px] rounded-full animate-aurora-3 will-change-transform"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse at center, rgba(241, 107, 131, 0.05) 0%, rgba(241, 107, 131, 0) 70%)'
            : 'radial-gradient(ellipse at center, rgba(255, 84, 121, 0.07) 0%, rgba(255, 84, 121, 0) 70%)',
          filter: 'blur(110px)',
        }}
      />
    </div>
  )
}


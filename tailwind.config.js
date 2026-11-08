/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Semantic HSL color variables
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        // Direct palette tokens matching premium dark teal theme
        teal: {
          darkest: '#09131a',
          darker: '#0d1b24',
          dark: '#12232f',
          DEFAULT: '#172b38',
          card: '#1c3444',
          cardHover: '#223e52',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(44, 196, 201, 0.35)',
        },
        cyan: {
          DEFAULT: '#2cc4c9',
          bright: '#00e5ff',
          glow: 'rgba(44, 196, 201, 0.35)',
        },
        coral: {
          DEFAULT: '#ff5479',
          bright: '#ff3366',
          glow: 'rgba(255, 84, 121, 0.35)',
        },
      },
      fontFamily: {
        heading: [
          '"Space Grotesk"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        sans: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        // Refined, soft, modern shadows
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'cyan-sm': '0 2px 10px rgba(44, 196, 201, 0.25)',
        'cyan-md': '0 4px 20px rgba(44, 196, 201, 0.35)',
        'cyan-lg': '0 8px 30px rgba(44, 196, 201, 0.45)',
        'coral-sm': '0 2px 10px rgba(255, 84, 121, 0.25)',
        'coral-md': '0 4px 20px rgba(255, 84, 121, 0.35)',
        'card-glass': '0 8px 24px -4px rgba(2, 10, 18, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
        'card-hover': '0 16px 36px -6px rgba(2, 10, 18, 0.65), 0 0 20px -2px rgba(44, 196, 201, 0.25)',
      },
    },
  },
  plugins: [],
}

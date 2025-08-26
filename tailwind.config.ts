import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0F',
        foreground: '#F8FAFC',
        purple: {
          500: '#7C3AED'
        }
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.35)'
      }
    }
  },
  plugins: []
}
export default config 
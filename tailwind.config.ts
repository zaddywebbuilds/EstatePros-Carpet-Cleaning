import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#102C33',
          light: '#1a3d47',
        },
        ink: '#162328',
        ivory: '#F7F5F0',
        mist: '#DCECE9',
        champagne: {
          DEFAULT: '#B5A185',
          dark: '#9a8870',
        },
        stone: '#687576',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        ui: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to top, rgba(16,44,51,0.82) 0%, rgba(22,35,40,0.45) 55%, rgba(22,35,40,0.20) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(16,44,51,0.10), 0 1px 6px rgba(16,44,51,0.06)',
        'card-hover': '0 12px 40px rgba(16,44,51,0.18), 0 2px 10px rgba(16,44,51,0.10)',
        'float': '0 8px 32px rgba(16,44,51,0.15)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config

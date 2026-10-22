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
        ink: '#1B2A2E',
        ivory: '#F7F5F0',
        sand: {
          DEFAULT: '#F2EDE4',
          deep: '#E8DFD1',
          warm: '#FAF6EF',
        },
        mist: '#DCECE9',
        champagne: {
          DEFAULT: '#B5A185',
          dark: '#9a8870',
        },
        stone: '#55615F',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        ui: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '28px',
        '5xl': '36px',
      },
      backgroundImage: {
        'gradient-sand': 'linear-gradient(170deg, #FAF6EF 0%, #F2EDE4 45%, #E9E2D6 100%)',
      },
      boxShadow: {
        'surface': '0 12px 36px rgba(92,78,58,0.14)',
        'surface-lg': '0 20px 56px rgba(92,78,58,0.18)',
        'panel': '0 30px 80px rgba(16,44,51,0.26), 0 80px 160px rgba(80,100,95,0.18)',
        'card': '0 12px 36px rgba(92,78,58,0.14)',
        'card-hover': '0 20px 56px rgba(92,78,58,0.20)',
        'float': '0 12px 36px rgba(92,78,58,0.16)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config

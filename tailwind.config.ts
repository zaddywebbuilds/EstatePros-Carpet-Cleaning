import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep evergreen carries the brand; brass is the single accent.
        forest: {
          DEFAULT: '#0E2A23',
          light: '#174136',
          deep: '#07190F',
          soft: '#1F5345',
        },
        brass: {
          DEFAULT: '#BE9B5E',
          dark: '#9A7A42',
          light: '#DCC69C',
        },
        ink: '#14201C',
        linen: '#FAF7F1',
        bone: {
          DEFAULT: '#F1EADC',
          deep: '#E3D8C4',
        },
        sage: {
          DEFAULT: '#D8E7DF',
          deep: '#BCD4C9',
        },
        stone: {
          DEFAULT: '#5B6A64',
          light: '#8A9792',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '28px',
        '5xl': '38px',
        '6xl': '48px',
      },
      boxShadow: {
        surface: '0 10px 34px rgba(20,48,40,0.10), 0 2px 8px rgba(20,48,40,0.05)',
        'surface-lg': '0 26px 70px rgba(20,48,40,0.16), 0 6px 18px rgba(20,48,40,0.07)',
        panel: '0 34px 90px rgba(7,25,15,0.30), 0 90px 170px rgba(14,42,35,0.20)',
        lift: '0 18px 48px rgba(20,48,40,0.15)',
        brass: '0 12px 32px rgba(190,155,94,0.32)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.06)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        drift: 'drift 24s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

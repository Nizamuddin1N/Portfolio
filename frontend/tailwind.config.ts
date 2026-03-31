import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        mono:    ['var(--font-mono)'],
      },
      colors: {
        green:  '#00FF87',
        green2: '#00CC6A',
        amber:  '#FFB800',
        red:    '#FF4545',
        blue:   '#4D9FFF',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-left':  'fadeLeft 0.7s ease forwards',
        'orb-float':  'orbFloat 8s ease-in-out infinite',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'scroll-line':'scrollLine 2s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        orbFloat: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%':     { transform: 'translateY(-30px) scale(1.04)' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(0,255,135,0.4)' },
          '50%':     { boxShadow: '0 0 0 8px rgba(0,255,135,0)' },
        },
        scrollLine: {
          '0%,100%': { height: '60px', opacity: '1' },
          '50%':     { height: '80px', opacity: '0.5' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
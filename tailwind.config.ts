import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sp': '0 3px 12px 0 rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        yellofade: {
          '0%': { backgroundColor: 'yellow' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        yellofade: 'yellofade 3s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config

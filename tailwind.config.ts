import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-styrene-a)'],
        sans: ['var(--font-styrene-b)', ...fontFamily.sans],
      },
      colors: {
        pink: {
          steady: 'rgb(203, 113, 177)',
        },
        green: {
          steady: 'rgb(38, 166, 87)',
        },
        purple: {
          steady: 'rgb(143, 148, 239)',
        },
        beige: 'rgb(245, 236, 203)',
        dark: 'rgba(30, 41, 59, 0.9)',
      },
      borderRadius: {
        xl: '120px',
      },
    },
  },
  plugins: [],
} satisfies Config

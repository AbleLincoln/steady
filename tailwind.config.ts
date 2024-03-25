import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'mobile-only': { max: '768px' },
      },
      fontFamily: {
        display: ['var(--font-styrene-a)'],
        sans: ['var(--font-styrene-b)', ...fontFamily.sans],
      },
      colors: {
        steady: {
          pink: 'rgb(203, 113, 177)', // cb71b2
          green: 'rgb(38, 166, 87)',
          purple: 'rgb(143, 148, 239)',
        },
        cream: '#fffcf6',
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
        steady: '80px',
      },
    },
  },
  plugins: [],
} satisfies Config

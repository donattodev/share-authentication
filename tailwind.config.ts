import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    colors: {
      gray: {
        950: '#0D0D0D',
        800: '#202024',
        700: '#7C7C8A',
        50: '#E1E1E6',
      },

      primary: {
        950: '#5C7309',
        900: '#85A60F',
        500: '#C2F216',
        300: '#EBF21B',
      },

      white: '#fff',
      transparent: 'transparent',
    },

    fontFamily: {
      sans: 'var(--font-roboto)',
      title: 'var(--font-bai)',
    },
    extend: {},
  },
  plugins: [],
}
export default config

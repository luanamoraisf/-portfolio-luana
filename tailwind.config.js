/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '2rem',
      base: '3.3rem',
      xl: '4.2rem',
      '2xl': '4.5rem',
    },
    screens: {
      sm: '200px',
      md: '700px',
      lg: '1400px',
      xl: '2000px'

    },
    extend: {}
  },
  plugins: []
}

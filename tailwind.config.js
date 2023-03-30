/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: { 'layout': 'auto 1fr auto' },
      gridTemplateColumns: { 'layout-app': 'md:minmax(12rem, 1fr) 4fr' }
    },
  },
  plugins: [],
  darkMode: 'class',
}


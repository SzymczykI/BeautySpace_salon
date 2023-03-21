/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'gold': "#E2BB66",
      'back': '#fffbf7',
      'gray-dark': '#273444',
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      'black': '#171717',
      'trans': '#FFFFFF17',
      'white': '#FFFFFF',
    },
    container: {
      margin: '0rem',
    },
    extend: {
      fontFamily: {
        espoir: ["espoir", 'sans-serif']
      }
    },
  },
  plugins: [],
}

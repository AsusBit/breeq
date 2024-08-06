/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      'breeq-blue': "#243263",
      'breeq-lighter': '#4966C9',
      'white': '#FFF',
    },
    fontFamily: {
      'tajawal': 'Tajawal',
      'cairo': 'Cairo',
    }
  },
  plugins: [],
}


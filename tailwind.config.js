/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rampart: ['Rampart One', 'cursive'],
      },
    },
  },
  plugins: [],
};

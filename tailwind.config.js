/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'anti-flash-white': '#EBEBEB',
        silver: '#C0C0C0',
        'polynesian-blue': '#004E98',
        pumpkin: '#FF6700',
        'pumpkin-hover': '#FF8633',
      },
    },
  },
  plugins: [],
}

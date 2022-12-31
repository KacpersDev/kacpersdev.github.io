/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./images/**/*.{png, jpg}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pay: '#f6f9fc',
      },
      height: {
        '128': '32rem',
      },
    },
    fontFamily: {
      'custom': ['poppins', 'poppins', 'sans-serif'],
    },
    backgroundImage: {
      'menu': "url('/images/menu.svg')",
    },
  },
  plugins: [],
}
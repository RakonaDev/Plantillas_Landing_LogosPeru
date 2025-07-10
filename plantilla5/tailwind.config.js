/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3674B5',
        secondary: '#578FCA',
        terciary: '#F5F0CD',
        quaternary: '#FADA7A'
      }
    },
  },
  plugins: [],
}


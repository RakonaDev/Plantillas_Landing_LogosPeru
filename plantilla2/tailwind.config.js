/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#264F73',
        secondary: '#078C03',
        terciary: '#2E5945',
        quaternary: '#D96236',
        quinary: '#0D0D0D'
      }
    },
  },
  plugins: [],
}


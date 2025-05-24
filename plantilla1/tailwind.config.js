/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BF1717',
        secondary: '#F21616',
        terciary: '#F2F1F0',
        quaternary: '#F2A007',
        quinary: '#F2CB05',
      },
      fontFamily: {
        'ConstellationTLPro-Bold': ['"ConstellationTLPro-Bold"', '"sans-serif"'],
      }
    },
  },
  plugins: [],
}


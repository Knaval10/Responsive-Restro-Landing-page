/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{
        xs:'321px',
        xl:'490px',
        sl:'480px',
      },
      colors:{
        primarybg:'aqua',
        black1:'rgba(0, 0, 0, 0.89)'
      }
    },
  },
  plugins: [],
}


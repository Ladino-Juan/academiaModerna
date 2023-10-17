/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ 'Poppins', "sans-serif"],
      },
      colors: {
        rojo: "#F62A20",
        blanco: "#F5F5F7",
      },
     
    },
  },
  plugins: [],
}


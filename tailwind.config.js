/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}","./**/*.html","./**/*.js"],
  theme: {
    extend: {
     
      fontFamily: {
        'headers-swiss': ["neue-haas-grotesk-display", "sans-serif"],
      }
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Nunito  : 'Nunito Sans'
      },
      colors: {
        back : '#0f1016',
        primary : '#0d1934'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkest: '#12131A',
        darker: '#15161C',
        dark: '#1F2029',
        secondary: '#736E6C',
        light: '#B4ADAB',
        accent: '#F26C4F',
        'accent-lighter': '#FFA997',
        'accent-lighest': '#FFCEC3',
        input: 'CEC7C3',
      },
      backgroundImage:{
        hero: "url('/src/assets/bg-image-modified.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        'roboto-slab': ["Roboto Slab", "sans-serif"]
      },
      animation:{
        show: "show .3s"
      },
      keyframes:{
        show:{
          "0%": {opacity: "0%"},
          "100%": {opacity: "100%"}
        }
      }
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        //  , 'Gilroy', 'Inter', 'sans-serif'
        'inter': ['Inter', "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'roobert':["Roobert","sans-serif"],
      },
      colors: {
        primaryblue: "#",
        primaryWhite: "#F9F9F9",
        audioblue: "#081494",
        mezechBlue: "#272262",
        lighterBlue:"#3DB0FF"
      },
      backgroundImage: {
        'hero-Image': "url('/src/assets/images/girlSmiling.png')",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        bgMain:"#428bca1a",
        main:"#428bca",
        Gray:"#4f4f51",
        Border:"#dcdcdc",
        secondary:"#fc5a5a"
      }
    },
  },
  plugins: [],
}


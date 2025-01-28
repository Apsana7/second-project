/** @type {import('tailwindcss').Config} */


export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
  theme: {
    extend: {
      colors:{
        hora:"#C8A97E"
      },
      fontFamily:{
        cursive: ["Clicker Script"]
      }
      
    },
  },
  plugins: [],
}


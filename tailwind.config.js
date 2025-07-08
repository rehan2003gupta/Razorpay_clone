/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ['Mullish', 'sans-serif'],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
       backgroundImage: {
        'hero-pattern': "url('/images/background-removerbg-preview.png')",
      },
      
      screens: {
        'custom': '1110px',
        'custom2': '960px',
        'custom3': '750px',
        'custom4': '1150px',
        'custom5': '685px',
      },
    },
  },
  plugins: [],
}


module.exports = {
  purge: ["pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        architects: ["Architects Daughter", "sans-serif"],
      },
      borderRadius: {
        circle: "50%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

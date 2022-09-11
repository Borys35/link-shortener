/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: colors.slate,
        primary: {
          light: "#C4D4FA",
          hover: "#AEC3FB",
          DEFAULT: "#114FFF",
        },
        secondary: {
          light: "#F4D1D4",
          hover: "#F5BFC2",
          DEFAULT: "#FF4042",
        },
      },
      fontFamily: {
        sans: "Montserrat",
      },
    },
  },
  plugins: [],
};

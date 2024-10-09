const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: "#FF9357",
          dark: "#141414",
          grey: "#A8A8A8",
        },
      },
      spacing: {
        7.5: "30px",
        12.5: "50px",
        25: "100px",
        41: "164px",
        50: "200px"
      },
      maxWidth: {
        1130: "1130px",
      },
      borderRadius: {
        20: "20px",
      },
      fontSize: {
        28: "28px",
      },
    },
  },
  plugins: [],
};

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
      },
      maxWidth: {
        1130: '1130px'
      }
    },
  },
  plugins: [],
};

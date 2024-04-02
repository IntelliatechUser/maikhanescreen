/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    textColor: {
      black: "#0F0F0F",
      input: "#454545",
      secondary: "#828081",
      mediumText: "#444444",
      "yellow-dark": "#FF9804",
      "gray-light": "#242021",
      "acc-title": "#3C3C3C",
      "acc-list": "#FF0000",
      white: "#FFFFFF",
      red:"#FF0000"
    },

    fontFamily: {
      sans: ["Poppins"],
      serif: ["Poppins"],
      poppins: ["Poppins"],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    colors: {
      white: "#FFFFFF",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#000000AD",
      gray: "#8492a6",
      black: "#0F0F0F",
      "yellow-dark": "#FF9804",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "1xl": "2rem",
        "2xl": "6px",
      },
      borderColor: {
        gray: "#707070",
        "yellow-dark": "#FF9804",
      },

      boxShadow: {
        "1xl": "0px 0px 5px 3px #FF980459",
        "2xl": "0px 0px 5px 3px #707070",
      },
      dropShadow: {
        "1xl": "0px 5px 2px #FF9804 ",
      },
      fontSize: {
        "1xl": ".87vw",
      },
    },
  },
};

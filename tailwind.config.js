/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { min: "600px", max: "1250px" },
      lg: { min: "1250px" },
    },
    extend: {
      colors: {
        maincolor: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#242424",
        },
        line: "#e6e7e8",
        hanarogreen: "#5ec65e",
        disabled: "#9e9e9E",
        gitbgvar: "#2d333b",
        bgmain: "#fafafb",
        bgcolor: "#242424",
        menuactive: "#f1f1fa",
        menuhover: "#f1f1fa",
        inputfocus: "#5e5ec6",
        buttonclick: "#4341bb",
      },
      boxShadow: {
        dim: " 0 0 0 200vmax rgba(0, 0, 0, .3)",
      },
      fontFamily: {
        // sans: ["Pretendard", "sans-serif"],
      },
      transitionProperty: {
        navigator: "transform, width",
      },
    },
  },
  plugins: [],
};

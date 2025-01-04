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
        line: "#e6e7e8",
        disabled: "#9e9e9E",
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
      transitionProperty: {
        navigator: "transform, width",
      },
    },
  },
  plugins: [],
};

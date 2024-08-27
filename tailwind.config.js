/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#945cff",
        secondary: "#6bfffc",
        move: "#5e33ff",
        cyan: "#33a7bd",
        darkSec: "#26344f",
        darkest: "#030205",
        lightest: "#f7f7f7",
        gray: "#1e2122",
        canUse: "#26344f",
        dBlack: "#0c1524",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)", opacity: "0" },
          // "50%": { transform: "translateX()" },
          "100%": { transform: "translateX(10px)", opacity: "1" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out ",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};

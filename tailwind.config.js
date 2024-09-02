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
          "100%": { transform: "translateX(10px)", opacity: "1" },
        },
        gradientX: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
     
          'rotate-x': {
            '0%': { transform: 'rotateY(0deg)' },
            '50%': { transform: 'rotateY(420deg)' },
            '100%': { transform: 'rotateY(360deg)' },
          },
        
      },
      animation: {
        rotateY: 'rotate-x 3s ease-in-out ',
        moveRight: "moveRight 1s ease-in-out",
        gradientX: "gradientX 5s ease infinite",
      },
      backgroundSize: {
        '200%': '200%',
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      utilities: {
        blur: ['blur'],
      }, // Add this section
    },
  },
  plugins: [],
};

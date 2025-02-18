/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-right-left": "move 1s infinite ease-in-out",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        text: "#0d0208",
        background: "#fdf1f8",
        primary: "#dc2890",
        secondary: "#ebb784",
        accent: "#e5cf5f",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  daisyui: {
    themes: ["emerald", "dark", "corporate"],
  },
};

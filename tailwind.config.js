/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["squidgamefont", "sans-serif"],
      },
      backgroundImage: {
        "squid-game-gradient":
          "linear-gradient(45deg, #f42a46, #1f8247, #2a2a2a)",
      },
    },
  },
  plugins: [],
};

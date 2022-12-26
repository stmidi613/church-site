/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffeeb3",
        black: "#051014",
        gray: "#817f75",
        teal: "#92dce5",
        darkgold: "#f1c17a",
      },
      backgroundImage: {
        study: "url('./images/studying.jpg')",
      },
    },
  },
  plugins: [],
};

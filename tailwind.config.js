/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffeeb3",
        black: "#051014",
        gray: "#817f75",
        lightgray: "#f5f5f5",
        teal: "#92dce5",
        darkgold: "#f1c17a",
      },
      backgroundImage: {
        study: "url('./images/studying.jpg')",
        studyhelp: "url('./images/studyhelp.jpg')",
        earthheart: "url('./images/EarthHeart.jpg')",
        handheart: "url('./images/PaintedHands.jpg')",
        contact: "url('./images/contact.jpg')",
        prayer: "url('./images/prayer.jpg')"
      },
    },
  },
  plugins: [],
};

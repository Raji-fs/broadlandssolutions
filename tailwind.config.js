/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#3071bd",
        secondaryRed: "#fb4b40",
        secondaryBlue:  "#243567"
      },
      backgroundImage: {
        linearGradientBlue: "linear-gradient(240deg,#2392d3 90%,#fff 10%)",
        linearGradientBlack: "linear-gradient(240deg,#000 90%,#2392d3 10%)"
      },
    },
  },
  plugins: [],
};

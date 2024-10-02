
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {},
    colors: {
      "good":     "#bcec30",
      "well":     "#c6ff00",
      "work":     "#00c1ff",
      "bad":      "#db0030",
      "white":    "#ffffff",
      "back":     "#fafafa",
      "light-bg": "#f7f7f7",
      "dark":     "#e9eced",
      "light-tx": "#999999",
      "black":    "#000000",
    },
    fontFamily: {
      "sans": ['"Roboto"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 0 67px -12px rgba(0, 0, 0, 0.13)",
      },
    },
  },
  plugins: [],
}

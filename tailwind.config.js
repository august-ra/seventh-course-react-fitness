
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
      "neutral":  "#d0cece",
      "bad":      "#db0030",
      "white":    "#ffffff",
      "back":     "#fafafa",
      "light-bg": "#f7f7f7",
      "dark":     "#e9eced",
      "light-tx": "#999999",
      "black":    "#000000",
      "yoga":       "#ffc700",
      "stretching": "#2491d2",
      "zumba":      "#f7a012",
      "aerobics":   "#ff7e65",
      "body-flex":  "#7d458c",
      "blocked": "rgba(0,0,0,0.2)",
    },
    fontFamily: {
      "sans": ['"Roboto"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 0 67px -12px rgba(0, 0, 0, 0.13)",
      },
      cursor: {
        "arrow": "url(/img/arrow.svg), pointer",
      },
      height: {
        "13/2": "26px",
        "13": "52px",
      },
      padding: {
        "4.5": "18px",
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [],
}

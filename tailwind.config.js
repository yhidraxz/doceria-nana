import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffd9d9",
        "base-200": "#b29d66",
        "base-300": "#1B0E18",
        primary: "#7A6F9B",
        accent: "#C6DEA6",
        "base-light-100": "#c55555",
        "base-light-200": "#D4CDF4",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/heroImage.png')",
      },
    },
  },
  plugins: [daisyui],
};

//#1B0E18

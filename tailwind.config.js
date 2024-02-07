/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anaupan: ["Anaupan", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        space_grotesk: ["Space Grotesk", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};


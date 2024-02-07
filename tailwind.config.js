/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        anaupan: ["Anaupan", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        space_grotesk: ["Space Grotesk", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        base: "#24262C",
        accent: "#539BF5",
        accent_glow: "rgba(83, 155, 245, 0.2)",
        accent_hover: "#ECECEC",
        accent_glow_hover: "#539BF5",
        idle: "#2C2E36",
        normal: "#ECECEC",
        hint: "#ABABAB",
      },
    },
  },
  plugins: [],
};

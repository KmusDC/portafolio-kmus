/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← activa dark mode por clase en <html>
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
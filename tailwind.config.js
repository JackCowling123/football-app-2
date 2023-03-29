/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/App.js",
    "./src/index.js",
    "./src/Navbar.js",
    "./src/Pitch.js",
    "./src/ShirtHoopSvg.js",
    "./src/ShirtPlainSvg.js",
    "./src/ShirtSleeveSvg.js",
    "./src/ShirtStripeSvg.js",
    "./src/ShirtSvg.js",
  ],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [],
}

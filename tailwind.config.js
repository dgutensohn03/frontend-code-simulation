/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        brandDark: "var(--brand-dark)",
      },
    },
  },
  plugins: [],
};

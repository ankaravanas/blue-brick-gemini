/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        cream: "#FAF8F5",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'savor': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      boxShadow: {
        'card': '3px 4px 26px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'circle-progress': 'dash 1s'
      },
      keyframes: {
        dash: {
          '0%': {'stroke-dashoffset': '100'},
        }
      }
    },
  },
  plugins: [],
}

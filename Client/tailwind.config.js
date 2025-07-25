// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // tailwind.config.js
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }

  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(0px, -25px) scale(1.1)",
          },
          "50%": {
            transform: "translate(-10px, -20px) scale(1.05)",
          },
          "75%": {
            transform: "translate(-10px, 10px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          }
        },
      },
      animation: {
        blob: "blob 4s infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
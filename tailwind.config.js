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
          "15%": {
            transform: "translate(10px, -20px) scale(1.05)",
          },
          "30%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "45%": {
            transform: "translate(10px, -20px) scale(1.05)",
          },
          "60%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "75%": {
            transform: "translate(-10px, 10px) scale(0.95)",
          },
          "90%": {
            transform: "translate(0, 0) scale(1)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
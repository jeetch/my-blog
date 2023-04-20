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
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.5)",
          },
          "50%": {
            transform: "scale(0.8)",
          },
          "75%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          }
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
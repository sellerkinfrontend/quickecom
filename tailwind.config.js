/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-color': '#FEFAE7',
        "custom-color-1":'#F95700',
        'custom-color-2':'#FFFFFF',
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#10233F",
          green: "#16A36A",
          light: "#F5F8FC",
        },
      },
    },
  },
  plugins: [],
};

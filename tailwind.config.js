/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grayish": "#f5f4f1",
        "sky-blue": "#d4eaf7",
        "light-blue": "#b6ccd8",
        "grayish-brown": "#cccbc8"
      }
    },
  },
  plugins: [],
}


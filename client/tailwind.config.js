/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#018A8C",  
        "main-color-sec":"#14803C",
        "main-color-light":"#BAF6D0",
        "main-color-lightDark":"#5DEC91",
        "main-color-dark":"#111827",
        "sec-color": "#FFE535", 
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"
],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
        "main-color": "#018A8C",  
        "main-color-sec":"#14803C",
        "main-color-light":"#BAF6D0",
        "main-color-lightDark":"#5DEC91",
        "main-color-dark":"#111827",
        "sec-color": "#F7D700",
        "sec-color-h": "#F7D700"
      },
      height: {
        "70vh": "70vh",
      },
      width: {
        "42rem": "42rem",
        "30rem": "30rem",
      },
    },
  },
  plugins: [],
};

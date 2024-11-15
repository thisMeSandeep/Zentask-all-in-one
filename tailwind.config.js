/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#F96332",
        "navitem-hover": "#FA7347",
        "navitem-color": "#FACAE1",
        "primary": "rgba(0,0,0,0.55)",
        "secondary": "rgba(0,0,0,0.5)",
        "dark-primary": "#171B2C",
        "dark-secondary": "#111219",
        "dark-text-primary": "#757F99",
        "dark-text-secondary": "#BFC9E0",
      },
      boxShadow: {
        "custom-dark":
          "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
        "custom-light":
          "-4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%)",
      },
      backgroundColor: {
        "dark-bg": "#212121",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

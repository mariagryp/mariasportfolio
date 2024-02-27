/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: "#393C4A",
        secondary: "#1C1D24",
        tertiary: "#005F5F",

        dark: "#373943",
        light: "#fffaf0",
        accent: {
          DEFAULT: "#FE0188",
          hover: "#fe67b8",
        },
        paragraph: "#adb2ba",
      },
      size: {
        28: "7rem",
        80: "20rem",
        96: "24rem",
      },
      backgroundMode: {},
    },
  },
  plugins: [],
};

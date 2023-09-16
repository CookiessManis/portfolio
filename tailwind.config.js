/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        primary: ["Poppins,sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

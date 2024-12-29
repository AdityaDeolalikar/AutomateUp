const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        servicesShadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
      },
      colors: {
        customColor: '#040f1f', // You can name this whatever you like
        bgColor: "edeef2"
      },
      boxShadow: {
        'light-rainbow': '0 4px 5px -1px rgba(255, 0, 0, 0.2), 0 2px 4px -1px rgba(255, 165, 0, 0.2), 0 4px 6px -2px rgba(255, 255, 0, 0.2), 0 8px 10px -2px rgba(0, 128, 0, 0.2), 0 12px 14px -3px rgba(0, 0, 255, 0.2), 0 16px 20px -4px rgba(75, 0, 130, 0.2), 0 20px 30px -5px rgba(238, 130, 238, 0.2)',
      },
      borderRadius:{
        customRadius: "10% 10% 10% 10% / 0% 10% 10% 0%"
      }
    },
  },
  plugins: [],
});

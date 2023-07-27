/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "background-color": "#0f0e17",
        "button-color": "#ff8906",
        "title-color": "#fffffe",
        "white-primary": "#fffffe",
        highlighted: "#e53170",
        "color-black": "#000000",
      },
    },
  },
  plugins: ["tailwindcss", "autoprefixer"],
};

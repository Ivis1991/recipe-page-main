/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      youngserif: ["Young Serif", "serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "320px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        Nutmeg: "hsl(14, 45%, 36%)",
        "Dark-Raspberry": "hsl(332, 51%, 32%)",
        White: "hsl(0, 0%, 100%)",
        "Rose-White": "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        "Light-Grey": "hsl(30, 18%, 87%)",
        "Wenge-Brown": "hsl(30, 10%, 34%)",
        "Dark-Charcoal": "hsl(24, 5%, 18%)",
      },
    },
  },
  plugins: [],
};

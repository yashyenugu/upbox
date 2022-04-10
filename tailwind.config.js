const { colors, backgroundImage, backgroundPosition } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");
// TODO: add custom sizes
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
      display: ["'DM Serif Display'"],
      text: ["'DM Serif Text'"],
    },
    
    extend: {
      letterSpacing: {
        'logo-lg': '0.28em',
        'medium': '0.12em'
      },
      colors: {
        'sky-blue': '#F5F8FF',
        'rose-pink': '#EF8094',
        'gray-accent': '#C4C4C4',
      },
      backgroundPosition: {
        'pricing': '50% 20%',
      }
    }
    
  },
  plugins: [],
};

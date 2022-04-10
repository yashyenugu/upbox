const defaultTheme = require("tailwindcss/defaultTheme");
// TODO: add custom sizes
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
    },
    
    extend: {
      letterSpacing: {
        'logo-lg': '0.28em'
      },
      colors: {
        'sky-blue': '#F5F8FF',
      }
    }
  },
  plugins: [],
};

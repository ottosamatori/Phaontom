const defaultColors = require('tailwindcss/colors');
const theme = require('./src/themes/basic');

module.exports = {
  important: true,
  content: [
    './app/**/*.{html,js,ts,jsx,tsx}',
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        ...theme.colors,
      },
      fontSize: {
        ...theme.fontSize,
      },
    },
  },
  plugins: [],
};

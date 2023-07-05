/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Melodrama', ...defaultTheme.fontFamily.serif],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        wall: 'url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=826&t=st=1688576884~exp=1688577484~hmac=c22f9a44aa940dd57af832ff6810bf7901f1066924c5b7e711c8cab2400ccdc1")',
      },
    },
  },
  plugins: [],
};

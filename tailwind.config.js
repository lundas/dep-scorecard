/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      'dk-blue': '#274C77',
      'mid-blue': '#6096BA',
      'lt-blue': '#A3CEF1',
      gray: '#8B8C89',
      'lt-gray': '#E7ECEF',
      charcoal: '#212529',
    },
    fontFamily: {
      diph: ['Diphylleia', 'serif'],
      ral: ['Raleway', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        even: '0 0 3px 3px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};

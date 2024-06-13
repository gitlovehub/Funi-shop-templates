/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      height: {
        '600': '600px',
      },
      maxWidth: {
        'screen-400': '400px', // Define max-width for screen size 400px
      },
      maxHeight: {
        '400': '400px',
        '500': '500px',
      },
      fontSize: {
        'body': '1rem',
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
  plugins: [],
}
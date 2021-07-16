module.exports = {
  purge: [
    './resources/**/*.blade.php',

    './resources/**/*.js',

    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          'default': '#5CDAC5',
          'default-light': '#4dbd9c'
        },
        dark: {
          'default': '#313131'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./components/Avatar.js','./pages/index.js', './components/**/*.js','./pages/**/*.{js, jsx}', '.components/SearchResults.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

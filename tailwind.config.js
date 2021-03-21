const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.warmGray,
      blue: colors.lightBlue
    },
    extend: {}
  },
  variants: {},
  plugins: []
}

import { colors, fontSizes, fontWeights, fonts } from '@controle-devs-ui/tokens'

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {},
    fontSize: { ...fontSizes },
    fontWeight: { ...fontWeights },
    fontFamily: { ...fonts },
    colors: { ...colors },
  },
  variants: {},
  plugins: [],
};
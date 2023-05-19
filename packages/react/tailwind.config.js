import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
} from "@controle-devs-ui/tokens";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: { ...fontSizes },
      fontWeight: { ...fontWeights },
      fontFamily: { ...fonts },
      colors: {
        gray: colors.gray,
        yellow: colors.yellow,
        purple: colors.purple,
        blue: colors.blue,
        red: colors.red,
        neutral: colors.neutral,
        primary: {
          purple: colors.purple[800],
        },
        secondary: {
          purple: colors.purple[700],
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

import { css, defaultTheme } from "@xstyled/styled-components"

export const theme = {
  initialColorModeName: "light",
  ...defaultTheme,
  global: css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap");

    html,
    body {
      transition: 300ms ease-in color, 300ms ease-in background-color;
      margin: 0;
      font-family: "Montserrat", sans-serif;
      background-color: background;
      color: text;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    button:focus {
      outline: none;
    }
  `,
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    maxWidth: 1600,
  },

  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  fonts: ["Montserrat, sans-serif"],
  fontSizes: [
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    34,
    38,
    40,
    44,
    48,
    50,
    54,
    58,
    60,
  ],
  space: [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    130,
    140,
    150,
    160,
    170,
    180,
    190,
    200,
  ],
  zIndices: {
    header: 500,
    over: 9999,
  },
  ease: {
    inBack: [0.6, -0.28, 0.735, 0.045],
    inCirc: [0.6, 0.04, 0.98, 0.335],
    inExpo: [0.95, 0.05, 0.795, 0.035],
    inSine: [0.47, 0.0, 0.745, 0.715],
    inQuint: [0.755, 0.05, 0.855, 0.06],
    inQuart: [0.895, 0.03, 0.685, 0.22],
    inCubic: [0.55, 0.055, 0.675, 0.19],
    inQuad: [0.55, 0.085, 0.68, 0.53],
    outBack: [0.175, 0.885, 0.32, 1.275],
    outCirc: [0.075, 0.82, 0.165, 1.0],
    outExpo: [0.19, 1.0, 0.22, 1.0],
    outSine: [0.39, 0.575, 0.565, 1.0],
    outQuint: [0.23, 1.0, 0.32, 1.0],
    outQuart: [0.165, 0.84, 0.44, 1.0],
    outCubic: [0.215, 0.61, 0.355, 1.0],
    outQuad: [0.25, 0.46, 0.45, 0.94],
    inOutBack: [0.68, -0.55, 0.265, 1.55],
    inOutCirc: [0.785, 0.135, 0.15, 0.86],
    inOutExpo: [1.0, 0.0, 0.0, 1.0],
    inOutSine: [0.445, 0.05, 0.55, 0.95],
    inOutQuint: [0.86, 0.0, 0.07, 1.0],
    inOutQuart: [0.77, 0.0, 0.175, 1.0],
    inOutCubic: [0.645, 0.045, 0.355, 1.0],
    inOutQuad: [0.455, 0.03, 0.515, 0.955],
  },
}

import { css, defaultTheme } from "@xstyled/styled-components"

export const theme = {
  initialColorModeName: "light",
  ...defaultTheme,
  global: css`
    html,
    body {
      transition: 300ms ease-in color, 300ms ease-in background-color;
      margin: 0;
      font-family: "Montserrat", DejaVu Sans, Verdana, sans‑serif;
      background-color: background;
      color: text;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overscroll-behavior-y: none;
      overflow: overlay;
      scroll-behavior: smooth;
      scrollbar-gutter: always both force;
    }

    button:focus {
      outline: none;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
      box-shadow: none;
      -webkit-border-radius: 0px;
      border-radius: 0px;
      background: var(--xstyled-colors-barr);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 0px;
      border-radius: 0px;
      background: var(--xstyled-colors-scroll);
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: var(--xstyled-colors-scroll);
    }

    @-webkit-keyframes spin /* Safari and Chrome */ {
      from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes spin {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    .spin {
      -webkit-animation: spin 2s linear infinite;
      -moz-animation: spin 2s linear infinite;
      -ms-animation: spin 2s linear infinite;
      -o-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }

    .MuiSvgIcon-root {
      fill: currentColor;
      width: 1em;
      height: 1em;
      display: inline-block;
      font-size: 1.5rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
    }

    .filter {
      filter: none;
      transition: filter 0.25s linear;
    }
    .filter.hueRotate {
      filter: hue-rotate(107deg);
    }
    .hero-mobile {
      height: 100%;
      @media (min-width: 25.74rem) {
        display: none !important;
      }
    }
    .hero-desktop {
      display: none;
      @media (min-width: 25.75rem) {
        display: block;
      }
    }
    .material-icons {
      font-family: "Material Icons";
      font-weight: normal;
      font-style: normal;
      font-size: 24px; /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: "liga";
    }

    #container {
      height: 400px;
      width: 1200px;
      position: relative;
      overflow: hidden;
      transform: scale(1.6);
    }

    #container #dino {
      height: 90px;
      width: 90px;
      position: absolute;
      bottom: 28px;
      left: 20px;
    }

    #container #dino img {
      height: 90px;
      width: 90px;
    }

    .dinoActive {
      animation: animateDino 0.65s 1 linear;
    }
    .roadActive {
      animation: roadAnimate 10s linear infinite;
    }
    .cloudActive {
      animation: cloudAnimate 20s linear infinite;
    }

    @keyframes animateDino {
      0% {
        bottom: 28px;
        transform: skewX(-10deg);
      }
      20% {
        bottom: 160px;
        transform: skewX(-5deg);
      }
      50% {
        transform: translateY(-50%) skewX(0deg);
        border-radius: 50%;
      }
      85% {
        bottom: 160px;
        transform: skewX(5deg);
      }
      100% {
        transform: skewX(15deg);
        bottom: 28px;
      }
    }

    #container #block {
      height: 125px;
      width: 125px;
      position: absolute;
      bottom: 5px;
      right: -20px;
    }

    #container #block img {
      height: 125px;
      width: 125px;
    }

    .blockActive {
      animation: blockAnimate 3s linear infinite;
    }

    @keyframes blockAnimate {
      0% {
        right: -125px;
      }

      100% {
        right: 100%;
      }
    }

    #container #road {
      height: 400px;
      width: 4000px;
      position: absolute;
      bottom: 0;
    }

    #container #road img {
      height: 400px;
      width: 4000px;
      position: absolute;
      left: 0;
      animation: none;
    }

    @keyframes roadAnimate {
      0% {
        left: 0;
      }

      100% {
        left: -2800px;
      }
    }

    #container {
      #cloud1 img {
        left: -1000px;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 0px;
      }
      #cloud2 img {
        left: -1000px;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 82px;
        animation-delay: 1s;
      }
      #cloud3 img {
        left: -1000px;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 50px;
        animation-delay: 2s;
      }
      #cloud4 img {
        left: -1000px;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 28px;
        animation-delay: 3s;
      }
      #cloud5 img {
        left: -1000px;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 125px;
        animation-delay: 4s;
      }
    }
    .claudsActive img {
      animation: cloudAnimate 20s linear infinite;
      filter: drop-shadow(37px 353px 10px black);
    }

    @keyframes cloudAnimate {
      0% {
        transform: translateY(30px);
        left: -1000px;
      }

      50% {
        transform: translateY(0px);
      }

      100% {
        transform: translateY(30px);
        left: 100%;
      }
    }

    #score {
      height: auto;
      width: auto;
      position: absolute;
      top: 20px;
      right: 0;
    }

    #gameOver {
      display: none;

      position: absolute;
      left: 50%;
      top: 50%;
      height: 400px;
      width: 400px;
      transform: translateY(-50%) translateX(-50%);

      img {
        height: 400px;
        width: 400px;
        filter: invert(1);
      }
    }
    .gameOver {
      display: block !important;
    }
  `,
  settings: {
    rootFontSize: 16,
  },

  screens: {
    xs: 0,
    s: 375,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    maxWidth: 1600,
  },

  colors: {
    ...defaultTheme.colors,
    text: "#000",
    background: "#fff",
    primary: "#07c",
    scroll: "rgba(0, 0, 0, 0.4)",
    barr: "rgba(0, 0, 0, 0.1)",
    button: "rgba(255, 255, 255, 0.4)",

    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        scroll: "rgba(255, 255, 255, 0.4)",
        barr: "rgba(255, 255, 255, 0.1)",
        button: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  fonts: ["Montserrat, DejaVu Sans, Verdana, sans‑serif"],
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

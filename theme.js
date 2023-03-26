import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// import Heading from '@/components/element/heading';

const customTheme = extendTheme({
  config: {
    cssVarPrefix: "dos",
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Chivo, Noto Sans HK, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
    heading:
      "Space Grotesk, Noto Sans HK, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
    mono: "Space Mono, IBM Plex Mono, monospace",
  },
  colors: {
    transparent: "rgba(0,0,0,0)",
    text: {
      100: "lightgray",
      400: "darkgray",
    },
    brand: {
      100: "orange",
      400: "red",
    },
    yellow: {
      100: "#FFF9EF",
      200: "#F2E3CD",
      300: "#EEDDCC",
      800: "4F483B",
      900: "150D00",
    },
    primary: {
      300: "#33aaff",
      400: "#78c7ff",
      500: "#0077CC",
    },
    secondary: {
      300: "rgb(202,20,20,0.7)",
      400: "#ca1414",
    },
    indigo: {
      100: "#EAF4FA",
      200: "#D6E8F6",
      300: "#BBBFCC",
      400: "#9AB2CD",
      500: "#748cad",
      600: "#546D94",
      700: "#3A507C",
      800: "#253764",
      900: "#1A2025",
    },
  },
  semanticTokens: {
    colors: {
      primarytext: {
        default: "yellow.900",
        _dark: "indigo.300",
      },
      secondarytext: {
        default: "yellow.800",
        _dark: "indigo.200",
      },
      background: {
        default: "yellow.100",
        _dark: "indigo.900",
      },
      border: {
        default: "yellow.200",
        _dark: "indigo.800",
      },
      outline: {
        default: "gray.200",
        _dark: "gray.700",
      },
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  components: {},
  styles: {},
});
export default customTheme;

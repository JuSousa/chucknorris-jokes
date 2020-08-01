import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    grid: { [key in keyof typeof grid]: React.ReactNode };
    mediaQueries: { [key in keyof typeof mediaQueries]: string };
    spacing: (x: number) => number;
  }
}

export const colors = {
  white: "#ffffff",
  gray: "#e8e8e8",
  orange: "#ff6501",
  brown: "#583118",
  unset: "unset",
};

export const grid = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
};

export const mediaQueries = {
  xs: `(max-width: ${grid.xs}px)`,
  sm: `(max-width: ${grid.sm}px)`,
  md: `(max-width: ${grid.md}px)`,
  lg: `(max-width: ${grid.lg}px)`,
  smUp: `(min-width: ${grid.sm}px)`,
  mdUp: `(min-width: ${grid.md}px)`,
  lgUp: `(min-width: ${grid.lg}px)`,
};

export const fontTypes = {
  title: {
    fontSize: 54,
    letterSpacing: 0,
    lineHeight: "125px",
  },
  text: {
    fontSize: 24,
    lineHeight: "32px",
  },
  header: {
    fontSize: 20,
  },
  headerSmall: {
    fontSize: 16,
    color: colors.white,
  },
  button: {
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: "30px",
  },
};

const theme: DefaultTheme = {
  colors: colors,
  fontTypes,
  grid: grid,
  mediaQueries,
  spacing: (number) => number * 8,
};

export default theme;

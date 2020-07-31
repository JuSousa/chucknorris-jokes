import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    grid: { [key in keyof typeof grid]: any };
    mediaQueries: { [key in keyof typeof mediaQueries]: string };
    spacing: (x: number) => number;
  }
}

export const colors = {
  gray: "#f1f1f1",
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
    fontSize: 92,
    letterSpacing: 0,
    lineHeight: "125px",
  },
  subtitle: {
    fontSize: 56,
    letterSpacing: 1,
    lineHeight: "76px",
  },
  text: {
    fontSize: 16,
  },
  header: {
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: "30px",
    color: colors.gray,
  },
  button: {
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: "30px",
  },
};

const theme: DefaultTheme = {
  colors: colors,
  fontTypes,
  grid: grid,
  mediaQueries,
  spacing: (number) => number * 7,
};

export default theme;

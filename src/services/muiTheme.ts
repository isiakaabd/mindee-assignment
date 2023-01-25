import { createTheme } from "@mui/material/styles";

import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    lightGrey: string;
    darkGreen: string;
    green: string;
  }
}
const lightGrey = "#5F5C5C";
const darkGreen = "#044402";
const green = "#37D42A";

export const muiTheme = createTheme({
  palette: {
    common: {
      lightGrey,
    },
    primary: {
      main: green,
    },

    secondary: {
      main: lightGrey,
    },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif", "Roboto"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(1.5rem, 2vw, 1.2rem)",
      fontWeight: 700,
      color: darkGreen,
    },

    body1: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
  },
});

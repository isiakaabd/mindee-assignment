import { createTheme } from "@mui/material/styles";

const lightRed = "#fd3145";

const blue = "#011e3c";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: blue,
      dark: lightRed,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(1.5rem, 2vw, 1.2rem)",
      fontWeight: 700,
    },

    body1: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    button: {
      background: lightRed,
    },
  },
});

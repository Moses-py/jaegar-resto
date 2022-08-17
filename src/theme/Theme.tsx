import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FB6F6F",
      light: "#FFFFFF",
      dark: "#000000",
    },
  },
  typography: {
    fontFamily: "'Barlow', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    h1: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "39.2px",
      letterSpacing: 0,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    caption: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22.4px",
    },
    body1: {
      fontSize: "14px",
      lineHeight: "18.2px",
      letterSpacing: "0.16px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "16.8px",
      letterSpacing: "0.32px",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "19.2px",
    },
    subtitle2: {
      fontSize: "12px",
      lineHeight: "16.8px",
    },
  },
});

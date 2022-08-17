import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { theme } from "./Theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DEFAULT_THEME } from "../../utils/styleUtils";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={DEFAULT_THEME}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

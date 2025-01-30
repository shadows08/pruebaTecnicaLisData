import { createTheme } from "@mui/material/styles";

export const DEFAULT_THEME = createTheme({
  typography: {
    fontFamily: "'Bebas Neue', sans-serif",
  },
  palette: {
    header: {
      background: "#FFFFFF",
    },
    blackLayout: {
      background: "#1B1D29",
    },
    colors: {
      white: "#FFFFFF",
    },
  },
});

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    header: {
      background: string;
      text: string;
    };
    blackLayout: {
      background: string;
    };
    colors: {
      white: string;
      black: string;
      gray: string;
    };
  }

  interface PaletteOptions {
    header?: {
      background?: string;
      text?: string;
    };
    blackLayout?: {
      background?: string;
    };
    colors?: {
      white?: string;
      black?: string;
      gray?: string;
    };
  }
}

import React from "react";
import { AppBar, Toolbar, useTheme } from "@mui/material";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      sx={{
        background: theme.palette.header.background,
        boxShadow: "2px 2px 20px rgba(26, 64, 78, 0.15)",
        padding: "0px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <img
          src="/assets/LisHeader.jpg"
          alt="Logo"
          style={{ height: "40px" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import { Grid, GridProps, useTheme } from "@mui/material";
import Header from "../Header/Header";

interface BlackLayoutProps extends GridProps {
  children: React.ReactNode;
}

const BlackLayout: React.FC<BlackLayoutProps> = ({
  children,
  sx,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.blackLayout.background,
        height: "100vh",
        display: "flex",
        ...sx,
      }}
      {...props}
    >
      <Header />
      {children}
    </Grid>
  );
};

export default BlackLayout;

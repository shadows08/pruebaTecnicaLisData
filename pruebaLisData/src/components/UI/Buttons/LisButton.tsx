import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface CustomButtonProps extends ButtonProps {
  className?: string;
}

const withCustomStyles = <T extends CustomButtonProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  return styled((props: T) => <WrappedComponent {...props} />)({
    background: "linear-gradient(98.76deg, #00B1E2 1.99%, #33CCDD 56.55%)",
    color: "#FFFFFF",
    padding: "8px 24px",
    textTransform: "none",
    borderRadius: "4px",
    "&:hover": {
      background: "linear-gradient(98.76deg, #00A0D2 1.99%, #2ABBCB 56.55%)",
    },
  });
};

const LisButton = withCustomStyles(Button);

export default LisButton;

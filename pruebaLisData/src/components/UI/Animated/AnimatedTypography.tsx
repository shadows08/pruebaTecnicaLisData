import { Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const textFocusIn = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const AnimatedTypography = styled(Typography)<{ textcolor?: string }>(
  ({ textcolor }) => ({
    animation: `${textFocusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
    color: textcolor || "inherit",
  })
);

interface AnimatedTitleProps {
  text: string;
  color?: string;
}

const AnimatedTitle = ({ text, color }: AnimatedTitleProps) => {
  return (
    <AnimatedTypography variant="h3" textcolor={color}>
      {text}
    </AnimatedTypography>
  );
};

export default AnimatedTitle;

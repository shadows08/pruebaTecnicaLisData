import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LisButton from "../../components/UI/Buttons/LisButton";
import { SxProps, Theme } from "@mui/material";
import { i18n } from "../../lang";
import { ROUTES } from "../../Routes/routes";

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Typography variant="h1" fontWeight="bold">
        {i18n.notFound.title}
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        {i18n.notFound.message}
      </Typography>
      <Typography variant="body1" sx={styles.errorMessage}>
        {i18n.notFound.description}
      </Typography>

      <LisButton onClick={() => navigate(ROUTES.HOME)}>
        {i18n.notFound.returnHomepage}
      </LisButton>
    </Box>
  );
};

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.blackLayout.background,
    color: theme.palette.colors.white,
    textAlign: "center",
    px: 2,
  }),
  errorMessage: {
    mt: 1,
    maxWidth: "500px",
  },
};

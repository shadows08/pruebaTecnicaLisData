import { Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LisButton from "../../components/UI/Buttons/LisButton";
import BlackLayout from "../../components/Layout/BlackLayout";
import { i18n } from "../../lang";
import AnimatedTitle from "../../components/UI/Animated/AnimatedTypography";
import { ROUTES } from "../../Routes/routes";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <BlackLayout sx={{ justifyContent: "center" }}>
      <Grid item textAlign="center">
        <AnimatedTitle
          text={i18n.home.welcome}
          color={theme.palette.colors.white}
        />
        <LisButton onClick={() => navigate(ROUTES.CONFIG)}>
          {i18n.home.start}
        </LisButton>
      </Grid>
    </BlackLayout>
  );
};

export default Home;

import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import SteppCategory from "../../components/ConfigSteps/SteppCategory";
import SteppSubCategory from "../../components/ConfigSteps/SteppSubCategory";
import SteppColor from "../../components/ConfigSteps/SteppColor";
import { FC } from "react";
import FormNavigation from "../../components/ConfigSteps/FormNavigation";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import BlackLayout from "../../components/Layout/BlackLayout";
import { i18n } from "../../lang";
import { useFormContext } from "../../context/Form/FormContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";

const steps: string[] = [
  i18n.config.category,
  i18n.config.subcategrory,
  i18n.config.color,
];
const stepComponents: FC[] = [SteppCategory, SteppSubCategory, SteppColor];
const selectionOptionsTitle = [
  i18n.config.categoryTitle,
  i18n.config.subcategoryTitle,
  i18n.config.colorTitle,
] as const;

const Config: FC = () => {
  const theme = useTheme(); // Accedemos al tema
  const { currentStep, nextStep, prevStep, isLastStep, isFirstStep } =
    useMultiStepForm(steps);
  const StepComponent = stepComponents[currentStep];
  const { formData } = useFormContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(ROUTES.PRODUCTS, { state: { formData } });
  };

  const styles = getStyles(theme, currentStep);

  return (
    <BlackLayout sx={{ justifyContent: "center" }}>
      <Box sx={styles.container}>
        <Typography variant="h4" fontWeight="bold" sx={styles.title}>
          {selectionOptionsTitle[currentStep]}
        </Typography>

        <Box sx={styles.stepBox}>
          <StepComponent />
        </Box>

        <FormNavigation
          currentStep={currentStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          nextStep={nextStep}
          prevStep={prevStep}
          onSubmit={handleSubmit}
        />

        <Stepper activeStep={currentStep} sx={{ mt: 4 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel sx={styles.getStepLabel(index)}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </BlackLayout>
  );
};

export default Config;

const getStyles = (theme: any, currentStep: number) => ({
  container: {
    width: "90%",
    height: "90%",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    mb: 3,
    color: theme.palette.common.white,
  },
  stepBox: {
    width: "80%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  getStepLabel: (index: number) => ({
    "& .MuiStepLabel-label": {
      color:
        index === currentStep
          ? theme.palette.grey[300]
          : theme.palette.common.white,
      fontWeight: index === currentStep ? "bold" : "normal",
    },
  }),
});

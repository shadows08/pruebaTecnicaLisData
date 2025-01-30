import { Box } from "@mui/material";
import LisButton from "../UI/Buttons/LisButton";
import { i18n } from "../../lang";
import { useFormContext } from "../../context/Form/FormContext";
interface FormNavigationProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: () => void;
  currentStep: number;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  isFirstStep,
  isLastStep,
  nextStep,
  prevStep,
  onSubmit,
  currentStep,
}) => {
  const { formData } = useFormContext();

  const canProceed =
    (currentStep === 0 && formData.id_category) ||
    (currentStep === 1 && formData.id_subcategory) ||
    (currentStep === 2 && formData.id_color);

  return (
    <Box mt={3}>
      {!isFirstStep && (
        <LisButton
          onClick={prevStep}
          variant="contained"
          color="secondary"
          sx={{ mr: 1 }}
        >
          {i18n.config.back}
        </LisButton>
      )}
      {isLastStep ? (
        <LisButton
          variant="contained"
          color="success"
          onClick={onSubmit}
          disabled={!formData.id_color}
        >
          {i18n.config.send}
        </LisButton>
      ) : (
        <LisButton
          onClick={nextStep}
          variant="contained"
          color="primary"
          disabled={!canProceed}
        >
          {i18n.config.next}
        </LisButton>
      )}
    </Box>
  );
};

export default FormNavigation;

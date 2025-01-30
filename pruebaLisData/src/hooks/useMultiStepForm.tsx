import { useState } from "react";

export const useMultiStepForm = (steps: string[]) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return { currentStep, nextStep, prevStep, isLastStep, isFirstStep };
};

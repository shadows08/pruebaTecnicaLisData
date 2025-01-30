import { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  id_category: number | null | undefined;
  id_subcategory: number | null | undefined;
  id_color: number | null | undefined;
}

interface FormContextType {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>({
    id_category: null,
    id_subcategory: null,
    id_color: null,
  });

  const setFormData = (data: Partial<FormData>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext debe usarse dentro de un FormProvider");
  }
  return context;
};

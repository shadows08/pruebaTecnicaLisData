import React from "react";
import { useFormContext } from "../../context/Form/FormContext";
import { QueryClient } from "@tanstack/react-query";
import { Button, CircularProgress, Grid, useTheme } from "@mui/material";
import { controllers } from "../../api/controllers";
import { getColorHex } from "../../utils/getColorHex";
import { darkenColor } from "../../utils/darkenColor";
import { i18n } from "../../lang";

interface SteppColorProps {}

export const SteppColor: React.FC<SteppColorProps> = ({}) => {
  const theme = useTheme();
  const { formData, setFormData } = useFormContext();
  const id_subcategory = formData.id_subcategory ?? null;

  const queryClient = new QueryClient();
  const { query } = controllers().categories.useGetColorsBySubcategoryId(
    id_subcategory,
    queryClient
  );
  const { data, isLoading, error } = query;

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <p>{i18n.config.errorLoadindData}</p>;
  }

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      {data?.map((category) => {
        const isSelected = formData.id_color === category.id;
        const colorHex = getColorHex(Number(category.id));

        return (
          <Grid item xs={12} sm={6} key={category.id}>
            <Button
              variant="contained"
              sx={getButtonStyles(isSelected, colorHex, theme)}
              onClick={() =>
                setFormData({
                  ...formData,
                  id_color: isSelected ? null : category.id,
                })
              }
            >
              {category.name}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SteppColor;

const getButtonStyles = (
  isSelected: boolean,
  colorHex: string,
  theme: any
) => ({
  backgroundColor: isSelected ? darkenColor(colorHex, 10) : colorHex,
  color: theme.palette.common.white,
  width: "100%",
  height: "100%",
  border: isSelected ? `2px solid ${theme.palette.common.white}` : "none",
  transition: "background-color 0.3s ease, border 0.3s ease",
  "&:hover": {
    backgroundColor: darkenColor(colorHex, 20),
    transform: "scale(1.02)",
  },
  "&:active": {
    transform: "scale(0.98)",
  },
});

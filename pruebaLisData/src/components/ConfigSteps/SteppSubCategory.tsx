import React from "react";
import { useFormContext } from "../../context/Form/FormContext";
import { Button, CircularProgress, Grid, useTheme } from "@mui/material";
import { controllers } from "../../api/controllers";
import { i18n } from "../../lang";
export const SteppSubCategory: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const idCategory = formData.id_category ?? null;
  const theme = useTheme();
  const { query } =
    controllers().categories.useGetSubcategoriesByCategoryId(idCategory);
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
        const isSelected = formData.id_subcategory === category.id;

        return (
          <Grid item xs={12} sm={6} key={category.id}>
            <Button
              variant="contained"
              sx={buttonStyles(isSelected, theme)}
              onClick={() =>
                setFormData({
                  ...formData,
                  id_subcategory: isSelected ? null : category.id,
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

export default SteppSubCategory;

const buttonStyles = (isSelected: boolean, theme: any) => ({
  backgroundColor: isSelected ? "#1565C0" : "#4A90E2",
  color: theme.palette.colors.white,
  width: "100%",
  height: "100%",
  "&:hover": {
    backgroundColor: isSelected ? "#0D47A1" : "#357ABD",
  },
});

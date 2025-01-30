import React from "react";
import { Grid, Button, CircularProgress, useTheme } from "@mui/material";
import { useFormContext } from "../../context/Form/FormContext";
import { controllers } from "../../api/controllers";
import { i18n } from "../../lang";

interface SteppCategoryProps {}
export const SteppCategory: React.FC<SteppCategoryProps> = ({}) => {
  const { query } = controllers().categories.useGetAll();
  const { data, isLoading, error } = query;
  const theme = useTheme();
  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>{i18n.config.errorLoadindData}</p>;
  }

  const { formData, setFormData } = useFormContext();

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      {data?.map((category) => {
        const isSelected = formData.id_category === category.id;

        return (
          <Grid item xs={12} sm={6} key={category.id}>
            <Button
              variant="contained"
              sx={buttonStyles(isSelected, theme)}
              onClick={() =>
                setFormData({
                  ...formData,
                  id_category: isSelected ? null : category.id,
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
export default SteppCategory;

const buttonStyles = (isSelected: boolean, theme: any) => ({
  backgroundColor: isSelected ? "#1565C0" : "#4A90E2",
  color: theme.palette.colors.white,
  width: "100%",
  height: "100%",
  "&:hover": {
    backgroundColor: isSelected ? "#0D47A1" : "#357ABD",
  },
});

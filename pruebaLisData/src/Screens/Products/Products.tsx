import { useLocation } from "react-router-dom";
import BlackLayout from "../../components/Layout/BlackLayout";
import { Box, CircularProgress, Typography } from "@mui/material";
import { controllers } from "../../api/controllers";
import { i18n } from "../../lang";
import { ProductsTable } from "../../components/Table/ProductsTable";
import { columns } from "../../components/Table/productColumns";

export const Products = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  const idCategory = formData?.id_category ?? null;
  const idSubcategory = formData?.id_subcategory ?? null;
  const idColor = formData?.id_color ?? null;

  const { query } = controllers().categories.useGetProducts(
    idCategory,
    idSubcategory,
    idColor
  );
  const { data: products, isLoading, error } = query;

  if (isLoading) {
    return (
      <BlackLayout
        sx={{
          padding: "16px",
          justifyContent: "center",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <CircularProgress />
          <Typography sx={{ mt: 2, color: "white" }}>
            {i18n.products.loading}
          </Typography>
        </Box>
      </BlackLayout>
    );
  }

  if (error) {
    return (
      <BlackLayout sx={{ justifyContent: "center", textAlign: "center" }}>
        <Typography color="error">
          {i18n.products.errorLoadingProducts}
        </Typography>
      </BlackLayout>
    );
  }

  return (
    <BlackLayout sx={{ padding: "16px" }}>
      <ProductsTable columns={columns} products={products || []} />
    </BlackLayout>
  );
};

export default Products;

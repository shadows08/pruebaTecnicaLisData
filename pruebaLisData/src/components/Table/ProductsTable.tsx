import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Product } from "../../api/types/model/dtos/productDTO";

interface ProductsTableProps {
  products: Product[];
  columns: GridColDef[];
}

export const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  columns,
}) => {
  return (
    <Box sx={{ height: "80%", width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={products || []}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        pagination
        sx={{ backgroundColor: "white", height: "80%" }}
      />
    </Box>
  );
};

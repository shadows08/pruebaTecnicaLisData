import { GridColDef } from "@mui/x-data-grid";
import { i18n } from "../../lang";
export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 200, sortable: true },
  {
    field: "price",
    headerName: i18n.products.price,
    width: 120,
    type: "number",
    sortable: true,
  },
  {
    field: "stock_quantity",
    headerName: i18n.products.stock_quantity,
    width: 100,
    type: "number",
  },
  {
    field: "average_rating",
    headerName: i18n.products.average_rating,
    width: 100,
    type: "number",
    sortable: true,
  },
  {
    field: "is_free_shipping",
    headerName: i18n.products.is_free_shipping,
    width: 130,
    type: "boolean",
    sortable: true,
  },
  {
    field: "id_category",
    headerName: i18n.products.id_category,
    width: 120,
    type: "number",
  },
  { field: "id_color", headerName: "Color ID", width: 120, type: "number" },
  {
    field: "id_subcategory",
    headerName: i18n.products.id_subcategory,
    width: 120,
    type: "number",
  },
];

import { QueryKey } from "@tanstack/react-query";

export interface QueryConfig {
  url: string;
  method: string;
}

export const getQueryKeysCategories = (apiUrl: string) => ({
  categories: {
    getAllCategories: (): QueryKey => [
      "categories-get-all",
      { url: `${apiUrl}/category`, method: "get" } as QueryConfig,
    ],
    getSubcategoriesByCategoryId: (idCategory: number | null): QueryKey => [
      "subcategories-by-category",
      {
        url: `${apiUrl}/category/${idCategory}/subcategory`,
        method: "get",
      } as QueryConfig,
    ],
    getColorsBySubcategoryId: (idSubcategory: number | null): QueryKey => [
      "colors-by-subcategory",
      {
        url: `${apiUrl}/subcategory/${idSubcategory}/color`,
        method: "get",
      } as QueryConfig,
    ],
    getProducts: (
      idCategory: string | null,
      idSubcategory: string | null,
      idColor: string | null
    ): QueryKey => [
      "products",
      {
        url: `${apiUrl}/product?id_category=${idCategory}&id_subcategory=${idSubcategory}&id_color=${idColor}`,
        method: "get",
      } as QueryConfig,
    ],
  },
});

import { getQueryKeysCategories } from "./queryKeys";
import { fetchApi } from "./networkUtils";
import { QueryClient, useQuery, UseQueryResult } from "@tanstack/react-query";
import { x } from "./helpers";
import { Category } from "./types/model/dtos/categoryDTO";
import { Subcategory } from "./types/model/dtos/SubcategoryDTO";
import { Color } from "./types/model/dtos/colorDTO";
const apiUrl: string = import.meta.env.VITE_API_URL;

export const controllers = () => {
  const categoryKeys = getQueryKeysCategories(apiUrl);

  return {
    categories: {
      useGetAll: (
        queryClient?: QueryClient
      ): {
        invalidate: () => void;
        reset: () => void;
        query: UseQueryResult<Category[], Error>;
      } => {
        const key = categoryKeys.categories.getAllCategories();
        const queryConfig = key[1] as { url: string; method: string };

        return {
          ...x(key, queryClient),
          query: useQuery<Category[], Error>({
            queryKey: key,
            queryFn: () => fetchApi<Category[]>(queryConfig),
          }),
        };
      },

      useGetSubcategoriesByCategoryId: (
        idCategory: number | null,
        queryClient?: QueryClient
      ): {
        invalidate: () => void;
        reset: () => void;
        query: UseQueryResult<Subcategory[], Error>;
      } => {
        const key =
          categoryKeys.categories.getSubcategoriesByCategoryId(idCategory);
        const queryConfig = key[1] as { url: string; method: string };

        return {
          ...x(key, queryClient),
          query: useQuery<Subcategory[], Error>({
            queryKey: key,
            queryFn: () => fetchApi<Subcategory[]>(queryConfig),
            enabled: !!idCategory,
          }),
        };
      },
      useGetColorsBySubcategoryId: (
        idSubcategory: number | null,
        queryClient?: QueryClient
      ): {
        invalidate: () => void;
        reset: () => void;
        query: UseQueryResult<Color[], Error>;
      } => {
        const key =
          categoryKeys.categories.getColorsBySubcategoryId(idSubcategory);
        const queryConfig = key[1] as { url: string; method: string };

        return {
          ...x(key, queryClient),
          query: useQuery<Color[], Error>({
            queryKey: key,
            queryFn: () => fetchApi<Color[]>(queryConfig),
            enabled: !!idSubcategory,
          }),
        };
      },
    },
  };
};

import {
  QueryClient,
  QueryKey,
  InvalidateQueryFilters,
} from "@tanstack/react-query";

const reset = (key: QueryKey, queryClient?: QueryClient): Promise<void> => {
  if (!queryClient) {
    return Promise.reject(
      new Error("queryClient undefined, cannot reset queries")
    );
  }
  return queryClient.resetQueries({ queryKey: key });
};

const invalidate = (
  key: QueryKey,
  queryClient?: QueryClient
): Promise<void> => {
  if (!queryClient) {
    return Promise.reject(
      new Error("queryClient undefined, cannot invalidate queries")
    );
  }
  return queryClient.invalidateQueries({
    queryKey: key,
  } as InvalidateQueryFilters);
};

export const x = (key: QueryKey, queryClient?: QueryClient) => ({
  invalidate: async () => await invalidate(key, queryClient),
  reset: async () => await reset(key, queryClient),
});

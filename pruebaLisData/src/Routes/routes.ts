export const ROUTES = {
  HOME: "/",
  CONFIG: "/config",
  PRODUCTS: "/products",
  NOT_FOUND: "*",
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type RoutePaths = (typeof ROUTES)[RouteKeys];

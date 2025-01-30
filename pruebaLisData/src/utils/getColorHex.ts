import { colorMap } from "./colorMap";

export const getColorHex = (id: number | null | undefined): string => {
  return id ? colorMap[id] || "#4A90E2" : "#4A90E2";
};

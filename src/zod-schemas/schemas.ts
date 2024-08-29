import { dailyThemeSchemas } from "~/zod-schemas/daily-theme";
import { drawingThemesSchemas } from "~/zod-schemas/drawing-themes";

export const schemas = {
  drawingTheme: drawingThemesSchemas,
  dailyTheme: dailyThemeSchemas,
};

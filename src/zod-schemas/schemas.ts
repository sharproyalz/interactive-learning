import { drawingThemesSchemas } from "~/zod-schemas/drawing-themes";
import { sketchSchemas } from "~/zod-schemas/sketch";

export const schemas = {
  drawingTheme: drawingThemesSchemas,
  sketch: sketchSchemas,
};

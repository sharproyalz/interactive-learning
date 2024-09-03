import { drawingThemesSchemas } from "~/zod-schemas/drawing-themes";
import { sketchesSchemas } from "~/zod-schemas/sketches";

export const schemas = {
  drawingTheme: drawingThemesSchemas,
  sketches: sketchesSchemas,
};

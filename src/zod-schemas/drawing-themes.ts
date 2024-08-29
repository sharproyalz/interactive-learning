import { error } from "console";
import { z } from "zod";

export const drawingThemesSchemas = {
  get: z.object({
    id: z.string(),
    name: z.string(),
  }),

  set: z.array(
    z.object({
      id: z.string().cuid().optional(),
      name: z.string(),
    }),
  ),
};

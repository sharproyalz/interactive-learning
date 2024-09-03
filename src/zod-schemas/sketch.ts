import { z } from "zod";

export const sketchSchemas = {
  get: z.object({
    id: z.string().cuid(),
  }),

  create: z.object({
    id: z.string().cuid().optional(),
    name: z.string(),
    image: z.string().url("Image is required"),
    imageId: z.string(),
  }),
};

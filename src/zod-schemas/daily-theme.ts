import { z } from "zod";

export const dailyThemeSchemas = {
  get: z.object({
    id: z.string(),
    name: z.string(),
    date: z.date(),
    isDone: z.boolean(),
  }),

  set: z.object({
    id: z.string().cuid().optional(),
    name: z.string(),
    isDone: z.boolean(),
  }),
};

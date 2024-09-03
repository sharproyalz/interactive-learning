import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { schemas } from "~/zod-schemas/schemas";

export const drawingThemeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ input, ctx }) => {
    return ctx.db.drawingTheme.findMany();
  }),

  get: publicProcedure
    .input(schemas.drawingTheme.get)
    .query(({ input, ctx }) => {
      return ctx.db.drawingTheme.findUnique({ where: input });
    }),

  set: publicProcedure
    .input(schemas.drawingTheme.set)
    .mutation(({ input, ctx }) => {
      return ctx.db.drawingTheme.createMany({
        data: input,
        skipDuplicates: true,
      });
    }),
});

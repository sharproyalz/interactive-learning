import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { schemas } from "~/zod-schemas/schemas";

export const sketchesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.sketch.findMany();
  }),

  get: publicProcedure.input(schemas.sketches.get).query(({ input, ctx }) => {
    return ctx.db.sketch.findUnique({ where: input });
  }),

  create: publicProcedure
    .input(schemas.sketches.create)
    .mutation(({ input, ctx }) => {
      return ctx.db.sketch.create({
        data: input,
      });
    }),
});

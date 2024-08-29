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
    .mutation(async ({ input, ctx }) => {
      console.log("Received input for 'set':", input);

      try {
        const result = await ctx.db.drawingTheme.createMany({
          data: input,
          skipDuplicates: true,
        });
        console.log("Result from 'set':", result);
        return result;
      } catch (error) {
        console.error("Error in 'set' procedure:", error);
        throw new Error("Failed to insert drawing theme.");
      }
    }),
});

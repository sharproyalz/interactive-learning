"use client";

import { api } from "~/trpc/react";
import { schemas } from "~/zod-schemas/schemas";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";

type Theme = z.infer<typeof schemas.drawingTheme.set>;

export default function InsertThemesPage() {
  const getDrawingThemesQuery = api.drawingTheme.getAll.useQuery();
  const drawingTheme = getDrawingThemesQuery.data;

  const setDrawingThemesForm = useForm<Theme>({
    resolver: zodResolver(schemas.drawingTheme.set),
    // Insert here
    // values: [
    //   { name: "Anime Character" },
    // ],
  });

  const setDrawingThemes = api.drawingTheme.set.useMutation({
    onSuccess: async () => {
      console.log("Drawing themes has been inserted.");
    },
  });

  const onSubmit: SubmitHandler<Theme> = (values) => {
    try {
      console.log("Submitting values:", values);
      setDrawingThemes.mutate(values);
    } catch (error) {
      console.error("Error submitting values:", error);
    }
  };

  console.log(drawingTheme?.map((draw) => `{ name: ${draw.name}}`));
  return (
    <form
      onSubmit={setDrawingThemesForm.handleSubmit(onSubmit, (err) =>
        console.log(err),
      )}
      className="flex flex-col gap-4"
    >
      <button type="submit">Submit</button>
    </form>
  );
}

import SubmitSketchView from "~/app/sketch-of-the-day/submit/_components/submit";
import { NavigationBar } from "~/components/navigation-bar";
import { api } from "~/trpc/server";
import { getDayOfYear } from "~/utils/get-day-of-year";

export default async function SubmitSketchPage() {
  const drawingThemes = await api.drawingTheme.getAll.query();

  return (
    <>
      <SubmitSketchView drawingThemes={drawingThemes} />

      <NavigationBar />
    </>
  );
}

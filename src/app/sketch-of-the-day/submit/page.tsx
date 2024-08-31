import SubmitSketchView from "~/app/sketch-of-the-day/submit/_components/submit";
import { NavigationBar } from "~/components/navigation-bar";
import { api } from "~/trpc/server";
import { getDayOfYear } from "~/utils/get-day-of-year";

export default async function SubmitSketchPage() {
  const drawingTheme = await api.drawingTheme.getAll.query();

  const today = new Date(); // Get the current date
  const dayOfYear = getDayOfYear(today);
  return (
    <>
      <SubmitSketchView drawingTheme={drawingTheme[dayOfYear]} />

      <NavigationBar />
    </>
  );
}

import { SketchMenuView } from "~/app/sketch-of-the-day/_components/menu";
import { NavigationBar } from "~/components/navigation-bar";
import { api } from "~/trpc/server";
import { getDayOfYear } from "~/utils/get-day-of-year";

export default async function SketchOfTheDayPage() {
  const drawingTheme = await api.drawingTheme.getAll.query();

  const today = new Date(); // Get the current date
  const dayOfYear = getDayOfYear(today);

  return (
    <>
      <SketchMenuView drawingTheme={drawingTheme[dayOfYear]} />

      <NavigationBar />
    </>
  );
}

import { SketchMenuView } from "~/app/sketch-of-the-day/_components/menu";
import { NavigationBar } from "~/components/navigation-bar";
import { api } from "~/trpc/server";

export default async function SketchOfTheDayPage() {
  const drawingTheme = await api.drawingTheme.getAll.query();

  function getDayOfYear(date: Date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st of the current year
    const diffInMilliseconds = date.getTime() - startOfYear.getTime(); // Difference in milliseconds
    const millisecondsInADay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day

    // Calculate the difference in days
    const dayOfYear = Math.floor(diffInMilliseconds / millisecondsInADay) + 1;
    return dayOfYear;
  }

  const today = new Date(); // Get the current date
  const dayOfYear = getDayOfYear(today);

  return (
    <>
      <SketchMenuView drawingTheme={drawingTheme[dayOfYear]} />

      <NavigationBar />
    </>
  );
}

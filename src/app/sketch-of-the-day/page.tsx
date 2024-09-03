export const dynamic = "force-dynamic";

import { SketchMenuView } from "~/app/sketch-of-the-day/_components/menu";
import { NavigationBar } from "~/components/navigation-bar";
import { api } from "~/trpc/server";
import { getDayOfYear } from "~/utils/get-day-of-year";

export default async function SketchOfTheDayPage() {
  const drawingTheme = await api.drawingTheme.getAll.query();

  return (
    <>
      <SketchMenuView initialData={drawingTheme} />

      <NavigationBar />
    </>
  );
}

import { SketchMenuView } from "~/app/sketch-of-the-day/_components/menu";
import { NavigationBar } from "~/components/navigation-bar";

export default function SketchOfTheDayPage() {
  return (
    <>
      <SketchMenuView drawingTheme={undefined} />

      <NavigationBar />
    </>
  );
}

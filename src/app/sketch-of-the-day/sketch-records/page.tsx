import { SketchMenuView } from "~/app/sketch-of-the-day/_components/menu";
import { SketchRecordsView } from "~/app/sketch-of-the-day/sketch-records/_components/records";
import { NavigationBar } from "~/components/navigation-bar";

export default function SketchRecordsPage() {
  return (
    <>
      <SketchRecordsView />

      <NavigationBar />
    </>
  );
}

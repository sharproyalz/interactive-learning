import { SketchRecordsView } from "~/app/sketch-of-the-day/sketch-records/_components/records";
import { NavigationBar } from "~/components/navigation-bar";
import { api } from "~/trpc/server";

export default async function SketchRecordsPage() {
  const sketches = await api.sketches.getAll.query();

  return (
    <>
      <SketchRecordsView initialData={sketches} />

      <NavigationBar />
    </>
  );
}

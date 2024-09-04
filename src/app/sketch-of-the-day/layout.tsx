import { NavigationBar } from "~/components/navigation-bar";

export default function SketchOfTheDayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <NavigationBar />
    </>
  );
}

import { NavigationBar } from "~/components/navigation-bar";

export default function StudyTimerLayout({
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

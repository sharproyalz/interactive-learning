import StudyTimerView from "~/app/study-timer/_components/study-timer";
import { TimerView } from "~/app/study-timer/_components/timer";
import { NavigationBar } from "~/components/navigation-bar";

export default function StudyTimerPage() {
  return (
    <>
      <div className="">
        {/* <StudyTimerView /> */}
        <TimerView />
      </div>
      <NavigationBar />
    </>
  );
}

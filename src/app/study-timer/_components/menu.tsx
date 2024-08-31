"use client";

import { useState } from "react";
import { PomodoroTimerView } from "~/app/study-timer/_components/pomodoro-timer";
import { CustomTimerView } from "~/app/study-timer/_components/custom-timer";
import Image from "next/image";

export function StudyTimerMenuView() {
  const quotes = [
    "A habit cannot be tossed out the window; it must be coaxed down the stairs a step at a time. -Mark Twain",
    "And once you understand that habits can change, you have the freedom and the responsibility to remake them. -Charles Duhigg",
    "Discipline is choosing between what you want now and what you want most. -Abraham Lincoln",
    "Drop by drop is the water pot filled. -Buddha",
    "Feeling sorry for yourself, and your present condition is not only a waste of energy but the worst habit you could possibly have. -Dale Carnegie",
    "First forget inspiration. Habit is more dependable. Habit will sustain you whether you’re inspired or not. -Octavia Butler",
    "Good habits are worth being fanatical about. -John Irving",
    "Good habits formed at youth make all the difference. - Aristotle",
    "Habit is the intersection of knowledge (what to do), skill (how to do), and desire (want to do). -Stephen R. Covey",
    "Habits change into character. -Ovid",
    "Happiness is a habit—cultivate it. -Elbert Hubbard",
    "I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times. -Bruce Lee",
    "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude. -Colin Powell",
    "In essence, if we want to direct our lives, we must take control of our consistent actions.It's not what we do once in a while that shapes our lives, but what we do consistently. - Tony Robbins",
    "Let today be the day you give up who you've been for who you can become. -Hal Elrod",
  ];
  const quoteNum = Math.floor(Math.random() * quotes.length);

  const [isPomoActive, setIsPomoActive] = useState(false);
  const [isCustomActive, setIsCustomActive] = useState(false);

  return (
    <>
      {isCustomActive && (
        <CustomTimerView setIsCustomActive={setIsCustomActive} />
      )}

      {isPomoActive && (
        <PomodoroTimerView
          quote={quotes[quoteNum]!}
          isPomoActive={isPomoActive}
          setIsPomoActive={setIsPomoActive}
        />
      )}

      {!isPomoActive && !isCustomActive ? (
        <section className="relative mx-auto my-8 flex h-[calc(100vh-67px-32px)] max-w-screen-sm flex-col items-center">
          <h1 className="text-center font-semibold italic">Study Timer</h1>

          <div className="text-center font-light">Select a mode of timer</div>

          <Image
            src={"/time_illustration.svg"}
            alt="Time Illustration"
            width={200}
            height={200}
            className="mt-16"
          />
          <div
            className={`absolute bottom-8 flex w-full justify-between gap-2 px-8`}
          >
            <button
              type="button"
              className="self-center rounded-md border border-transparent bg-primary/10 px-8 py-2 font-semibold text-primary outline-none focus:border-white active:translate-x-1 active:translate-y-1"
              onClick={() => setIsCustomActive(true)}
            >
              Custom
            </button>

            <button
              type="button"
              className={`self-center rounded-md border border-transparent bg-primary px-8 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1
            `}
              onClick={() => setIsPomoActive(true)}
            >
              Pomodoro
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

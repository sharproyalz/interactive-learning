"use client";

import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

type Props = {
  data: {
    timerHour: string;
    timerMin: string;
    timerSec: string;
    restQuantity: string;
    restTimerHour: string;
    restTimerMin: string;
    restTimerSec: string;
  };
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  startTimer: () => void;
  setIsStart: Dispatch<SetStateAction<boolean>>;
};
export function TimerView({
  data,
  isActive,
  setIsActive,
  startTimer,
  setIsStart,
}: Props) {
  const initialTime =
    +data.timerHour * 60 * 60 + +data.timerMin * 60 + +data.timerSec; // Timer
  const [time, setTime] = useState<number>(initialTime);
  let [restQuantity, setRestQuantity] = useState(0); // Quantity

  const [intervalCount, setIntervalCount] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [pauseCountdown, setPauseCountdown] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && time > 0 && !isPaused) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setIntervalCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (time === 0 || !isActive) {
      setIsStart(false);
      clearInterval(timerRef.current as NodeJS.Timeout);
    }

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [isActive, time, isPaused]);

  useEffect(() => {
    if (
      intervalCount === Math.round(initialTime / (+data.restQuantity + 1)) &&
      restQuantity !== +data.restQuantity
    ) {
      setIsPaused(true);
      setIntervalCount(0);
      const totalRestTime =
        +data.restTimerHour * 60 * 60 +
        +data.restTimerMin * 60 +
        +data.restTimerSec;
      let countdown = totalRestTime;
      setPauseCountdown(countdown);

      const pauseTimer = setInterval(() => {
        countdown -= 1;
        setPauseCountdown(countdown);

        if (countdown === 0) {
          clearInterval(pauseTimer);
          setIsPaused(false);
          setRestQuantity(restQuantity + 1);
        }
      }, 1000);
    }
  }, [intervalCount]);

  const formatTime = (time: number): string => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <section className="relative mx-auto my-8 flex h-[calc(100vh-67px-32px)] max-w-screen-sm flex-col items-center">
      <div
        className={`mx-8 flex h-72 w-72 flex-col items-center justify-center rounded-full border-4 ${isPaused ? "border-[#3FFF20]" : "border-gray"}`}
      >
        <div
          className={`text-4xl font-semibold ${isPaused ? "text-[#3FFF20]" : ""}`}
        >
          {isPaused ? formatTime(pauseCountdown) : formatTime(time)}
        </div>
        <div
          className={`mt-2 text-2xl font-light ${isPaused ? "text-[#3FFF20]" : ""}`}
        >
          {isPaused ? "Rest" : "Timer"}
        </div>
      </div>

      <div className="mx-8 mt-8 flex flex-col items-center justify-center">
        <div className="text-center text-xs">REMEMBER</div>
        <div className="text-center font-light">
          Success is the product of daily habits — not once-in-a-lifetime
          transformations.
        </div>
      </div>

      <div className="absolute bottom-8 flex w-full justify-between px-8">
        <button
          type="button"
          className="self-center rounded-md border border-transparent bg-primary/10 px-8 py-2 font-semibold text-primary outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={startTimer}
          className="self-center rounded-md border border-transparent bg-primary px-8 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </section>
  );
}

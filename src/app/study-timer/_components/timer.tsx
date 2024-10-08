"use client";

import React, {
  useState,
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
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
  setIsStart: Dispatch<SetStateAction<boolean>>;
  totalTime: number;
  totalRestTime: number;
  quote: string;
};
export function TimerView({
  data,
  isActive,
  setIsActive,
  setIsStart,
  totalTime,
  totalRestTime,
  quote,
}: Props) {
  const initialTime = totalTime;
  const [time, setTime] = useState<number>(initialTime);
  const [restQuantity, setRestQuantity] = useState(0); // Quantity

  const [intervalCount, setIntervalCount] = useState<number>(0);
  const [isRest, setIsRest] = useState<boolean>(false);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [isTimeEnded, setIsTimeEnded] = useState<boolean>(false);

  const [pauseCountdown, setPauseCountdown] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPause) {
      clearInterval(timerRef.current!);
    } else if (isActive && time > 0 && !isRest) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setIntervalCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (time === 0 || !isActive) {
      // setIsStart(false);
      // setIsActive(false);
      setIsTimeEnded(true);
      clearInterval(timerRef.current!);
    }

    return () => clearInterval(timerRef.current!);
  }, [isActive, time, isRest, isPause]);

  useEffect(() => {
    if (
      intervalCount === Math.round(initialTime / (+data.restQuantity + 1)) &&
      restQuantity !== +data.restQuantity
    ) {
      setIsRest(true);
      setIntervalCount(0);
      let countdown = totalRestTime;
      setPauseCountdown(countdown);

      const pauseTimer = setInterval(() => {
        countdown -= 1;
        setPauseCountdown(countdown);

        if (countdown === 0) {
          clearInterval(pauseTimer);
          setIsRest(false);
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

  const pauseTimer = () => {
    setIsPause(!isPause);
  };

  const resetTimer = () => {
    setIsStart(false);
    setIsActive(false);
  };

  return (
    <section className="relative mx-auto my-8 flex h-[calc(100vh-67px-32px)] max-w-screen-sm flex-col items-center">
      <div
        className={`mx-8 flex h-72 w-72 flex-col items-center justify-center rounded-full border-4 ${isRest ? "border-[#3FFF20]" : isTimeEnded ? "border-red" : "border-gray"}`}
      >
        <div
          className={`text-4xl font-semibold ${isRest ? "text-[#3FFF20]" : isTimeEnded ? "text-red" : ""}`}
        >
          {isRest ? formatTime(pauseCountdown) : formatTime(time)}
        </div>
        <div
          className={`mt-2 text-2xl font-light ${isRest ? "text-[#3FFF20]" : isTimeEnded ? "text-red" : ""}`}
        >
          {isRest ? "Rest" : "Timer"}
        </div>
      </div>

      <div className="mx-8 mt-8 flex flex-col items-center justify-center">
        <div className="text-center text-xs">REMEMBER</div>
        <div className="text-center font-light">{quote}</div>
      </div>

      <div
        className={`absolute bottom-8 flex w-full px-8 ${isTimeEnded ? "justify-center" : "justify-between"}`}
      >
        <button
          type="button"
          className="self-center rounded-md border border-transparent bg-primary/10 px-8 py-2 font-semibold text-primary outline-none focus:border-white active:translate-x-1 active:translate-y-1"
          onClick={() => resetTimer()}
        >
          Reset
        </button>
        {!isTimeEnded && (
          <button
            type="button"
            onClick={pauseTimer}
            className={`self-center rounded-md border border-transparent bg-primary px-8 py-2 font-semibold outline-none
            ${isRest ? "opacity-60" : "focus:border-white active:translate-x-1 active:translate-y-1"}
            `}
            disabled={isRest}
          >
            {isPause ? "Start" : "Pause"}
          </button>
        )}
      </div>
    </section>
  );
}

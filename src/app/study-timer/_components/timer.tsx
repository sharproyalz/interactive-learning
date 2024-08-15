"use client";

import React, { useState, useEffect, useRef } from "react";

export function TimerView() {
  const initialTime = 4800; // 1 hour 20 minutes in seconds
  const [time, setTime] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && time > 0) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 || !isActive) {
      clearInterval(timerRef.current as NodeJS.Timeout);
    }
    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [isActive, time]);

  const formatTime = (time: number): string => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleStartPause = (): void => {
    setIsActive(!isActive);
  };

  const handleReset = (): void => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    setTime(initialTime);
    setIsActive(false);
  };

  return (
    <section className="relative mx-auto my-8 flex h-[calc(100vh-67px-32px)] max-w-screen-sm flex-col items-center">
      <div className="mx-8 flex h-72 w-72 flex-col items-center justify-center rounded-full border-4 border-gray">
        <div className="text-4xl font-semibold">{formatTime(time)}</div>
        <div className="mt-2 text-2xl font-light">Timer</div>
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
          onClick={handleStartPause}
          className="self-center rounded-md border border-transparent bg-primary px-8 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </section>
  );
}

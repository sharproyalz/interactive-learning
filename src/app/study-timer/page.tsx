"use client";

import { useState } from "react";

function TimerComponent() {
  // Initialize state with an object
  const [timers, setTimers] = useState({
    timerHour: "",
    timerMin: "",
    timerSec: "",
    restEveryHour: "",
    restEveryMin: "",
    restEverySec: "",
    restTimerHour: "",
    restTimerMin: "",
    restTimerSec: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length <= 2 && +value >= 0 && +value <= 60) {
      setTimers({
        ...timers,
        [name]: value,
      });
    }
  };

  return (
    <section className="mx-auto my-8 max-w-screen-sm">
      <h1 className="text-center font-semibold italic">Study Timer</h1>

      <div className="mx-8 mt-12">
        {/* Timer */}
        <div>
          <div className="font-semibold">Timer</div>

          {/* Timer Container */}
          <div className="mt-2 flex justify-between">
            {/* Hour */}
            <div className="flex items-end">
              <input
                type="text"
                name="timerHour"
                id="timer-hour"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.timerHour}
                onChange={handleChange}
                required
              />
              <label htmlFor="timer-hour" className="text-sm font-light">
                hour
              </label>
            </div>

            {/* Minute */}
            <div className="flex items-end">
              <input
                type="text"
                name="timerMin"
                id="timer-min"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.timerMin}
                onChange={handleChange}
                required
              />
              <label htmlFor="timer-min" className="text-sm font-light">
                min
              </label>
            </div>

            {/* Second */}
            <div className="flex items-end">
              <input
                type="text"
                name="timerSec"
                id="timer-sec"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.timerSec}
                onChange={handleChange}
                required
              />
              <label htmlFor="timer-sec" className="text-sm font-light">
                sec
              </label>
            </div>
          </div>
        </div>

        {/* Rest every */}
        <div className="mt-8">
          <div className="font-semibold">Rest every</div>
          {/* Rest every Container*/}
          <div className="mt-2 flex justify-between">
            {/* Hour */}
            <div className="flex items-end">
              <input
                type="text"
                name="restEveryHour"
                id="rest-every-hour"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.restEveryHour}
                onChange={handleChange}
                required
              />
              <label htmlFor="rest-every-hour" className="text-sm font-light">
                hour
              </label>
            </div>

            {/* Minute */}
            <div className="flex items-end">
              <input
                type="text"
                name="restEveryMin"
                id="rest-every-min"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.restEveryMin}
                onChange={handleChange}
                required
              />
              <label htmlFor="rest-every-min" className="text-sm font-light">
                min
              </label>
            </div>

            {/* Second */}
            <div className="flex items-end">
              <input
                type="text"
                name="restEverySec"
                id="rest-every-sec"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.restEverySec}
                onChange={handleChange}
                required
              />
              <label htmlFor="rest-every-sec" className="text-sm font-light">
                sec
              </label>
            </div>
          </div>
        </div>

        {/* Rest timer */}
        <div className="mt-8">
          <div className="font-semibold">Rest timer</div>
          {/* Rest timer Container*/}
          <div className="mt-2 flex justify-between">
            {/* Hour */}
            <div className="flex items-end">
              <input
                type="text"
                name="restTimerHour"
                id="rest-timer-hour"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.restTimerHour}
                onChange={handleChange}
                required
              />
              <label htmlFor="rest-timer-hour" className="text-sm font-light">
                hour
              </label>
            </div>

            {/* Minute */}
            <div className="flex items-end">
              <input
                type="text"
                name="restTimerMin"
                id="rest-timer-min"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.restTimerMin}
                onChange={handleChange}
                required
              />
              <label htmlFor="rest-timer-min" className="text-sm font-light">
                min
              </label>
            </div>

            {/* Second */}
            <div className="flex items-end">
              <input
                type="text"
                name="restTimerSec"
                id="rest-timer-sec"
                className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                placeholder="00"
                value={timers.restTimerSec}
                onChange={handleChange}
                required
              />
              <label htmlFor="rest-timer-sec" className="text-sm font-light">
                sec
              </label>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="mt-12 flex justify-center ">
          <button
            type="button"
            className="self-center rounded-md border border-primary bg-primary px-12 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
          >
            Start
          </button>
        </div>
      </div>
    </section>
  );
}

export default TimerComponent;

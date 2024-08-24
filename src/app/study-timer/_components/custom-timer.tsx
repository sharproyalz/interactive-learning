"use client";

import { ArrowLeft } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { TimerView } from "~/app/study-timer/_components/timer";

export default function CustomTimerView({
  setIsCustomActive,
}: {
  setIsCustomActive: Dispatch<SetStateAction<boolean>>;
}) {
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
  const quoteNum = Math.floor(Math.random() * quotes.length + 1);

  const [isStart, setIsStart] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTimerEmpty, setIsTimerEmpty] = useState(false);
  // Initialize state with an object
  const [timers, setTimers] = useState({
    timerHour: "",
    timerMin: "",
    timerSec: "",
    restQuantity: "1",
    restTimerHour: "",
    restTimerMin: "",
    restTimerSec: "",
  });
  const totalTime =
    +timers.timerHour * 60 * 60 + +timers.timerMin * 60 + +timers.timerSec;
  const totalRestTime =
    +timers.restTimerHour * 60 * 60 +
    +timers.restTimerMin * 60 +
    +timers.restTimerSec;

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (value.length <= 2 && +value >= 0 && +value <= 60) {
      setTimers({
        ...timers,
        [name]: value,
      });
    }
  };

  // To know if timer is active
  const startTimer = (): void => {
    if (totalTime !== 0 && totalRestTime !== 0) {
      setIsTimerEmpty(false);
      setIsStart(true);
      setIsActive(!isActive);
      console.log(
        "isStart: ",
        isStart,
        "isTimerEmpty: ",
        isTimerEmpty,
        "isActive: ",
        isActive,
      );
    } else {
      setIsTimerEmpty(true);
    }
  };

  return (
    <>
      {isStart ? (
        <TimerView
          data={timers}
          isActive={isActive}
          setIsActive={setIsActive}
          setIsStart={setIsStart}
          totalTime={totalTime}
          totalRestTime={totalRestTime}
          quote={quotes[quoteNum]!}
        />
      ) : (
        <section className="relative mx-auto my-8 h-[calc(100vh-67px-32px)] max-w-screen-sm">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="absolute left-0 p-2 hover:bg-white hover:text-black"
              onClick={() => setIsCustomActive(false)}
            >
              <ArrowLeft />
            </button>
            <h1 className="text-center font-semibold italic">Custom Timer</h1>
          </div>

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
              <div className="font-semibold">Rest Quantity</div>
              {/* Rest every Container*/}
              <div className="mt-2 flex justify-between">
                {/* Second */}
                <div className="flex items-end">
                  <select
                    name="restQuantity"
                    id="rest-quantity"
                    className="w-12 rounded-md border border-gray bg-transparent p-2 text-center text-2xl font-semibold outline-none focus:border-white"
                    value={timers.restQuantity}
                    onChange={handleChange}
                    required
                  >
                    <option value="1" className="text-black">
                      1
                    </option>
                    <option value="2" className="text-black">
                      2
                    </option>
                    <option value="3" className="text-black">
                      3
                    </option>
                    <option value="4" className="text-black">
                      4
                    </option>
                  </select>
                  <label
                    htmlFor="rest-every-sec"
                    className="text-sm font-light"
                  >
                    time(s)
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
                  <label
                    htmlFor="rest-timer-hour"
                    className="text-sm font-light"
                  >
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
                  <label
                    htmlFor="rest-timer-min"
                    className="text-sm font-light"
                  >
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
                  <label
                    htmlFor="rest-timer-sec"
                    className="text-sm font-light"
                  >
                    sec
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Start Button */}
          <div className="absolute bottom-8 flex w-full flex-col items-center justify-center">
            {isTimerEmpty ? (
              <div className="mb-2 text-red">
                There must be at least 1 sec rest or timer.
              </div>
            ) : (
              ""
            )}

            <button
              type="button"
              className="self-center rounded-md border border-primary bg-primary px-12 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
              onClick={() => startTimer()}
            >
              Start
            </button>
          </div>
        </section>
      )}
    </>
  );
}

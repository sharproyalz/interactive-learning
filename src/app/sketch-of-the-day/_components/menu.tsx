import { formatSingleNumber } from "~/utils/format-single-number";
import { getMonthName } from "~/utils/get-month-name";

export function SketchMenuView() {
  const date = new Date();

  return (
    <section className="relative mx-auto my-8 flex h-[calc(100vh-67px-32px)] max-w-screen-sm flex-col items-center">
      <h1 className="text-center font-semibold italic">Sketch of the Day</h1>

      {/* Date and Category */}
      <div className="mt-32 flex flex-col items-center">
        <div className="font-light capitalize">
          {formatSingleNumber(date.getDate())}{" "}
          {getMonthName(date.getMonth())?.toLowerCase()}
        </div>
        <div className="text-2xl font-semibold text-primary">Celestial</div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-8 flex w-full flex-col gap-4 px-8">
        <button
          type="button"
          className="w-full rounded-md border border-transparent bg-primary px-8 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          Submit
        </button>
        <button
          type="button"
          className="w-full rounded-md border border-transparent bg-primary/10 px-8 py-2 font-semibold text-primary outline-none focus:border-white active:translate-x-1 active:translate-y-1"
        >
          Gallery
        </button>
      </div>
    </section>
  );
}

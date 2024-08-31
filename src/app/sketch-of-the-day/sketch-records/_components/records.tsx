"use client";

import { ArrowLeft } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { paths } from "~/paths";
import { api } from "~/trpc/react";
import { formatDate } from "~/utils/format-date";

export function SketchRecordsView() {
  const getSketchesQuery = api.sketch.getAll.useQuery();
  const sketches = getSketchesQuery.data;

  return (
    <>
      <section className="relative mx-auto my-8 flex h-[calc(100vh-67px-32px)] max-w-screen-sm flex-col items-center">
        <div className="flex items-center justify-center">
          <Link
            href={`${paths.SKETCH_OF_THE_DAY}`}
            className="absolute left-0 p-2 hover:bg-white hover:text-black"
          >
            <ArrowLeft />
          </Link>
          <h1 className="text-center font-semibold italic">Sketch Records</h1>
        </div>

        {/* SKetch Records */}
        <div className="flex flex-col gap-4">
          {sketches?.map((sketch) => (
            <div
              key={sketch.id}
              className="relative mt-8 flex h-48 w-72 object-fill shadow-[inset_0_-64px_128px_-72px_rgba(0,0,0,1)]"
            >
              <CldImage
                width="288"
                height="192"
                src={sketch.imageId ?? ""}
                alt="Sketch"
                className="relative -z-10 rounded-lg"
              />

              {/* Date and Category */}
              <div className="absolute bottom-2 flex w-full flex-col">
                <div className="px-4 text-2xl font-semibold text-primary">
                  {sketch.name}
                </div>
                <div className="px-4 font-light capitalize text-white">
                  {sketch?.date ? formatDate(sketch.date) : "No date available"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

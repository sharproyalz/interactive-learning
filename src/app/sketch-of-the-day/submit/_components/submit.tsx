"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  type OnSuccessUpload,
  ResourceType,
  UploadButton,
} from "~/components/upload-button";
import { paths } from "~/paths";
import { api } from "~/trpc/react";
import { schemas } from "~/zod-schemas/schemas";
import { toast } from "sonner";
import { type z } from "zod";
import { ArrowLeft } from "lucide-react";
import { formatSingleNumber } from "~/utils/format-single-number";
import { getMonthName } from "~/utils/get-month-name";
import { type DrawingTheme } from "@prisma/client";
import Link from "next/link";
import { getDayOfYear } from "~/utils/get-day-of-year";

type Props = {
  initialData: DrawingTheme[];
};

type Inputs = z.infer<typeof schemas.sketches.create>;

export default function SubmitSketchView({ initialData }: Props) {
  const date = new Date();
  const dayOfYear = getDayOfYear();
  const router = useRouter();

  const getDrawingThemeQuery = api.drawingTheme.getAll.useQuery(undefined, {
    initialData,
  });
  const drawingTheme = getDrawingThemeQuery.data[dayOfYear];

  const addSketchForm = useForm<Inputs>({
    resolver: zodResolver(schemas.sketches.create),
    defaultValues: {
      name: drawingTheme?.name,
    },
  });

  const addSketch = api.sketches.create.useMutation({
    onSuccess: async () => {
      toast.success("Sketch has been submitted.");
      console.log("Sketch has been submitted.");
      router.push(`${paths.SKETCH_OF_THE_DAY}`);
    },
  });

  const onSuccessUpload: OnSuccessUpload = (result) => {
    addSketchForm.setValue("image", result.info?.secure_url ?? "");
    addSketchForm.setValue("imageId", result.info?.public_id ?? "");
  };

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    addSketch.mutate(values);
    console.log(values);
  };
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
          <h1 className="text-center font-semibold italic">Submit a Sketch</h1>
        </div>

        {/* Date and Category */}
        <div className="mt-4 flex flex-col items-center">
          <div className="font-light capitalize">
            {formatSingleNumber(date.getDate())}{" "}
            {getMonthName(date.getMonth())?.toLowerCase()}
          </div>
          <div className="text-2xl font-semibold text-primary">
            {drawingTheme ? drawingTheme?.name : undefined}
          </div>
        </div>

        {/* Upload */}
        <form
          onSubmit={addSketchForm.handleSubmit(onSubmit, (err) =>
            console.log(err),
          )}
          className="flex   flex-col items-center"
        >
          <div>
            {addSketchForm.watch("imageId") ? (
              <div className="mt-8 flex h-48 w-72 object-fill">
                <CldImage
                  width="288"
                  height="192"
                  src={addSketchForm.watch("imageId") ?? ""}
                  alt="Sketch"
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="mt-8 h-48 w-72 rounded-lg bg-[#d9d9d9]"></div>
            )}

            <p className="text-destructive h-4 text-sm font-medium">
              {addSketchForm.formState.errors.image?.message}
            </p>
          </div>

          {/* Upload Button */}
          <UploadButton
            className="w-full rounded-md border border-transparent bg-primary/10 px-8 py-2 font-semibold text-primary outline-none focus:border-white active:translate-x-1 active:translate-y-1"
            folder="sketch-images"
            resourceType={ResourceType.IMAGE}
            onSuccess={onSuccessUpload}
          >
            Upload
          </UploadButton>

          <div className="absolute bottom-8 w-full px-8">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-primary px-8 py-2 font-semibold outline-none focus:border-white active:translate-x-1 active:translate-y-1"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

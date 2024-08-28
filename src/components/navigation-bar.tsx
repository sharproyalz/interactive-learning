"use client";

import { Activity, Clock, Pencil } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { paths } from "~/paths";

export function NavigationBar() {
  const path = usePathname();

  return (
    <nav className="absolute bottom-0 left-1/2 flex h-[67px] w-full max-w-screen-sm -translate-x-1/2 transform justify-between border-t border-gray px-8 py-4">
      <Link
        href={`${paths.STUDY_TIMER}`}
        className={`rounded-md border  p-1  text-blue hover:border-primary 
          ${path.includes(`${paths.STUDY_TIMER}`) ? "border-primary" : "border-transparent"}
          `}
      >
        <Clock />
      </Link>
      <Link
        href={`${paths.SKETCH_OF_THE_DAY}`}
        className={`rounded-md border  p-1 text-orange hover:border-primary 
          ${path.includes(`${paths.SKETCH_OF_THE_DAY}`) ? "border-primary" : "border-transparent"}
          `}
      >
        <Pencil />
      </Link>
      <Link
        href={`#`}
        className={`rounded-md border  p-1 text-red hover:border-primary 
          ${path.includes("/flashcard") ? "border-primary" : "border-transparent"}
          `}
      >
        <Activity />
      </Link>
    </nav>
  );
}

"use client";

import { Activity, Clock, Pencil } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationBar() {
  const path = usePathname();

  return (
    <nav className="absolute bottom-0 left-1/2 flex h-[67px] w-full max-w-screen-sm -translate-x-1/2 transform justify-between border-t border-gray px-8 py-4">
      <Link
        href={`#`}
        className={`text-blue rounded-md  border  p-1 hover:border-primary 
          ${path.includes("/study-timer") ? "border-primary" : "border-transparent"}
          `}
      >
        <Clock />
      </Link>
      <Link
        href={`#`}
        className={`text-orange rounded-md  border p-1 hover:border-primary 
          ${path.includes("/sketch-of-the-day") ? "border-primary" : "border-transparent"}
          `}
      >
        <Pencil />
      </Link>
      <Link
        href={`#`}
        className={`text-red rounded-md  border p-1 hover:border-primary 
          ${path.includes("/flashcard") ? "border-primary" : "border-transparent"}
          `}
      >
        <Activity />
      </Link>
    </nav>
  );
}

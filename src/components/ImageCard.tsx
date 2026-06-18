"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type TextWithImageCardProps = {
  img: string;
  index: number;
};

export function ImageCard({ img }: TextWithImageCardProps) {
  const isVideo =
    img.includes("/video/") ||
    img.endsWith(".mp4") ||
    img.endsWith(".webm") ||
    img.endsWith(".mov");

  return (
    <div
      id="project-image-wrapper"
      className={cn(
        "group overflow-hidden w-full flex justify-center items-center aspect-square",
      )}
    >
      {isVideo ? (
        <video
          src={img}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
        />
      ) : (
        <Image
          className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
          src={img}
          alt={img}
          height={450}
          width={450}
        />
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

type TextWithImageCardProps = {
  img: string;
  title: string;
  index: number;
};

export function ImageCard({ img, title, index }: TextWithImageCardProps) {
  return (
    <div
      id="project-image-wrapper"
      className={cn(
        "group overflow-clip w-full flex justify-center items-center aspect-square bg-black "
      )}
    >
      {img?.includes(".mp4") ? (
        <video
          className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
          src={img}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          className={` ${
            index == 34
              ? "scale-150 group-hover:scale-170"
              : "group-hover:scale-110"
          } object-cover w-[55%] max-h-full h-auto transition-all duration-500 ease-in-out group-hover:scale-110`}
          src={img}
          alt={`${title}`}
          height={450}
          width={450}
        />
      )}
    </div>
  );
}

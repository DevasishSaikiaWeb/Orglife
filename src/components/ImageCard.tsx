"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

type TextWithImageCardProps = {
  img: string;
  title: string;
};

export function ImageCard({ img, title }: TextWithImageCardProps) {
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
          className="object-cover w-[50%] max-h-full h-auto transition-all duration-500 ease-in-out group-hover:scale-110"
          src={img}
          alt={`${title}`}
          height={450}
          width={450}
        />
      )}
    </div>
  );
}

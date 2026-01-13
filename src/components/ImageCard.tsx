"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

type TextWithImageCardProps = {
  img: string;
  index: number;
};

export function ImageCard({ img, index }: TextWithImageCardProps) {
  return (
    <div
      id="project-image-wrapper"
      className={cn(
        "group overflow-clip w-full flex justify-center items-center aspect-square "
      )}
    >
      <Image
        className={` object-cover w-full h-full  transition-all duration-500 ease-in-out group-hover:scale-110`}
        src={img}
        alt={`${img}`}
        height={450}
        width={450}
      />
    </div>
  );
}

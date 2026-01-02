"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type TextWithImageCardProps = {
  img: string;
  title: string;
  squareImage?: boolean;
};

export function ImageCard({
  img,
  title,
  squareImage = false,

}: TextWithImageCardProps) {
  return (
    <div
      id="project-image-wrapper"
      className={cn(
        "overflow-clip w-full",
        squareImage ? "aspect-square" : "aspect-[4/4.5]"
      )}
    >
      {img?.includes(".mp4") ? (
        <video
          className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110"
          src={img}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          className="object-cover size-full transition-all duration-500 ease-in-out hover:scale-110"
          src={img}
          alt={`${title}`}
          height={450}
          width={squareImage ? 450 : 400}
        />
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type TextWithImageCardProps = {
  img: string;
  title: string;
  description: string;
  category: string[];
  squareImage?: boolean;
};

export function TextWithImageCard({
  img,
  title,
  description,
  squareImage = false,
  category,
}: TextWithImageCardProps) {
  return (
    <Link href={`/work/${title}`} className="flex flex-col">
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
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="font-body mt-4 text-wrap">{title}</p>
          <p className="font-small-body mt-2 text-muted-foreground text-wrap">
            {description}
          </p>
        </div>
        <div className="mt-6 flex gap-2 flex-wrap">
          {category.map((cat) => (
            <span
              key={cat}
              className="font-small-body border border-muted-foreground/75 py-0.5 px-4 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

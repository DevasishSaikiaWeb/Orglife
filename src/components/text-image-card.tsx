"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type TextWithImageCardProps = {
  img: string;
  title: string;
  description: string;
  category?: string[];
  squareImage?: boolean;
  type?: string;
  urlSlug?: string;
  date?: String;
  /**
   * Set false for display-only cards that have no destination page, so the card
   * renders as plain content instead of a link.
   */
  linked?: boolean;
  /**
   * Rendered width hint for next/image. Without it Next only generates a ~400px
   * image, which gets upscaled (and blurred) in wide grid columns.
   */
  sizes?: string;
};

export function TextWithImageCard({
  img,
  title,
  description,
  squareImage = false,
  category,
  type,
  urlSlug,
  date,
  linked = true,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: TextWithImageCardProps) {
  const content = (
    <>
      <div
        id="project-image-wrapper"
        className={cn(
          "overflow-clip w-full",
          squareImage ? "aspect-square" : "aspect-[4/4.5]",
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
            sizes={sizes}
            quality={85}
          />
        )}
      </div>
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className=" font-body mt-4 text-pretty lg:max-w-full">{title}</h3>
          <p className="font-xs-body mt-2 text-muted-foreground">{date}</p>
          <p className="font-small-body mt-2 text-muted-foreground text-wrap">
            {description}
          </p>
        </div>
        <div className="mt-6 flex gap-2 flex-wrap">
          {category?.map((cat) => (
            <span
              key={cat}
              className="font-small-body border border-muted-foreground/75 py-0.5 px-4 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const href =
    type === "event"
      ? `/events/${title}`
      : type === "blog"
        ? `/blogs/${urlSlug ?? title}`
        : type === "case-study"
          ? `/case-studies/${urlSlug ?? title}`
          : undefined;

  // No `type` means no destination, so the card renders as plain content.
  if (!linked || !href) {
    return <div className="flex flex-col">{content}</div>;
  }

  return (
    <Link href={href} className="flex flex-col">
      {content}
    </Link>
  );
}

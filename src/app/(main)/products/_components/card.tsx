"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// View360 uses WebGL and touches `document`/`window` at construction time,
// so it must render client-side only (no SSR).
const Panorama = dynamic(() => import("@/components/panorama"), { ssr: false });

type OfferingCardProps = {
  title: string;
  description?: string;
  img: string;
  /** Render `img` as an interactive 360°/VR panorama (equirectangular image or video). */
  is360?: boolean;
};

function isVideoFile(src: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(src) || src.includes("/video/");
}

export function OfferingCard({
  title,
  description,
  img,
  is360,
}: OfferingCardProps) {
  return (
    <section className="p-2 flex flex-col-reverse md:flex-row aspect-video gap-y-2 bg-foreground text-background">
      <div className="flex-1 p-2 py-4 md:p-8 flex flex-col justify-end">
        <p className="wrap-anywhere uppercase text-balance font-heading text-[2rem] leading-[90%] md:text-[3.25rem] md:leading-12 font-bold">
          {title}
        </p>
        {description && <p className="">{description}</p>}
      </div>
      <div className="aspect-square relative">
        {is360 ? (
          <Panorama src={img} video={isVideoFile(img)} />
        ) : isVideoFile(img) ? (
          <video
            className="size-full object-cover"
            src={img}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            alt={title}
            className="size-full object-cover"
            src={img}
            height={1080}
            width={1080}
            unoptimized
          />
        )}
      </div>
    </section>
  );
}

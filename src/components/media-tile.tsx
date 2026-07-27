"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { cn } from "@/lib/utils";

// View360 is WebGL + touches `document`, so it loads client-side only and is
// code-split out of the main bundle.
const Panorama = dynamic(() => import("@/components/panorama"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="size-full animate-pulse bg-foreground/10"
    />
  ),
});

type MediaTileProps = {
  src: string;
  alt?: string;
  /** Render `src` as an interactive 360°/VR panorama. */
  is360?: boolean;
  /**
   * "cover" fills a fixed-ratio box (default, used by carousels).
   * "natural" keeps the media's intrinsic ratio (used by masonry grids).
   */
  fit?: "cover" | "natural";
  /** Above-the-fold media: eager-load and raise fetch priority for LCP. */
  priority?: boolean;
  /** Poster frame for videos — prevents a blank box before the first frame. */
  poster?: string;
  sizes?: string;
  className?: string;
};

function isVideoFile(src: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(src) || src.includes("/video/");
}

export function MediaTile({
  src,
  alt = "",
  is360,
  fit = "cover",
  priority = false,
  poster,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
}: MediaTileProps) {
  const natural = fit === "natural";

  if (is360) {
    // View360 fills its container, so it always needs a fixed-ratio box.
    return (
      <div
        className={cn("relative aspect-video", className)}
        role="application"
        aria-label={alt ? `${alt} — interactive 360 degree view` : "Interactive 360 degree view"}
      >
        <Panorama src={src} video={isVideoFile(src)} />
      </div>
    );
  }

  if (isVideoFile(src)) {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        // Above-the-fold video loads immediately; the rest defers until needed.
        preload={priority ? "auto" : "metadata"}
        aria-label={alt || undefined}
        className={cn(
          natural ? "w-full h-auto" : "size-full object-cover",
          className,
        )}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      // width/height 0 + sizes + h-auto → render at the image's intrinsic ratio.
      width={natural ? 0 : 1200}
      height={natural ? 0 : 1200}
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        natural ? "w-full h-auto" : "size-full object-cover",
        className,
      )}
    />
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
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

/**
 * Pull the video id out of any YouTube link shape — youtu.be/ID,
 * /watch?v=ID, /embed/ID, /shorts/ID. Returns null for everything else.
 */
function youtubeId(src: string): string | null {
  const match = src.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
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
  const youtube = youtubeId(src);

  if (youtube) {
    // Autoplay is only permitted when muted — browsers block sound-on autoplay,
    // which matches how the local <video> tiles above already behave.
    // `loop` needs `playlist` set to the same id for a single video.
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playlist: youtube,
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
    });

    return (
      <div className={cn("relative size-full", natural && "aspect-video")}>
        <iframe
          // nocookie host: no tracking cookies until the viewer plays it.
          src={`https://www.youtube-nocookie.com/embed/${youtube}?${params}`}
          title={alt || "YouTube video"}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading={priority ? "eager" : "lazy"}
          className={cn("absolute inset-0 size-full border-0", className)}
        />
      </div>
    );
  }

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
      <ViewportVideo
        src={src}
        poster={poster}
        priority={priority}
        ariaLabel={alt}
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

/**
 * Autoplaying video that only runs while it is on screen.
 *
 * A media-heavy page can hold a dozen of these; letting them all decode at once
 * burns battery and main-thread time for frames nobody is looking at. The
 * observer pauses each one as it leaves the viewport and resumes it on return,
 * and never force-plays for viewers who asked for reduced motion.
 */
function ViewportVideo({
  src,
  poster,
  priority,
  ariaLabel,
  className,
}: {
  src: string;
  poster?: string;
  priority: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Once the viewer stops a video themselves — pausing it, or closing the
    // iOS fullscreen player — we stay out of the way. Without this the
    // observer resumes playback the next time the tile scrolls into view,
    // which on iOS re-opens fullscreen and feels like the page fighting back.
    let stoppedByViewer = false;
    let pausedByObserver = false;

    const onPause = () => {
      if (!pausedByObserver) stoppedByViewer = true;
      pausedByObserver = false;
    };
    const onExitFullscreen = () => {
      stoppedByViewer = true;
    };

    el.addEventListener("pause", onPause);
    el.addEventListener("webkitendfullscreen", onExitFullscreen);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduced && !stoppedByViewer) void el.play().catch(() => {});
        } else if (!el.paused) {
          pausedByObserver = true;
          el.pause();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("pause", onPause);
      el.removeEventListener("webkitendfullscreen", onExitFullscreen);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      // Legacy WebKit inline attribute — harmless elsewhere.
      {...{ "webkit-playsinline": "true" }}
      // Above-the-fold video loads immediately; the rest defers until needed.
      preload={priority ? "auto" : "metadata"}
      aria-label={ariaLabel || undefined}
      className={className}
    />
  );
}

"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  /** Auto-scroll speed in px per frame (~60fps). Set 0 to disable. */
  speed?: number;
};

export function Carousel({ children, className, speed = 0.6 }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  function scroll(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  // Continuous auto-scroll (ping-pong), paused while hovering the carousel.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || speed <= 0) return;

    let raf = 0;
    let direction = 1;

    const tick = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (!pausedRef.current && max > 0) {
        el.scrollLeft += speed * direction;
        if (el.scrollLeft >= max - 0.5) direction = -1;
        else if (el.scrollLeft <= 0.5) direction = 1;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div
      className={cn("relative group/carousel", className)}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      {/*
        Track — horizontal scroll; hidden scrollbar.
        No `data-lenis-prevent`: it would disable Lenis over this element, and
        since the track only scrolls horizontally, a vertical wheel would stick
        instead of scrolling the page. Letting Lenis handle the wheel keeps
        page scroll smooth; the carousel moves via auto-scroll, arrows and touch.
      */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scroll(-1)}
        className="absolute cursor-pointer left-1 md:-left-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full flex items-center justify-center bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scroll(1)}
        className="absolute cursor-pointer right-1 md:-right-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full flex items-center justify-center bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
}

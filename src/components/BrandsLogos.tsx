"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useReducedMotion,
  useMotionValue,
} from "framer-motion";



const BrandsLogos: React.FC = () => {
  // Define your 36 logos here (example: /public/logos/1.png ... /logos/36.png)
  const logos = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        alt: `Logo ${i + 1}`,
        src: `/logos/${i + 1}.png`,
      })),
    []
  );

  return (
    <section className="mb-4 mt-8 w-full py-8 md:py-0">
      <div className="mx-auto flex w-full flex-col gap-8">
        {/* Section Title */}

        {/* Logos */}
        <LogoMarquee logos={logos} speed={200} gap={64} height={128} />
      </div>
    </section>
  );
};

export default BrandsLogos;

function LogoMarquee({
  logos,
  speed = 60,
  gap = 64,
  height = 96,
}: {
  logos: { src: string; alt: string }[];
  speed?: number;
  gap?: number;
  height?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Measure content width and update on resize
  useEffect(() => {
    function measure() {
      if (!contentRef.current) return;

      // Force a layout calculation
      const rect = contentRef.current.getBoundingClientRect();
      const width = rect.width;
      setContentWidth(width);
    }

    // Initial measurement with a slight delay to ensure images are loaded
    const timer = setTimeout(measure, 100);

    const ro = new ResizeObserver(() => {
      // Debounce resize measurements
      setTimeout(measure, 50);
    });

    if (contentRef.current) {
      ro.observe(contentRef.current);
    }

    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [logos.length]);

  // Drive the animation manually for perfect seamless looping
  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || paused || contentWidth === 0) return;

    const deltaSeconds = delta / 1000;
    const pixelsToMove = speed * deltaSeconds;

    const currentX = x.get();
    let nextX = currentX - pixelsToMove;

    // Reset position when we've moved one full content width
    if (Math.abs(nextX) >= contentWidth) {
      nextX = nextX + contentWidth;
    }

    x.set(nextX);
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: height + 32 }}
      aria-label="Customer logos marquee"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Animated marquee track */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 flex items-center will-change-transform"
          style={{ x }}
        >
          {/* First copy of the content */}
          <div
            ref={contentRef}
            className="flex shrink-0 items-center"
            style={{ gap: `${gap}px` }}
          >
            {logos.map((logo, i) => (
              <LogoItem key={`original-${i}`} logo={logo} height={height} />
            ))}
          </div>

          {/* Second copy for seamless loop */}
          <div
            className="flex shrink-0 items-center"
            style={{ gap: `${gap}px`, marginLeft: `${gap}px` }}
            aria-hidden="true"
          >
            {logos.map((logo, i) => (
              <LogoItem key={`duplicate-${i}`} logo={logo} height={height} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Reduced motion fallback: static grid */}
      {prefersReducedMotion && (
        <div className="grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, i) => (
            <div
              key={`static-${i}`}
              className="flex items-center justify-center"
              style={{ height: `${height}px` }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={2000}
                height={120}
                className="max-h-full w-auto object-contain opacity-80"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LogoItem({
  logo,
  height,
}: {
  logo: { src: string; alt: string };
  height: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{
        height: `${height}px`,
        minWidth: "160px", // Ensure minimum width to prevent squishing
        width: "auto",
      }}
      title={logo.alt}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={160}
        height={80}
        className="max-h-full w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
        draggable={false}
        loading="lazy"
        style={{ maxWidth: "160px" }} // Prevent images from growing too large
      />
    </div>
  );
}

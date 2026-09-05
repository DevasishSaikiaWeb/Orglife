import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
  PLATFORMS,
  PLATFORMS_SECTION_SUBTITLE,
  PLATFORMS_SECTION_TITLE,
} from "@/constants/home";
import { SECTION_DOT } from "@/constants/site";
import { marqueeTiming } from "@/lib/marquee";

const DIR = "/assets/Logo/platforms";

const ITEM_PX = 256;

/** Read at build time so adding a logo file needs no code change. */
function readLogos(): string[] {
  return fs
    .readdirSync(path.join(process.cwd(), "public", DIR))
    .filter((file) => /\.(webp|png|jpe?g|avif|svg)$/i.test(file))
    .sort((a, b) => (Number.parseInt(a, 10) || 0) - (Number.parseInt(b, 10) || 0))
    .map((file) => `${DIR}/${file}`);
}

export function PlatformsSection() {
  const logos = readLogos();
  const timing = marqueeTiming(logos.length, ITEM_PX);
  const half = Array.from({ length: timing.repeat }, () => logos).flat();

  return (
    <section aria-label={PLATFORMS_SECTION_TITLE}>
      <div className="flex md:flex-row flex-col gap-x-8 gap-y-2">
        <h2 className="font-h3 [word-spacing:0.6rem] leading-[90%] flex-1 font-heading">
          {PLATFORMS_SECTION_TITLE}
          <span className="dot-text">{SECTION_DOT}</span>
        </h2>
        <p className="flex-1 font-body lg:max-w-none max-md:mt-1.5">
          {PLATFORMS_SECTION_SUBTITLE}
        </p>
      </div>

      <div className="logo-marquee mt-12">
        <ul
          className="logo-marquee-track gap-10 md:gap-16"
          style={
            { "--marquee-duration": `${timing.duration}s` } as React.CSSProperties
          }
        >
          {[...half, ...half].map((src, index) => {
            // Only the first pass is announced; the rest are visual repeats.
            const isClone = index >= logos.length;
            return (
              <li
                key={`${src}-${index}`}
                className="shrink-0 flex h-24 w-36 md:h-28 md:w-48 items-center justify-center"
              >
                <Image
                  src={src}
                  alt={isClone ? "" : (PLATFORMS[index] ?? "")}
                  aria-hidden={isClone}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  sizes="192px"
                  className="size-full object-contain"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

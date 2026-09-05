import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { marqueeTiming } from "@/lib/marquee";

function readLogos(dir: string): string[] {
  const files = fs.readdirSync(path.join(process.cwd(), "public", dir));
  return files
    .filter((file) => /\.(webp|png|jpe?g|avif|svg)$/i.test(file))
    // Numeric order, so 2.webp sorts before 10.webp.
    .sort((a, b) => (Number.parseInt(a, 10) || 0) - (Number.parseInt(b, 10) || 0))
    .map((file) => `${dir}/${file}`);
}

const GRID_DIR = "/assets/Logo";
const MARQUEE_DIR = "/assets/Logo/client-logo-marquee";

type LogoGridProps = {
  /** "grid" is the static clientele wall; "marquee" is the scrolling row. */
  variant?: "grid" | "marquee";
  /** Seconds for one loop. Defaults to a constant-speed value from the logo count. */
  duration?: number;
};

function MarqueeRow({
  logos,
  repeat,
  duration,
}: {
  logos: string[];
  repeat: number;
  duration: number;
}) {
  const half = Array.from({ length: repeat }, () => logos).flat();

  return (
    <ul
      className="logo-marquee-track gap-10 md:gap-16"
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      {[...half, ...half].map((src, index) => {
        // Only the first pass is announced; the rest are visual repeats.
        const isClone = index >= logos.length;
        return (
          <li
            key={`${src}-${index}`}
            className="shrink-0 flex h-16 w-24 md:h-20 md:w-32 items-center justify-center"
          >
            <Image
              src={src}
              alt={isClone ? "" : `Brand logo ${index + 1}`}
              aria-hidden={isClone}
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              sizes="128px"
              style={{ mixBlendMode: "plus-lighter" }}
              className="size-full object-contain"
            />
          </li>
        );
      })}
    </ul>
  );
}

export function LogoGrid({ variant = "grid", duration }: LogoGridProps) {
  const logos = readLogos(variant === "marquee" ? MARQUEE_DIR : GRID_DIR);
  const timing = marqueeTiming(logos.length);
  return (
    <section aria-label="Clientele">
      <div className="flex md:flex-row flex-col gap-x-8 gap-y-2">
        <h2 className="font-h3 [word-spacing:0.6rem] leading-[90%] flex-1 font-heading">
          Clientele
        </h2>
        <p
          className="flex-1 font-body lg:max-w-none max-md:mt-1.5"
          style={{ textWrap: "wrap" }}
        >
          From homegrown start-ups to legacy institutions, we’ve partnered with
          brands and organizations across industries to shape stories worth
          remembering.
        </p>
      </div>

      {variant === "marquee" ? (
        <div className="logo-marquee mt-20">
          <MarqueeRow
            logos={logos}
            repeat={timing.repeat}
            duration={duration ?? timing.duration}
          />
        </div>
      ) : (
        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {logos.map((src, index) => (
            <li
              key={src}
              className="group flex aspect-square items-center justify-center overflow-hidden"
            >
              <Image
                src={src}
                alt={`Brand logo ${index + 1}`}
                width={450}
                height={450}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                style={{ mixBlendMode: "plus-lighter" }}
                className="size-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

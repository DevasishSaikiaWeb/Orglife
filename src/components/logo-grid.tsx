import Image from "next/image";

const LOGO_COUNT = 28;

const LOGOS = Array.from(
  { length: LOGO_COUNT },
  (_, index) => `/assets/Logo/${index + 1}.webp`,
);
// public/assets/Logo/client-logo-marquee/1.png … 12.png
const MARQUEE_LOGO_COUNT = 12;

const MARQUEE_LOGOS = Array.from(
  { length: MARQUEE_LOGO_COUNT },
  (_, index) => `/assets/Logo/client-logo-marquee/${index + 1}.png`,
);

// Copies per half-track: six logos are narrower than a wide viewport, which
// would leave a gap mid-loop, so each half repeats until it overflows.
const MARQUEE_REPEAT = 3;

type LogoGridProps = {
  variant?: "grid" | "marquee";
  duration?: number;
};

function MarqueeRow({
  logos,
  offset,
  reverse,
  duration,
}: {
  logos: string[];
  offset: number;
  reverse?: boolean;
  duration: number;
}) {
  const half = Array.from({ length: MARQUEE_REPEAT }, () => logos).flat();

  return (
    <ul
      className={`logo-marquee-track gap-10 md:gap-16${
        reverse ? " logo-marquee-track--reverse" : ""
      }`}
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
              alt={isClone ? "" : `Brand logo ${offset + index + 1}`}
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

export function LogoGrid({ variant = "grid", duration = 60 }: LogoGridProps) {
  const half = Math.ceil(MARQUEE_LOGO_COUNT / 2);
  const topRow = MARQUEE_LOGOS.slice(0, half);
  const bottomRow = MARQUEE_LOGOS.slice(half);

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
        <div className="logo-marquee mt-12 flex flex-col gap-10 md:gap-16">
          <MarqueeRow logos={topRow} offset={0} duration={duration} />
          <MarqueeRow
            logos={bottomRow}
            offset={half}
            duration={duration}
            reverse
          />
        </div>
      ) : (
        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {LOGOS.map((src, index) => (
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

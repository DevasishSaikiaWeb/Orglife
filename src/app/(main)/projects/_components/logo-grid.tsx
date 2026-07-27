import Image from "next/image";

// public/assets/Logo/1.webp … 28.webp
const LOGO_COUNT = 28;

export function LogoGrid() {
  return (
    <section aria-label="Clientele">
      {/* Title (left) + description (right) — matches the category header. */}
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

      <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {Array.from({ length: LOGO_COUNT }).map((_, index) => {
          const src = `/assets/Logo/${index + 1}.webp`;
          return (
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
          );
        })}
      </ul>
    </section>
  );
}

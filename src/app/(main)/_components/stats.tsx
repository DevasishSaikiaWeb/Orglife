import {
  STATS,
  STATS_SECTION_SUBTITLE,
  STATS_SECTION_TITLE,
} from "@/constants/home";
import { SECTION_DOT } from "@/constants/site";

export function StatsSection() {
  return (
    <section aria-label="Stats">
      {/* Same title-left / description-right header as the Clientele section. */}
      <div className="flex md:flex-row flex-col gap-x-8 gap-y-2">
        <h2 className="font-h3 [word-spacing:0.6rem] leading-[90%] flex-1 font-heading">
          {STATS_SECTION_TITLE}
          <span className="dot-text">{SECTION_DOT}</span>
        </h2>
        <p className="flex-1 font-body lg:max-w-none max-md:mt-1.5">
          {STATS_SECTION_SUBTITLE}
        </p>
      </div>

      <ul className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <li
            key={stat.label}
            // Same ruled-column treatment as the case study narrative columns.
            className="max-sm:pt-8 sm:pl-4 max-sm:border-t sm:border-l border-muted-foreground/75 flex flex-col"
          >
            <p className="font-heading font-bold tracking-tight leading-[90%] text-[3.5rem] md:text-[5rem]">
              {stat.value}
              {stat.suffix && <span className="dot-text">{stat.suffix}</span>}
            </p>
            <p className="font-small-body mt-4 text-muted-foreground text-balance">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

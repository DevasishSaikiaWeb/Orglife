import type { GalleryMedia } from "@/constants/portfolio";
import { cn } from "@/lib/utils";
import { MediaTile } from "./media-tile";

type MediaGridProps = {
  items: GalleryMedia[];
  /** Prefixes each tile's alt text, e.g. the brand or product name. */
  altPrefix: string;
  className?: string;
};

/**
 * Two-column media grid where each item's `span` sets its width. Handles
 * images, video and 360 panoramas alike — `MediaTile` picks the renderer from
 * the file and the item's `is360` flag.
 */
export function MediaGrid({ items, altPrefix, className }: MediaGridProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",
        className,
      )}
    >
      {items.map((item, index) => {
        // Unset `span` keeps the common shape: big lead, rest two-up.
        const full = (item.span ?? (index === 0 ? "full" : "half")) === "full";
        return (
          <figure
            key={item.media}
            className={cn(
              "overflow-hidden bg-foreground/5",
              full ? "sm:col-span-2 aspect-video" : "aspect-[4/3]",
            )}
          >
            <MediaTile
              src={item.media}
              alt={`${altPrefix} — ${item.title}`}
              is360={item.is360}
              sizes={
                full
                  ? "(max-width: 768px) 100vw, 90vw"
                  : "(max-width: 640px) 100vw, 45vw"
              }
            />
            <figcaption className="sr-only">{item.title}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}

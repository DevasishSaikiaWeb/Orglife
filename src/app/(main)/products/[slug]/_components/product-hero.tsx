import { MediaTile } from "@/components/media-tile";

type ProductHeroProps = {
  src: string;
  title: string;
  /** Render `src` as an interactive 360°/VR panorama. */
  is360?: boolean;
  /** Above-the-fold: eager-load for a fast LCP. */
  priority?: boolean;
};

/**
 * Fixed-ratio hero box — the aspect ratio is reserved before the media loads,
 * so there is no layout shift (CLS).
 */
export function ProductHero({ src, title, is360, priority }: ProductHeroProps) {
  return (
    <section
      aria-label={`${title} showcase`}
      className="aspect-video relative overflow-hidden bg-foreground/5"
    >
      <MediaTile
        src={src}
        alt={title}
        is360={is360}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 100vw"
      />
    </section>
  );
}

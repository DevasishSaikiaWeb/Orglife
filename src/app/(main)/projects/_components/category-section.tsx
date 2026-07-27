import { Carousel } from "@/components/carousel";
import { MediaTile } from "@/components/media-tile";
import type { PortfolioCategory } from "@/constants/portfolio";

export function CategorySection({ category }: { category: PortfolioCategory }) {
  return (
    <section>
      {/* Title (left) + description (right, full column width to the edge) */}
      <div className="flex md:flex-row flex-col gap-x-8 gap-y-2">
        <h2 className="font-h3 [word-spacing:0.6rem] leading-[90%] flex-1 font-heading">
          {category.title}
        </h2>
        <p className="flex-1 font-body lg:max-w-none max-md:mt-1.5">
          {category.description}
        </p>
      </div>

      {/* Carousel of project slides */}
      <div className="mt-8">
        <Carousel>
          {category.items.map((item) => (
            <article
              key={item.title}
              className="shrink-0 w-[82%] sm:w-[55%] lg:w-[40%] transition-all duration-300 group-hover/carousel:opacity-40 group-hover/carousel:blur-[2px] hover:!opacity-100 hover:!blur-none"
            >
              <div className="aspect-video overflow-hidden bg-foreground/5">
                <MediaTile src={item.media} alt={item.title} is360={item.is360} />
              </div>
              <p className="font-body mt-3">{item.title}</p>
              {item.tag && (
                <p className="font-small-body text-muted-foreground">
                  {item.tag}
                </p>
              )}
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

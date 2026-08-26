import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1 } from "@/components/heading";
import { JsonLd } from "@/components/json-ld";
import { MediaTile } from "@/components/media-tile";
import { Carousel } from "@/components/carousel";
import {
  CASE_STUDIES,
  caseStudyMedia,
  getCaseStudy,
} from "@/constants/caseStudies";
import {
  breadcrumbSchema,
  creativeWorkSchema,
  faqSchema,
  graph,
  mediaSchemas,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return buildMetadata({
    title: `${study.brand} — Case Study`,
    description: study.intro,
    path: `/case-studies/${slug}`,
    type: "article",
    section: "Case Studies",
    keywords: [study.brand, ...study.industries, "case study", "brand work"],
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const path = `/case-studies/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.brand, path },
  ];

  // Every case renders the same three columns, numbered by position.
  const cases = study.cases.map((entry, index) => ({
    id: `CASE #${index + 1}`,
    columns: [
      { label: "THE CASE", text: entry.thecase },
      { label: "THE OPPORTUNITY", text: entry.theopportunity },
      { label: "WHAT WE DELIVERED", text: entry.whatwedelivered },
    ],
    layout: entry.layout ?? "carousel",
    gallery: entry.gallery,
  }));

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: `${study.brand} — Case Study`,
            description: study.intro,
            path,
            primaryImage: study.heroImage,
          }),
          breadcrumbSchema(crumbs),
          creativeWorkSchema({
            name: `${study.brand} — Case Study`,
            description: `${study.intro} ${study.cases
              .map((entry) => entry.whatwedelivered)
              .join(" ")}`,
            path,
            image: study.heroImage,
            keywords: [study.brand, ...study.industries],
          }),
          // The three narrative columns double as Q&A for AI search engines.
          faqSchema(
            cases.flatMap((entry) =>
              entry.columns.map((column) => ({
                question: `${study.brand} ${entry.id}: ${column.label}?`,
                answer: column.text,
              })),
            ),
          ),
          mediaSchemas(caseStudyMedia(study), `${study.brand} case study`),
        )}
      />
      <main
        id="main-content"
        className="space-y-16 md:space-y-28 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <section>
          <Breadcrumbs crumbs={crumbs} />
          <Heading1 title={study.brand} subtitle={study.intro} />
        </section>

        <section
          aria-label={`${study.brand} showcase`}
          className="aspect-video overflow-hidden bg-foreground/5"
        >
          <MediaTile
            src={study.heroImage}
            alt={`${study.brand} — case study hero`}
            is360={study.heroIs360}
            priority
            sizes="100vw"
          />
        </section>

        {cases.map((entry) => (
          <section key={entry.id} aria-label={`${study.brand} — ${entry.id}`}>
            <div className="flex md:flex-row flex-col gap-x-8 gap-y-12">
              <div className="flex-1">
                <h2 className="font-heading uppercase font-h4 font-semibold">
                  {entry.id}
                </h2>
              </div>

              <div className="flex-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {entry.columns.map((column) => (
                  <div
                    key={column.label}
                    className="max-md:pt-8 md:pl-4 max-md:border-t md:border-l border-muted-foreground/75 flex flex-col"
                  >
                    <h3 className="uppercase font-heading font-h4 font-semibold">
                      {column.label}
                    </h3>
                    <p className="font-small-body leading-relaxed mt-6 text-muted-foreground">
                      {column.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {entry.gallery.length > 0 &&
              (entry.layout === "grid" ? (
                // Lead item full width, everything after it two-up beneath.
                <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {entry.gallery.map((item, index) => {
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
                          alt={`${study.brand} — ${item.title}`}
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
              ) : (
                <Carousel className="mt-12 md:mt-16">
                  {entry.gallery.map((item) => (
                    <figure
                      key={item.media}
                      className="shrink-0 w-full aspect-video overflow-hidden bg-foreground/5"
                    >
                      <MediaTile
                        src={item.media}
                        alt={`${study.brand} — ${item.title}`}
                        is360={item.is360}
                        sizes="(max-width: 768px) 100vw, 90vw"
                      />
                      <figcaption className="sr-only">{item.title}</figcaption>
                    </figure>
                  ))}
                </Carousel>
              ))}
          </section>
        ))}

        <ContactForPartnership />
      </main>
    </>
  );
}

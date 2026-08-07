import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1 } from "@/components/heading";
import { JsonLd } from "@/components/json-ld";
import { MediaTile } from "@/components/media-tile";
import { CASE_STUDIES, getCaseStudy } from "@/constants/caseStudies";
import {
  breadcrumbSchema,
  creativeWorkSchema,
  faqSchema,
  graph,
  mediaSchemas,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Image from "next/image";

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

  const columns = [
    { label: "What they said", text: study.whatTheySaid },
    { label: "Opportunity we saw", text: study.opportunity },
    { label: "What we delivered", text: study.delivered },
  ];

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
            description: `${study.intro} ${study.delivered}`,
            path,
            image: study.heroImage,
            keywords: [study.brand, ...study.industries],
          }),
          // The three narrative columns double as Q&A for AI search engines.
          faqSchema(
            columns.map((column) => ({
              question: `${study.brand}: ${column.label}?`,
              answer: column.text,
            })),
          ),
          mediaSchemas(study.gallery, `${study.brand} case study`),
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

        <section className="flex md:flex-row flex-col gap-x-8 gap-y-12">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="font-small-body text-muted-foreground">Brand</h2>
              <p className="font-heading uppercase font-h4 font-semibold mt-1">
                {study.brand}
              </p>
            </div>
            <div>
              <h2 className="font-small-body text-muted-foreground">
                Industries
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {study.industries.map((industry) => (
                  <li
                    key={industry}
                    className="font-small-body border border-muted-foreground/75 py-0.5 px-4 rounded-full"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {columns.map((column) => (
              <div
                key={column.label}
                className="max-md:pt-8 md:pl-4 max-md:border-t md:border-l border-muted-foreground/75 flex flex-col"
              >
                <h2 className="uppercase font-heading font-h4 font-semibold">
                  {column.label}
                </h2>
                <p className="font-small-body leading-relaxed mt-6 text-muted-foreground">
                  {column.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Image
  src="/assets/Projects/Sswai_Logo.png"
  alt="Sswai Logo"
  className="w-full h-auto object-fill"
  width={1080}
  height={720}
/>

        <section
          aria-label={`${study.brand} gallery`}
          className="columns-1 sm:columns-2 lg:columns-2 gap-4 [column-fill:balance]"
        >
          {study.gallery.map((item) => (
            <figure key={item.title} className="mb-4 break-inside-avoid">
              <MediaTile
                src={item.media}
                alt={`${study.brand} — ${item.title}`}
                is360={item.is360}
                fit="natural"
              />
              <figcaption className="sr-only">{item.title}</figcaption>
            </figure>
          ))}
        </section>

        <ContactForPartnership />
      </main>
    </>
  );
}

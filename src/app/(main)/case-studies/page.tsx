import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1 } from "@/components/heading";
import { JsonLd } from "@/components/json-ld";
import { TextWithImageCard } from "@/components/text-image-card";
import { CASE_STUDIES } from "@/constants/caseStudies";
import { SECTION_DOT } from "@/constants/site";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const TITLE = "Exploring a new world of creative possibilities";
const DESCRIPTION =
  "This is where their needs met our special skills. Our archive of projects is more than a portfolio — it’s a reflection of the creative ideas we’ve brought to life.";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
];

export const metadata = buildMetadata({
  title: "Case Studies — Brand Work by Orglife",
  description:
    "In-depth case studies from Orglife: the Indian Army, Ministry of External Affairs, SSWAI, Karnavati University, Volkswagen and more — what they said, the opportunity we saw and what we delivered.",
  path: "/case-studies",
  section: "Case Studies",
  keywords: CASE_STUDIES.flatMap((study) => [study.brand, ...study.industries]),
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Case Studies — Brand Work by Orglife",
            description: DESCRIPTION,
            path: "/case-studies",
            type: "CollectionPage",
          }),
          breadcrumbSchema(CRUMBS),
          itemListSchema(
            CASE_STUDIES.map((study) => ({
              name: study.brand,
              path: `/case-studies/${study.slug}`,
            })),
            "Orglife Case Studies",
          ),
        )}
      />
      <main
        id="main-content"
        className="space-y-32 md:space-y-48 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <section>
          <Breadcrumbs crumbs={CRUMBS} />
          <Heading1 title={TITLE} subtitle={DESCRIPTION} dot={SECTION_DOT} />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
            {CASE_STUDIES.map((study) => (
              <TextWithImageCard
                key={study.slug}
                type="case-study"
                urlSlug={study.slug}
                img={study.cardImage}
                title={study.brand}
                description={study.cardDescription}
                category={study.industries}
              />
            ))}
          </div>
        </section>

        <ContactForPartnership />
      </main>
    </>
  );
}

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { JsonLd } from "@/components/json-ld";
import {
  OFFERING_CARDS,
  OFFERING_DETAILS,
  PAGE_DETAILS_SUBTITLE2,
  PAGE_DETAILS_TITLE2,
} from "@/constants/offerings";
import { SERVICES } from "@/constants/site";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
  offerCatalogSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { OfferingCard } from "./_components/card";
import { DetailsCard } from "./_components/details-card";
import { PageDetails } from "./_components/page-details";
import { Heading1 } from "@/components/heading";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/offerings" },
];

export const metadata = buildMetadata({
  title: "Services — Branding, Content, Digital & AI",
  description:
    "Orglife's services: brand foundation design, visual content and communication, and brand digital assets — including UI/UX, custom AI tools and immersive AR/VR experiences.",
  path: "/offerings",
  section: "Services",
  keywords: [
    "brand foundation design",
    "visual content and communication",
    "brand digital assets",
    "creative services India",
  ],
});

export default function OffetingsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Services — Branding, Content, Digital & AI",
            description:
              "Brand foundation design, visual content and communication, and brand digital assets from Orglife.",
            path: "/offerings",
            type: "CollectionPage",
          }),
          breadcrumbSchema(CRUMBS),
          offerCatalogSchema(),
          itemListSchema(
            SERVICES.map((service) => ({ name: service.name, path: service.url })),
            "Orglife Services",
          ),
        )}
      />
    <main
      id="main-content"
      className="space-y-16 md:space-y-28 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div>
        <Breadcrumbs crumbs={CRUMBS} />
        <PageDetails />
      </div>

      {OFFERING_CARDS.map((service, index) => (
        <div className="space-y-8" key={service.title}>
          <OfferingCard key={service.title} {...service} />
          <DetailsCard
            key={`item-${OFFERING_DETAILS[index].title}`}
            {...OFFERING_DETAILS[index]}
          />
        </div>
      ))}

      <section>
        <Heading1 title={PAGE_DETAILS_TITLE2} subtitle={PAGE_DETAILS_SUBTITLE2} />
      </section>
      <ContactForPartnership />
    </main>
    </>
  );
}

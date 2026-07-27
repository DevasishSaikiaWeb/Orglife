import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { JsonLd } from "@/components/json-ld";
import { FAQS, SITE } from "@/constants/site";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { PageDetails } from "./_components/page-details";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata = buildMetadata({
  title: "Contact — Start a Project with Orglife",
  description: `Get in touch with Orglife in ${SITE.address.locality}. Tell us about your brand, pick the services you need and we'll get back to you about partnerships and new business.`,
  path: "/contact",
  section: "Contact",
  keywords: [
    "contact Orglife",
    "creative agency Ahmedabad contact",
    "brand consultation India",
    "hire creative agency",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Contact — Start a Project with Orglife",
            description:
              "Contact Orglife for branding, content, digital and AI projects.",
            path: "/contact",
            type: "ContactPage",
          }),
          breadcrumbSchema(CRUMBS),
          localBusinessSchema(),
          faqSchema(FAQS),
        )}
      />
      <main
        id="main-content"
        className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div>
          <Breadcrumbs crumbs={CRUMBS} />
          <PageDetails />
        </div>
        <ContactForPartnership />
      </main>
    </>
  );
}

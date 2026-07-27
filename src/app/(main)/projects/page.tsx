import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1 } from "@/components/heading";
import { JsonLd } from "@/components/json-ld";
import { PORTFOLIO_CATEGORIES } from "@/constants/portfolio";
import {
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_TITLE,
} from "@/constants/projects";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CategorySection } from "./_components/category-section";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export const metadata = buildMetadata({
  title: "Projects — Content, Branding, AI, Web, Motion & Social",
  description:
    "Browse Orglife's portfolio by category: content strategy, branding, AI creatives, web development, motion visuals and social creatives — with 360°, video and image showcases.",
  path: "/projects",
  section: "Portfolio",
  keywords: PORTFOLIO_CATEGORIES.map((category) => category.title),
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Projects — Orglife Portfolio",
            description: PAGE_DETAILS_SUBTITLE,
            path: "/projects",
            type: "CollectionPage",
          }),
          breadcrumbSchema(CRUMBS),
        )}
      />
      <main
        id="main-content"
        className="space-y-32 md:space-y-48 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <section>
          <Breadcrumbs crumbs={CRUMBS} />
          <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
        </section>

        {PORTFOLIO_CATEGORIES.map((category) => (
          <CategorySection key={category.slug} category={category} />
        ))}

        <ContactForPartnership />
      </main>
    </>
  );
}

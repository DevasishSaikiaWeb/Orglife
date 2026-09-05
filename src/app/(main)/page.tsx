import { BlogsSection } from "@/components/blogs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { JsonLd } from "@/components/json-ld";
import { LogoGrid } from "@/components/logo-grid";
import { FAQS, SERVICES, SITE } from "@/constants/site";
import {
  faqSchema,
  graph,
  itemListSchema,
  offerCatalogSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { CurrentProjectsSection } from "./_components/current-projects";
import { HeroSection } from "./_components/hero";
import Memories from "./_components/Memories";
import { PlatformsSection } from "./_components/platforms";
import { ProjectsSection } from "./_components/projects";
import { StatsSection } from "./_components/stats";
import { TeamSection } from "./_components/team";

export const metadata = buildMetadata({
  title: `${SITE.name} — Creative Content & AI-Powered Tech Studio`,
  description: SITE.description,
  path: "/",
  keywords: [
    "creative studio India",
    "AI powered branding",
    "brand storytelling agency",
    "immersive brand experiences",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: `${SITE.name} — Creative Content & AI-Powered Tech Studio`,
            description: SITE.description,
            path: "/",
          }),
          offerCatalogSchema(),
          faqSchema(FAQS),
          itemListSchema(
            SERVICES.map((service) => ({ name: service.name, path: service.url })),
            "Orglife Services",
          ),
        )}
      />
      <main
        id="main-content"
        className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <HeroSection />
        <TeamSection />
        <div className="-mb-8 md:-mb-16" />
        <CurrentProjectsSection />
        <ProjectsSection />
        <Memories />
        <StatsSection />
        <LogoGrid variant="marquee" />
        <PlatformsSection />
        <BlogsSection />
        <ContactForPartnership />
      </main>
    </>
  );
}

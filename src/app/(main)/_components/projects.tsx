import { Heading2 } from "@/components/heading";
import { TextWithImageCard } from "@/components/text-image-card";
import {
  PROJECTS_SECTION_SUBTITLE,
  PROJECTS_SECTION_TITLE,
} from "@/constants/home";
import { SECTION_DOT } from "@/constants/site";
import { PROJECTS } from "@/constants/projects";

type ProjectsProps = {
  visibleCards?: number;
};

export function ProjectsSection({ visibleCards = 3 }: ProjectsProps) {
  return (
    <section>
      <Heading2
        title={PROJECTS_SECTION_TITLE}
        subtitle={PROJECTS_SECTION_SUBTITLE}
        dot={SECTION_DOT}
        action={{
          href: "/products",
          label: "Products",
        }}
      />

      {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16"> */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.slice(0, visibleCards).map((project) => (
          // Display-only: these three have no detail page, so the section's
          // "Products" button is the only route out.
          <TextWithImageCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={project.description}
            category={project.category}
            linked={false}
          />
        ))}
      </div>
    </section>
  );
}

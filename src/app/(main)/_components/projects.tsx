import { Heading2 } from "@/components/heading";
import { TextWithImageCard } from "@/components/text-image-card";
import {
  PROJECTS_SECTION_SUBTITLE,
  PROJECTS_SECTION_TITLE,
} from "@/constants/home";
import { PROJECTS } from "@/constants/projects";

type ProjectsProps = {
  visibleCards?: number;
};

export function ProjectsSection({ visibleCards = 4 }: ProjectsProps) {
  return (
    <section>
      <Heading2
        title={PROJECTS_SECTION_TITLE}
        subtitle={PROJECTS_SECTION_SUBTITLE}
        action={{
          href: "/work",
          label: "Our Work",
        }}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16">
        {PROJECTS.slice(0, visibleCards).map((project) => (
          <TextWithImageCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={project.description}
            category={project.category}
          />
        ))}
      </div>
    </section>
  );
}

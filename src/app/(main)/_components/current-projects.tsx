import { Heading2 } from "@/components/heading";
import { TextWithImageCard } from "@/components/text-image-card";
import {
  CURRENT_PROJECTS_SECTION_SUBTITLE,
  CURRENT_PROJECTS_SECTION_TITLE,
} from "@/constants/home";
import { CURRENT_PROJECTS } from "@/constants/projects";

type CurrentProjectsProps = {
  visibleCards?: number;
};

export function CurrentProjectsSection({
  visibleCards = 4,
}: CurrentProjectsProps) {
  return (
    <section>
      <Heading2
        title={CURRENT_PROJECTS_SECTION_TITLE}
        subtitle={CURRENT_PROJECTS_SECTION_SUBTITLE}
        action={{
          href: "/work",
          label: "Our Work",
        }}
      />

      {/* <div className="mt-8">{isCompact ? <>isCompact</> : <>no</>}</div> */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16">
        {CURRENT_PROJECTS.slice(0, visibleCards).map((project) => (
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

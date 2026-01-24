import { Heading2 } from "@/components/heading";
import { TextWithImageCard } from "@/components/text-image-card";
import {
  MEMORIES_SECTION_SUBTITLE,
  MEMORIES_SECTION_TITLE,
} from "@/constants/home";
import { MemoriesData } from "@/constants/Memories";
import React from "react";
function Memories() {
  return (
    <section>
      <Heading2
        title={MEMORIES_SECTION_TITLE}
        subtitle={MEMORIES_SECTION_SUBTITLE}
        action={{
          label: "Our Events",
        }}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16">
        {MemoriesData.slice(0, 2).map((project) => (
          <TextWithImageCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Memories;

import { TextWithImageCard } from "@/components/text-image-card";
import { CURRENT_PROJECTS, PROJECTS } from "@/constants/projects";

function Work() {
  return (
    <section className="">
      {
        <div className="mt-8 mb-40 grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-16">
          {[...CURRENT_PROJECTS, ...PROJECTS].map((project) => (
            <TextWithImageCard
              key={project.title}
              img={project.img}
              title={project.title}
              description={project.description}
              category={project.category}
            />
          ))}
        </div>
      }
    </section>
  );
}

export default Work;

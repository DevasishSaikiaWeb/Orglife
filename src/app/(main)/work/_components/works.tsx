import { ImageCard } from "@/components/ImageCard";
import { CURRENT_PROJECTS, PROJECTS } from "@/constants/projects";

function Work() {
  return (
    <section className="">
      {
        <div className="mt-8 mb-40 grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-8">
          {[...PROJECTS, ...CURRENT_PROJECTS].map((project) => (
            <ImageCard
              key={project.title}
              img={project.img}
              title={project.title}
            />
          ))}
        </div>
      }
    </section>
  );
}

export default Work;

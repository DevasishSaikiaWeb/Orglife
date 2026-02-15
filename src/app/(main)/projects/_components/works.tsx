import { ImageCard } from "@/components/ImageCard";
import { CURRENT_PROJECTS, PROJECTS } from "@/constants/projects";

function Work() {
  return (
    <section className="">
      {
        <div className="mt-8 mb-40 grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-8">
          {Array.from({ length: 36 }).map((project, i) => (
            <ImageCard key={i} img={`/logos/${i + 1}.jpg`} index={i} />
          ))}
        </div>
      }
    </section>
  );
}

export default Work;

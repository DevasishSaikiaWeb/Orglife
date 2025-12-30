import { OTHER_PROJECTS } from "@/constants/projects";
import Image from "next/image";

function Work2() {
  return (
    <section className="">
      {
        <div className="mt-8 mb-40 grid grid-cols-1 md:grid-cols-1 gap-6">
          {OTHER_PROJECTS.map((projects, index) => (
            <div
              className={
                projects.length > 1
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "grid grid-cols-1 md:grid-cols-1 gap-6"
              }
              key={index}
            >
              {projects.map((project) => (
                <div className="h-full w-full  rounded-lg group overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="object-cover h-full w-full rounded-lg transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    </section>
  );
}

export default Work2;

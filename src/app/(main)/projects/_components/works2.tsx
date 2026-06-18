import { OTHER_PROJECTS } from "@/constants/projects";
import Image from "next/image";

function Work2() {
  return (
    <section>
      <div className="mt-8 mb-40 grid grid-cols-1 gap-6">
        {OTHER_PROJECTS.map((projects, index) => (
          <div
            key={index}
            className={
              projects.length > 1
                ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                : "grid grid-cols-1 gap-6"
            }
          >
            {projects.map((project, projectIndex) => {
              const isVideo =
                project.image.includes("/video/") ||
                project.image.endsWith(".mp4");

              return (
                <div
                  key={projectIndex}
                  className="h-full w-full group overflow-hidden"
                >
                  {isVideo ? (
                    <video
                      src={project.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="object-cover h-full w-full transition-all duration-500 ease-in-out group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="object-cover h-full w-full transition-all duration-500 ease-in-out group-hover:scale-110"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work2;

import Image from "next/image";
import { Heading1, Heading4 } from "@/components/heading";
import {
  PAGE_UPCOMMING_SUBTITLE,
  PAGE_UPCOMMING_TITLE,
  PROJECTS,
} from "@/constants/upcomming";

export function PageDetails() {
  return (
    <section>
      <Heading1
        title={PAGE_UPCOMMING_TITLE}
        subtitle={PAGE_UPCOMMING_SUBTITLE}
      />

      <div className="mt-20 flex flex-col gap-20">
        {PROJECTS.map((data) => (
          <div>
            {data.image.includes(".mp4") ? (  
              <video
                src={data.image}
                width={800}
                height={600}
                className="w-full mt-8"
                autoPlay
                loop
                muted
              />
            ) : (
              <Image
                src={data.image}
                alt="Work Details"
                width={800}
                height={600}
                className="w-full mt-8"
              />
            )}

            <div className="mt-16 w-1/2 max-sm:w-full ml-auto">
              <div className="mb-12">
                <Heading4 title={data?.title} />
                {data?.sections &&
                  data?.sections?.map((para: string, index: number) => (
                    <p
                      style={{ maxWidth: "100%" }}
                      className="text-[18px] leading-[160%] w-full text-balance font-medium flex-1 mt-6 text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Heading1, Heading4 } from "@/components/heading";
import { Project_Details } from "@/constants/projectDetails";

export function PageDetails({ data }: { data: Project_Details }) {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <Heading1 title={data.title} subtitle={data.subTitle} />

      {data.main_image.includes(".mp4") ? (
        <video
          src={data.main_image}
          width={800}
          height={600}
          className="w-full mt-8"
          autoPlay
          loop
          muted
        />
      ) : (
        <Image
          src={data.main_image}
          alt="Work Details"
          width={800}
          height={600}
          className="w-full mt-8"
        />
      )}

      <div className="mt-16 w-1/2 max-sm:w-full ml-auto">
        <div className="mb-12">
          <Heading4 title={data?.main_content?.title} />
          {data?.main_content?.paragraphs &&
            data?.main_content?.paragraphs?.map(
              (para: string, index: number) => (
                <p
                  style={{ maxWidth: "100%" }}
                  className="text-[18px] leading-[160%] w-full text-balance font-medium flex-1 mt-6 text-muted-foreground"
                >
                  {para}
                </p>
              )
            )}
        </div>
      </div>

      <div>
        {data.sections.map((section, sIndex) => (
          <div key={sIndex} className="mt-16">
            {section?.main_image && (
              <>
                {section.main_image.includes(".mp4") ? (
                  <video
                    src={section.main_image}
                    width={800}
                    height={600}
                    className="w-full"
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <Image
                    src={section.main_image}
                    alt={`Section Image ${sIndex + 1}`}
                    width={800}
                    height={600}
                    className="w-full"
                  />
                )}
              </>
            )}
            {section?.half_image && (
              <div
                className={`mt-8 grid  gap-8 ${
                  section.half_image.length > 1 ? "grid-cols-2" : ""
                }`}
              >
                {section?.half_image.map((imgSrc) => {
                  return imgSrc.includes(".mp4") ? (
                    <video
                      src={imgSrc}
                      width={800}
                      height={600}
                      className={
                        section.half_image.length > 1
                          ? " aspect-square"
                          : "w-full"
                      }
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <Image
                      src={imgSrc}
                      alt={`Section Image ${sIndex + 1}`}
                      width={800}
                      height={600}
                      className={
                        section.half_image.length > 1
                          ? "aspect-square"
                          : "w-full"
                      }
                    />
                  );
                })}
              </div>
            )}

            {section.second_image && (
              <div className="mt-8">
                {section.second_image.includes(".mp4") ? (
                  <video
                    src={section.second_image}
                    width={800}
                    height={600}
                    className="w-full"
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <Image
                    src={section.second_image}
                    alt={`Second Image`}
                    width={800}
                    height={600}
                    className="w-full"
                  />
                )}
              </div>
            )}

            {section?.content && (
              <div className="mt-16">
                {section?.content?.map((content, cIndex) => (
                  <div
                    key={cIndex}
                    className="mb-12 w-1/2 max-sm:w-full ml-auto"
                  >
                    <Heading4 title={content?.title} />

                    {content?.paragraphs &&
                      content?.paragraphs?.map((para, pIndex) => (
                        <p
                          key={pIndex}
                          style={{ maxWidth: "100%" }}
                          className="text-[18px] leading-[160%] w-full text-balance font-medium flex-1 mt-6 text-muted-foreground"
                        >
                          {para}
                        </p>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

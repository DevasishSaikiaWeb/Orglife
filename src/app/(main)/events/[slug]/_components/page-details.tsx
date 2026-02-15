import Image from "next/image";
import { Heading1, Heading4 } from "@/components/heading";

export function PageDetails({ data, title }: { data: any; title: string }) {
  if (!data) {
    return (
      <div className="h-[70vh] flex justify-center items-center ">
        <div className="mb-[10%] ">Loading...</div>
      </div>
    );
  }
  return (
    <section>
      <Heading1
        title={title === "Concerts" ? "Concerts and Shows" : "Festivals"}
      />
      <section className="mt-16 grid grid-cols-1 space-y-32">
        {data.map((event: any) => {
          return (
            <div className="grid grid-cols-1 space-8 ">
              {event?.images.map((images: any) =>
                images?.length > 1 ? (
                  <div className={"mt-8 grid gap-8 grid-cols-2"}>
                    {images?.map((img: string) => {
                      return img.includes(".mp4") ? (
                        <video
                          src={img}
                          width={1200}
                          height={1200}
                          className="w-full"
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <Image
                          src={img}
                          alt={`Section Image ${img}`}
                          width={1200}
                          height={1200}
                          className="w-full h-full"
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-8">
                    {images?.map((img: string) => {
                      return img.includes(".mp4") ? (
                        <video
                          src={img}
                          width={800}
                          height={600}
                          className="w-full"
                          autoPlay
                          loop
                          muted
                        />
                      ) : (
                        <Image
                          src={img}
                          alt={`Section Image ${img}`}
                          width={1400}
                          height={1400}
                          className="w-full"
                        />
                      );
                    })}
                  </div>
                ),
              )}

              <div className="mt-10 w-1/2 max-sm:w-full">
                <Heading4 title={event?.title} />
                <p className="text-muted-foreground">{event.year}</p>
                <p className="text-muted-foreground">{event.genre}</p>
                <p className="text-muted-foreground">{event.location}</p>
                <p>{event?.subtext}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

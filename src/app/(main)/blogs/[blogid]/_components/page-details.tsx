import Image from "next/image";
import { Heading1, Heading2, Heading4 } from "@/components/heading";
import { Project_Details } from "@/constants/projectDetails";

export function PageDetails({ data }: { data: Project_Details }) {
  if (!data) {
    return (
      <div className="h-[70vh] flex justify-center items-center ">
        <div className="mb-[10%] ">Loading...</div>
      </div>
    );
  }
  return (
    <section>
      <Heading1 title={`Blog #${data.id}`} />
      <Heading4 title={data.title} />
      <Heading2 subtitle={data.date} />

      {data?.image.includes(".mp4") ? (
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

      <div className="mt-16 mb-20 w-full  text-justify text-[1rem] leading-relaxed max-w-4xl  mx-auto">
        {data?.content}
      </div>
    </section>
  );
}

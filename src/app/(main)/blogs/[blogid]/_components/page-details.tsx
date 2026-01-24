import Image from "next/image";
import { Heading1, Heading2, Heading3, Heading4 } from "@/components/heading";
import { Project_Details } from "@/constants/projectDetails";

export function PageDetails({ data }: { data: Project_Details }) {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <Heading3 title={data.title} subtitle={data.subTitle} />
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

      <div className="mt-16 mb-20 w-full">{data?.content}</div>
    </section>
  );
}

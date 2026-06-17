import Image from "next/image";

type OfferingCardProps = {
  title: string;
  description?: string;
  img: string;
};

export function OfferingCard({ title, description, img }: OfferingCardProps) {
  const isVideo = img.endsWith(".mp4");

  return (
    <section className="p-2 flex flex-col-reverse md:flex-row aspect-video gap-y-2 bg-foreground text-background">
      <div className="flex-1 p-2 py-4 md:p-8 flex flex-col justify-end">
        <p className="wrap-anywhere uppercase text-balance font-heading text-[2rem] leading-[90%] md:text-[3.25rem] md:leading-12 font-bold">
          {title}
        </p>
        {description && <p className="">{description}</p>}
      </div>
      <div className="aspect-square overflow-hidden">
        {isVideo ? (
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={img} type="video/mp4" />
          </video>
        ) : (
          <Image
            alt={title}
            className="size-full object-cover"
            src={img}
            width={1080}
            height={1080}
          />
        )}
      </div>
    </section>
  );
}

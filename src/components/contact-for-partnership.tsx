import Image from "next/image";
import Link from "next/link";

export function ContactForPartnership() {
  return (
    <section className="p-2 aspect-video bg-foreground text-background flex md:flex-row flex-col-reverse gap-4">
      <div className="flex-1 md:p-8 p-2 pt-4 flex flex-col justify-between">
        <div>
          <p className="uppercase [word-spacing:0.5rem] text-balance font-heading text-[2rem] leading-[90%] md:text-[4rem] md:leading-14 font-bold">
            Invest in tomorrow. Start today.
          </p>
          <p className="text-muted/90 mt-4 md:mt-8 text-[14px] md:text-[18px] text-balance md:leading-relaxed">
            Our work tends to resonate most with people who are ready to think
            thoughtfully about where they're headed. If you're interested in
            building something meaningful, let’s grab a coffee and chat!
          </p>
        </div>
        <div>
          <p className="text-background mt-8 text-base md:text-[18px] font-semibold leading-relaxed">
            Contact
          </p>
          <p className="text-muted mt-1 text-base md:text-[18px] leading-relaxed">
            Partnerships & New Business
          </p>
          <div className="mt-4">
            <Link
              href={"/"}
              className="text-muted underline underline-offset-4"
            >
              contact@orglife.co.in
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={"/images/work/demo.webp"}
          alt="Contact for pa"
          className="object-cover min-h-full min-w-full"
          width={920}
          height={1080}
        />
        {/* <video
          src={"/WEBSITE-INVESTINTOMO.mp4"}
          className="object-cover min-h-full min-w-full"
          autoPlay
          loop
          muted
        /> */}
      </div>
    </section>
  );
}

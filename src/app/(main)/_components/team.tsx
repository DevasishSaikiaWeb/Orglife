import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Heading2 } from "@/components/heading";
import { ShowcaseColumnGrid } from "@/components/showcase-grid";
import { IconButton } from "@/components/ui/icon-button";
import {
  TEAM_SECTION_SUBTITLE,
  TEAM_SECTION_TITLE,
} from "@/constants/home";
import { SECTION_DOT } from "@/constants/site";

export function TeamSection() {
  return (
    <section>
      <Heading2
        title={TEAM_SECTION_TITLE}
        subtitle={TEAM_SECTION_SUBTITLE}
        dot={SECTION_DOT}
      />
      <div className="mt-8">
        <video
          src="https://res.cloudinary.com/dpblcamaw/video/upload/v1784795213/WEBSITE_HOMEPAGE_2ST_VIDEO_xd6txn.mp4"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg"
          aria-label="Video showcasing our team members and their work environment."
        />
      </div>
      <div className="mt-8">
        <ShowcaseColumnGrid
          leftSectionHeading="We engage hybrid models tailored to the operational and creative maturity of brands."
          //   rightSection={[
          //     {
          //       heading: "Brand Foundation Design",
          //       description:
          //         "We partner with young start-ups and legacy brands to study their needs and craft a strong identity that resonates with their audiences and markets. From the brand name and logo, research and audit to positioning and messaging, we have developed a special skillset to deliver awesome results.",
          //     },
          //     {
          //       heading: "Visual Content and Communication",
          //       description:
          //         "Transforming clicks into conversations and followers into fans need efforts beyond trendy content. We help brands amplify their voices to establish, maintain and grow connections and conversations with audiences and communities – through literature, videos, animations and motion graphic content.",
          //     },
          //     {
          //       heading: "Brand Digital Assets",
          //       description:
          //         "We help brands leverage technology to elevate their digital identity. From social media strategies to ui/ux and custom ai tools and tech applications, we help brands create a niche for themselves. And our immersive ar/vr applications for products, services and process flows create unique and highly interactive audience engagements.",
          //     },
          //   ]}
          rightFirstHeader="Brand Foundation Design"
          rightFirstDescription="We partner with young start-ups and legacy brands to study their needs and craft a strong identity that resonates with their audiences and markets. From the brand name and logo, research and audit to positioning and messaging, we have developed a special skillset to deliver awesome results."
          rightSecondHeader="Visual Content and Comm."
          rightSecondDescription="Transforming clicks into conversations and followers into fans need efforts beyond trendy content. We help brands amplify their voices to establish, maintain and grow connections and conversations with audiences and communities – through literature, videos, animations and motion graphic content."
          rightThirdHeader="Brand Digital Assets"
          rightThirdDescription="We help brands leverage technology to elevate their digital identity. From social media strategies to UI/UX and custom AI tools and tech applications, we help brands create a niche for themselves. And our immersive AR/VR applications for products, services and process flows create unique and highly interactive audience engagements."
        />
        <div className="mt-8 md:mt-16 flex justify-center">
          <Link href={"/offerings"}>
            <IconButton
              label="Explore Services"
              icon={<ArrowRightIcon />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

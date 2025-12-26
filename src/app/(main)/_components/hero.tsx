import { Heading1, Heading3 } from "@/components/heading";
import {
  ABOUT_SECTION_SUBTITLE,
  ABOUT_SECTION_TITLE,
  ABOUT_SECTION_UPPER_TITLE,
  HERO_SECTION_SUBTITLE,
  HERO_SECTION_TITLE,
} from "@/constants/home";

export function HeroSection() {
  return (
    <section>
      <Heading1 title={HERO_SECTION_TITLE} subtitle={HERO_SECTION_SUBTITLE} />

      <div className="mt-8" id="video-wrapper">
        <video
          src="https://res.cloudinary.com/dpblcamaw/video/upload/v1766751100/hero_tbpcuz.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="mt-8">
        <Heading3
          title={ABOUT_SECTION_TITLE}
          subtitle={ABOUT_SECTION_SUBTITLE}
          toptitle={ABOUT_SECTION_UPPER_TITLE}
        />
      </div>
    </section>
  );
}

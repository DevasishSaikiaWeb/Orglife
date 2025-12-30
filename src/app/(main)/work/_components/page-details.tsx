import { Heading1 } from "@/components/heading";
import {
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_SUBTITLE2,
  PAGE_DETAILS_TITLE,
  PAGE_DETAILS_TITLE2,
} from "@/constants/offerings";
// import Tabs from "./tabs";
// import Work from "./works";
import Work2 from "./works2";
import LogoAnimation from "@/components/text-image-card";

export function PageDetails() {
  return (
    <section>
      <Heading1 title={PAGE_DETAILS_TITLE2} subtitle={PAGE_DETAILS_SUBTITLE2} />
      <Work2 />

      <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
      {/* <Tabs /> */}
      {/* <Work /> */}
      <LogoAnimation />
    </section>
  );
}

import { Heading1 } from "@/components/heading";
import {
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_SUBTITLE2,
  PAGE_DETAILS_TITLE,
  PAGE_DETAILS_TITLE2,
} from "@/constants/offerings";
import Work2 from "./works2";
import BrandsLogos from "@/components/BrandsLogos";
import Work from "./works";

export function PageDetails() {
  return (
    <section>
      <Heading1 title={PAGE_DETAILS_TITLE2} subtitle={PAGE_DETAILS_SUBTITLE2} />
      <Work2 />

      <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
      {/* <Tabs /> */}
      <Work />
      {/* <BrandsLogos /> */}
    </section>
  );
}

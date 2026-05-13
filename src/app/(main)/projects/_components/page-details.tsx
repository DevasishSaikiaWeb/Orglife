import { Heading1 } from "@/components/heading";
import {
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_TITLE,
} from "@/constants/projects";
import Work2 from "./works2";
import Work from "./works";

export function PageDetails() {
  return (
    <section>
      <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
      <Work2 />

      {/* <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} /> */}
      {/* <Tabs /> */}
      <Work />
      {/* <BrandsLogos /> */}
    </section>  
  );
}

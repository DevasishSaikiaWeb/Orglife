import { Heading1 } from "@/components/heading";
import {
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_TITLE,
} from "@/constants/offerings";
import Tabs from "./tabs";
import Work from "./works";

export function PageDetails() {
  return (
    <section>
      <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
      <Tabs />
      <Work />
    </section>
  );
}

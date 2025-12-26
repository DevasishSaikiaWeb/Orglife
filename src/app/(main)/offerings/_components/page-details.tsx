import { Heading1 } from "@/components/heading";
import {
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_TITLE,
} from "@/constants/offerings";

export function PageDetails() {
  return (
    <section>
      <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
    </section>
  );
}

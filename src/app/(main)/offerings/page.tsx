import { ContactForPartnership } from "@/components/contact-for-partnership";
import {
  FINAL_OFFERING_SECTION,
  OFFERING_CARDS,
  OFFERING_DETAILS,
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_TITLE,
} from "@/constants/offerings";
import { OfferingCard } from "./_components/card";
import { DetailsCard } from "./_components/details-card";
import { PageDetails } from "./_components/page-details";
import { Heading1 } from "@/components/heading";

export default function OffetingsPage() {
  return (
    <main className="space-y-16 md:space-y-28 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PageDetails />

      {OFFERING_CARDS.map((service, index) => (
        <div className="space-y-8" key={service.title}>
          <OfferingCard key={service.title} {...service} />
          <DetailsCard
            key={`item-${OFFERING_DETAILS[index].title}`}
            {...OFFERING_DETAILS[index]}
          />
        </div>
      ))}

      <section>
        <Heading1 title={PAGE_DETAILS_TITLE} subtitle={PAGE_DETAILS_SUBTITLE} />
      </section>
      <div className="space-y-8">
        <OfferingCard {...FINAL_OFFERING_SECTION[0]} />
        <DetailsCard {...FINAL_OFFERING_SECTION[0]} />
      </div>
      <ContactForPartnership />
    </main>
  );
}

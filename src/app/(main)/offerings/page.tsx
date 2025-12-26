import { ContactForPartnership } from "@/components/contact-for-partnership";
import { OFFERING_CARDS, OFFERING_DETAILS } from "@/constants/offerings";
import { OfferingCard } from "./_components/card";
import { DetailsCard } from "./_components/details-card";
import { PageDetails } from "./_components/page-details";

export default function OffetingsPage() {
  return (
    <main className="space-y-16 md:space-y-32 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      {/* --- Old layout ---
      {OFFERING_CARDS.map((service) => (
        <OfferingCard key={service.title} {...service} />
      ))}

      {OFFERING_DETAILS.map((service) => (
        <DetailsCard key={service.title} {...service} />
      ))} */}

      <ContactForPartnership />
    </main>
  );
}

import { ContactForPartnership } from "@/components/contact-for-partnership";
import { PageDetails } from "./_components/page-details";

export default function WorkPage() {
  return (
    <main className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PageDetails />
      <ContactForPartnership />
    </main>
  );
}

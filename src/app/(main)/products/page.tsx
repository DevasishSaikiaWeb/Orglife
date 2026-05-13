import { ContactForPartnership } from "@/components/contact-for-partnership";
import {
  PRODUCT_CARDS,
  PRODUCT_DETAILS,
  PAGE_DETAILS_SUBTITLE,
  PAGE_DETAILS_TITLE,
  PRODUCTS,
} from "@/constants/products";
import { OfferingCard } from "./_components/card";
import { DetailsCard } from "./_components/details-card";
import { PageDetails } from "./_components/page-details";
import { Heading1 } from "@/components/heading";

export default function ProductsPage() {
  return (
    <main className="space-y-16 md:space-y-28 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PageDetails />

      {PRODUCTS.map((product) => (
        <div className="space-y-8" key={product.title}>
          <OfferingCard
            title={product.title}
            img={product.img}
          />

          <DetailsCard
            title={product.title}
            description={product.description}
            action={product.action}
            list={[]} // optional
          />
        </div>
      ))}

      <ContactForPartnership />
    </main>
  );
}

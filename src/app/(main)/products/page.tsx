import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { JsonLd } from "@/components/json-ld";
import { PRODUCTS } from "@/constants/products";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
  productSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { OfferingCard } from "./_components/card";
import { DetailsCard } from "./_components/details-card";
import { PageDetails } from "./_components/page-details";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export const metadata = buildMetadata({
  title: "Products — AI Platforms, Films & Campaigns",
  description:
    "Explore Orglife's products: Aigio brand intelligence, Micro Minds, AI Films, AI Ad Campaigns and AI Animation — where creative strategy meets AI-powered execution.",
  path: "/products",
  section: "Products",
  keywords: [
    "Aigio",
    "Micro Minds",
    "AI films",
    "AI ad campaigns",
    "AI animation",
    "AI brand platform",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: "Products — AI Platforms, Films & Campaigns",
            description:
              "Orglife's AI-powered products and creative platforms.",
            path: "/products",
            type: "CollectionPage",
          }),
          breadcrumbSchema(CRUMBS),
          itemListSchema(
            PRODUCTS.map((product) => ({
              name: product.title,
              path: product.action.href,
            })),
            "Orglife Products",
          ),
          PRODUCTS.map((product) =>
            productSchema({
              name: product.title,
              description: product.description,
              path: product.action.href,
              image: product.img,
            }),
          ),
        )}
      />
      <main
        id="main-content"
        className="space-y-16 md:space-y-28 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div>
          <Breadcrumbs crumbs={CRUMBS} />
          <PageDetails />
        </div>

        {PRODUCTS.map((product) => (
          <div className="space-y-8" key={product.title}>
            <OfferingCard
              title={product.title}
              img={product.img}
              is360={product.is360}
            />
            <DetailsCard
              title={product.title}
              description={product.description}
              action={product.action}
              list={[]}
            />
          </div>
        ))}

        <ContactForPartnership />
      </main>
    </>
  );
}

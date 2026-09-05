import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1, Heading3 } from "@/components/heading";
import { MediaGrid } from "@/components/media-grid";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT_DETAILS } from "@/constants/productDetails";
import {
  breadcrumbSchema,
  graph,
  mediaSchemas,
  productSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { ProductHero } from "./_components/product-hero";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PRODUCT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_DETAILS[slug];
  if (!product) return { title: "Product not found" };

  return buildMetadata({
    title: product.title,
    description: product.intro,
    path: `/products/${slug}`,
    section: "Products",
    keywords: [product.title, "Orglife product", "AI creative product"],
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCT_DETAILS[slug];

  if (!product) notFound();

  const path = `/products/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.title, path },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: product.title,
            description: product.intro,
            path,
            primaryImage: product.heroImage,
          }),
          breadcrumbSchema(crumbs),
          productSchema({
            name: product.title,
            description: product.intro,
            path,
            image: product.heroImage,
          }),
          mediaSchemas(product.gallery, product.title),
        )}
      />
      <main
        id="main-content"
        className="space-y-16 md:space-y-28 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <section>
          <Breadcrumbs crumbs={crumbs} />
          <Heading1 title={product.title} subtitle={product.intro} />
        </section>

        <ProductHero
          src={product.heroImage}
          title={product.title}
          is360={product.heroIs360}
          priority
        />

        <section>
          <Heading3
            wide
            title={product.sectionHeading}
            subtitle={product.sectionText_1}
            subtitle2={product.sectionText_2}
          />
        </section>

        {product.gallery.length > 0 && (
          <section aria-label={`${product.title} gallery`}>
            <MediaGrid items={product.gallery} altPrefix={product.title} />
          </section>
        )}

        {product.section2Text_1 && (
          <section>
            <Heading3
              wide
              subtitle={product.section2Text_1}
              subtitle2={product.section2Text_2}
            />
          </section>
        )}

        <ContactForPartnership />
      </main>
    </>
  );
}

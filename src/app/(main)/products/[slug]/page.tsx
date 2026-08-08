import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1, Heading3 } from "@/components/heading";
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
          mediaSchemas(
            product.gallery.map((src) => ({ media: src, title: product.title })),
            product.title,
          ),
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

        <section
          aria-label={`${product.title} gallery`}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {product.gallery.map((img, index) => (
            <div key={img} className="aspect-square overflow-hidden">
              <Image
                className="size-full object-cover"
                src={img}
                alt={`${product.title} — visual ${index + 1}`}
                width={720}
                height={720}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </section>

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

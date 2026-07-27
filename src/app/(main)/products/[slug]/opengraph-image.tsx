import { PRODUCT_DETAILS } from "@/constants/productDetails";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Orglife product";

export function generateStaticParams() {
  return Object.keys(PRODUCT_DETAILS).map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCT_DETAILS[slug];

  return renderOgImage({
    eyebrow: "Product",
    title: product?.title ?? "Orglife Products",
    footer: "AI platforms · Films · Campaigns",
  });
}

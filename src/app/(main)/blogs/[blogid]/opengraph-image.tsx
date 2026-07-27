import { BLOGS } from "@/constants/blogs";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Orglife article";

export function generateStaticParams() {
  return BLOGS.map((blog) => ({ blogid: blog.urlSlug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) {
  const { blogid } = await params;
  const blog = BLOGS.find((item) => item.urlSlug === blogid);

  return renderOgImage({
    eyebrow: blog?.category?.[0] ?? "Insights",
    title: blog?.title ?? "Orglife Insights",
    footer: blog?.date ?? "Orglife Journal",
  });
}

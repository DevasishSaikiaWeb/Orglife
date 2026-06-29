import type { Metadata } from "next";
import { getDetailedBlog } from "@/constants/blogs";
import { BlogContent } from "./_components/blog-content";

async function resolveSlug(params: Promise<{ blogid: string | string[] }>) {
  const { blogid } = await params;
  const raw = Array.isArray(blogid) ? blogid[0] : blogid;
  return decodeURIComponent(raw ?? "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogid: string | string[] }>;
}): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const blog = getDetailedBlog(slug) as any;

  if (!blog) {
    return {
      title: "Blog | Orglife",
      description:
        "Insights on brand strategy, AI-powered content, and modern branding from Orglife.",
    };
  }

  const seo = blog.seo ?? {};
  const title = seo.metaTitle ?? `${blog.title} | Orglife`;
  const description = seo.metaDescription ?? blog.subtitle ?? blog.title;
  const canonical = `/blogs/${slug}`;

  return {
    // `absolute` prevents the root layout's "%s | Orglife" template from
    // appending a second suffix (metaTitle already ends with "| Orglife").
    title: { absolute: title },
    description,
    keywords: seo.keywords,
    authors: blog.author ? [{ name: blog.author }] : undefined,
    category: Array.isArray(blog.category) ? blog.category[0] : blog.category,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: "Orglife",
      publishedTime: seo.publishDate,
      authors: blog.author ? [blog.author] : undefined,
      images: blog.image
        ? [{ url: blog.image, alt: seo.imageAlt ?? blog.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ blogid: string | string[] }>;
}) {
  const slug = await resolveSlug(params);
  return <BlogContent slug={slug} />;
}

import type { MetadataRoute } from "next";
import { BLOGS } from "@/constants/blogs";
import { CASE_STUDIES } from "@/constants/caseStudies";
import { PRODUCT_DETAILS } from "@/constants/productDetails";
import { absoluteUrl } from "@/constants/site";

// Regenerate the sitemap daily so lastModified stays meaningful.
export const revalidate = 86400;

const isImage = (src: string) => !/\.(mp4|webm|mov)$/i.test(src);

/** Google only accepts image URLs (not video) in the sitemap image extension. */
function imagesFor(sources: string[]): string[] {
  return sources.filter(isImage).map((src) => absoluteUrl(src));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: absoluteUrl("/offerings"), lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: absoluteUrl("/products"), lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: absoluteUrl("/projects"), lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: absoluteUrl("/case-studies"), lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: absoluteUrl("/blogs"), lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: absoluteUrl("/contact"), lastModified: now, priority: 0.7, changeFrequency: "yearly" },
  ];

  const products: MetadataRoute.Sitemap = Object.entries(PRODUCT_DETAILS).map(
    ([slug, product]) => ({
      url: absoluteUrl(`/products/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: imagesFor([product.heroImage, ...product.gallery]),
    }),
  );

  const caseStudies: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: absoluteUrl(`/case-studies/${study.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: imagesFor([
      study.heroImage,
      study.cardImage,
      ...study.gallery.map((item) => item.media),
    ]),
  }));

  const blogs: MetadataRoute.Sitemap = BLOGS.map((blog) => ({
    url: absoluteUrl(`/blogs/${blog.urlSlug}`),
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: imagesFor([blog.img]),
  }));

  return [...staticRoutes, ...products, ...caseStudies, ...blogs];
}

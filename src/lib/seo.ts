import type { Metadata } from "next";
import { absoluteUrl, BASE_KEYWORDS, SITE } from "@/constants/site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  /** Route path, e.g. "/products/aigio". Used for canonical + OG url. */
  path: string;
  keywords?: string[];
  /** Absolute or root-relative image. Falls back to the generated OG image. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  /**
   * Set on routes that ship their own `opengraph-image.tsx`, so the file
   * convention injects the per-item card instead of the site-wide default.
   */
  routeImage?: boolean;
};

/**
 * Central metadata factory — guarantees every page has a unique title,
 * description, canonical URL, OpenGraph and Twitter card.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  noIndex = false,
  routeImage = false,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const alt = imageAlt ?? `${title} — ${SITE.name}`;
  // Metadata files are not inherited by nested route segments, so the listing
  // pages were shipping with no `og:image` at all — shared links rendered
  // without a preview. Default to the site-wide generated card; routes that
  // have their own `opengraph-image.tsx` opt out with `routeImage`.
  const ogImage = image
    ? absoluteUrl(image)
    : routeImage
      ? undefined
      : absoluteUrl(SITE.ogImage);

  return {
    // The root layout applies a "%s | <brand>" template. A title that already
    // names the brand would get it twice, so those opt out of the template.
    title: title.includes(SITE.name) ? { absolute: title } : title,
    description,
    keywords: Array.from(new Set([...keywords, ...BASE_KEYWORDS])),
    authors: (authors ?? [SITE.name]).map((name) => ({
      name,
      url: SITE.url,
    })),
    creator: SITE.name,
    publisher: SITE.name,
    applicationName: SITE.name,
    category: section ?? "Creative Services",
    alternates: {
      canonical: url,
      // Single-locale today; placeholder kept so hreflang is trivial to extend.
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      siteName: SITE.name,
      title,
      description,
      url,
      locale: SITE.locale,
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630, alt }] }
        : {}),
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: authors ?? [SITE.name],
            section,
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [{ url: ogImage, alt }] } : {}),
      creator: "@orglife",
      site: "@orglife",
    },
    ...(ogImage
      ? {
          other: {
            // Extra hints consumed by Facebook / LinkedIn / Slack unfurlers.
            "og:image:secure_url": ogImage,
          },
        }
      : {}),
  };
}

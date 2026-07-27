import {
  absoluteUrl,
  FAQS,
  SERVICES,
  SITE,
  SITE_SOCIALS,
} from "@/constants/site";

/**
 * Stable @id anchors so entities can reference each other instead of being
 * duplicated — this is what search engines and AI crawlers use to build the
 * knowledge graph for the site.
 */
export const ID = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  localBusiness: `${SITE.url}/#localbusiness`,
  logo: `${SITE.url}/#logo`,
};

type Json = Record<string, unknown>;

const isVideo = (src: string) =>
  /\.(mp4|webm|mov)$/i.test(src) || src.includes("/video/");

/* -------------------------------------------------------------------------- */
/*                              Core entities                                 */
/* -------------------------------------------------------------------------- */

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": ID.organization,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    foundingDate: SITE.founded,
    email: SITE.email,
    slogan: SITE.tagline,
    logo: {
      "@type": "ImageObject",
      "@id": ID.logo,
      url: absoluteUrl(SITE.logoPng),
      contentUrl: absoluteUrl(SITE.logoPng),
      caption: SITE.name,
    },
    image: { "@id": ID.logo },
    sameAs: SITE_SOCIALS,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Partnerships & New Business",
        email: SITE.email,
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { "@id": ID.organization },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema(): Json {
  return {
    "@type": "ProfessionalService",
    "@id": ID.localBusiness,
    name: SITE.name,
    image: absoluteUrl(SITE.logoPng),
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs: SITE_SOCIALS,
    parentOrganization: { "@id": ID.organization },
    hasOfferCatalog: offerCatalogSchema(),
  };
}

export function offerCatalogSchema(): Json {
  return {
    "@type": "OfferCatalog",
    name: "Creative & Technology Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.url),
        provider: { "@id": ID.organization },
        serviceType: service.name,
        areaServed: "IN",
      },
    })),
  };
}

export function faqSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }> = FAQS,
): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*                              Page-level nodes                              */
/* -------------------------------------------------------------------------- */

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
  primaryImage,
  datePublished,
  dateModified,
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  primaryImage?: string;
  datePublished?: string;
  dateModified?: string;
}): Json {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: SITE.lang,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.organization },
    ...(primaryImage
      ? { primaryImageOfPage: imageObjectSchema(primaryImage, name) }
      : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function breadcrumbSchema(
  crumbs: ReadonlyArray<{ name: string; path: string }>,
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function imageObjectSchema(src: string, caption: string): Json {
  return {
    "@type": "ImageObject",
    url: absoluteUrl(src),
    contentUrl: absoluteUrl(src),
    caption,
    representativeOfPage: true,
  };
}

export function videoObjectSchema({
  src,
  name,
  description,
  thumbnail,
  uploadDate,
}: {
  src: string;
  name: string;
  description: string;
  thumbnail?: string;
  uploadDate?: string;
}): Json {
  return {
    "@type": "VideoObject",
    name,
    description,
    contentUrl: absoluteUrl(src),
    embedUrl: absoluteUrl(src),
    thumbnailUrl: [absoluteUrl(thumbnail ?? SITE.logoPng)],
    uploadDate: uploadDate ?? `${SITE.founded}-01-01T00:00:00+05:30`,
    publisher: { "@id": ID.organization },
  };
}

/** Builds ImageObject/VideoObject nodes for a gallery of mixed media. */
export function mediaSchemas(
  items: ReadonlyArray<{ media: string; title: string }>,
  context: string,
): Json[] {
  return items.map((item) =>
    isVideo(item.media)
      ? videoObjectSchema({
          src: item.media,
          name: item.title,
          description: `${item.title} — ${context} by ${SITE.name}.`,
        })
      : imageObjectSchema(item.media, item.title),
  );
}

export function itemListSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
  name: string,
): Json {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function productSchema({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
}): Json {
  return {
    "@type": "Product",
    "@id": `${absoluteUrl(path)}#product`,
    name,
    description,
    url: absoluteUrl(path),
    ...(image && !isVideo(image) ? { image: absoluteUrl(image) } : {}),
    brand: { "@id": ID.organization },
    manufacturer: { "@id": ID.organization },
    category: "Creative Technology",
  };
}

export function creativeWorkSchema({
  name,
  description,
  path,
  image,
  keywords,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Json {
  return {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(path)}#creativework`,
    name,
    description,
    url: absoluteUrl(path),
    ...(image && !isVideo(image) ? { image: absoluteUrl(image) } : {}),
    creator: { "@id": ID.organization },
    publisher: { "@id": ID.organization },
    inLanguage: SITE.lang,
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
  };
}

export function blogPostingSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  author = SITE.name,
  keywords,
  wordCount,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  wordCount?: number;
}): Json {
  const url = absoluteUrl(path);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    ...(image ? { image: [absoluteUrl(image)] } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified || datePublished
      ? { dateModified: dateModified ?? datePublished }
      : {}),
    author: { "@type": "Organization", name: author, url: SITE.url },
    publisher: { "@id": ID.organization },
    inLanguage: SITE.lang,
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    ...(wordCount ? { wordCount } : {}),
  };
}

/* -------------------------------------------------------------------------- */
/*                                  Graph                                     */
/* -------------------------------------------------------------------------- */

/**
 * Wraps nodes into a single @graph document — the format Google and AI
 * crawlers parse most reliably, and it avoids duplicate entity definitions.
 */
export function graph(...nodes: Array<Json | Json[] | null | undefined>): Json {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat().filter(Boolean) as Json[],
  };
}

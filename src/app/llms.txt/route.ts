import { BLOGS } from "@/constants/blogs";
import { CASE_STUDIES } from "@/constants/caseStudies";
import { OFFERING_DETAILS } from "@/constants/offerings";
import { PRODUCT_DETAILS } from "@/constants/productDetails";
import { absoluteUrl, FAQS, SITE } from "@/constants/site";

/**
 * /llms.txt — a plain-language map of the site for language models, following
 * the llmstxt.org convention: an H1 name, a blockquote summary, then linked
 * sections with one-line descriptions.
 *
 * Generated from the same constants the pages render, so it cannot drift out
 * of sync the way a hand-written file in public/ would. Everything here is
 * already published on the site; nothing is asserted that a crawler could not
 * verify by reading the pages themselves.
 */

export const dynamic = "force-static";
// Match the sitemap: refresh daily so new blogs and case studies appear.
export const revalidate = 86400;

/** Collapse to a single line — the format is line-oriented. */
function line(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function link(title: string, path: string, description: string): string {
  return `- [${title}](${absoluteUrl(path)}): ${line(description)}`;
}

export function GET(): Response {
  const services = OFFERING_DETAILS.map((offering) =>
    line(
      `${offering.title} — ${offering.list.map((item) => item.label).join("; ")}`,
    ),
  );

  const body = `# ${SITE.legalName}

> ${line(SITE.description)}

Orglife is ${SITE.tagline.toLowerCase()}, founded in ${SITE.founded} and based in ${SITE.address.locality}, ${SITE.address.region}, India. The studio combines research-led brand strategy with AI-assisted production, working with brands and organizations in India and internationally.

Human creative direction leads every engagement; AI is used as a production medium rather than a replacement for creative judgement.

## Core pages

${link("Home", "/", SITE.shortDescription)}
${link("Services", "/offerings", "The three service lines: brand foundation design, visual content and communication, and brand digital assets.")}
${link("Products", "/products", "Orglife's own platforms and production verticals, including AI films and AI campaigns.")}
${link("Case Studies", "/case-studies", "Detailed accounts of client engagements: the brief, the opportunity and what was delivered.")}
${link("Blogs", "/blogs", "Essays on brand strategy, AI in branding and visual communication.")}
${link("Contact", "/contact", "Start a project or partnership enquiry.")}

## Services

${services.map((service) => `- ${service}`).join("\n")}

## Products and production verticals

${Object.entries(PRODUCT_DETAILS)
  .map(([slug, product]) =>
    link(product.title, `/products/${slug}`, product.intro),
  )
  .join("\n")}

## Case studies

${CASE_STUDIES.map((study) =>
  link(
    study.brand,
    `/case-studies/${study.slug}`,
    `${study.industries.join(", ")} — ${study.cardDescription}`,
  ),
).join("\n")}

## Writing

${BLOGS.map((blog) =>
  link(blog.title, `/blogs/${blog.urlSlug}`, `${blog.date} — ${blog.description}`),
).join("\n")}

## Frequently asked

${FAQS.map((faq) => `### ${faq.question}\n${line(faq.answer)}`).join("\n\n")}

## Contact

- Email: ${SITE.email}
- Telephone: ${SITE.telephone}
- Address: ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}, India
- LinkedIn: ${SITE.social.linkedin}
- Instagram: ${SITE.social.instagram}

## Notes

- Canonical domain: ${SITE.url}
- Sitemap: ${absoluteUrl("/sitemap.xml")}
- Content language: ${SITE.lang}
- Structured data (JSON-LD) is embedded on every page: Organization, WebSite, LocalBusiness, WebPage, BreadcrumbList, and Product, CreativeWork or BlogPosting as applicable.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate",
    },
  });
}

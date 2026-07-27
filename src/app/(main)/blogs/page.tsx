import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { Heading1 } from "@/components/heading";
import { JsonLd } from "@/components/json-ld";
import { TextWithImageCard } from "@/components/text-image-card";
import { BLOGS } from "@/constants/blogs";
import { BLOGS_SECTION_SUBTITLE, BLOGS_SECTION_TITLE } from "@/constants/home";
import { SITE } from "@/constants/site";
import {
  blogPostingSchema,
  breadcrumbSchema,
  graph,
  itemListSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/blogs" },
];

export const metadata = buildMetadata({
  title: "Blogs — Brand Strategy & AI Insights",
  description:
    "Insights from Orglife on brand strategy, AI in branding, enterprise brand infrastructure and creative direction — ideas we admire, adore and sometimes challenge.",
  path: "/blogs",
  section: "Insights",
  keywords: [
    "brand strategy blog",
    "AI branding insights",
    "creative agency blog",
    ...BLOGS.flatMap((blog) => blog.category),
  ],
});

export default function BlogsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Blog",
            "@id": `${SITE.url}/blogs#blog`,
            name: BLOGS_SECTION_TITLE,
            description: BLOGS_SECTION_SUBTITLE,
            url: `${SITE.url}/blogs`,
            inLanguage: SITE.lang,
            publisher: { "@id": `${SITE.url}/#organization` },
          },
          webPageSchema({
            name: "Blogs — Brand Strategy & AI Insights",
            description: BLOGS_SECTION_SUBTITLE,
            path: "/blogs",
            type: "CollectionPage",
          }),
          breadcrumbSchema(CRUMBS),
          itemListSchema(
            BLOGS.map((blog) => ({
              name: blog.title,
              path: `/blogs/${blog.urlSlug}`,
            })),
            "Orglife Articles",
          ),
          BLOGS.map((blog) =>
            blogPostingSchema({
              headline: blog.title,
              description: blog.description,
              path: `/blogs/${blog.urlSlug}`,
              image: blog.img,
              datePublished: new Date(blog.date).toISOString(),
              keywords: blog.category,
            }),
          ),
        )}
      />
      <main
        id="main-content"
        className="space-y-32 md:space-y-48 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <section>
          <Breadcrumbs crumbs={CRUMBS} />
          <Heading1
            title={BLOGS_SECTION_TITLE}
            subtitle={BLOGS_SECTION_SUBTITLE}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 gap-y-16">
            {BLOGS.map((blog) => (
              <TextWithImageCard
                key={blog.title}
                {...blog}
                squareImage
                type="blog"
              />
            ))}
          </div>
        </section>

        <ContactForPartnership />
      </main>
    </>
  );
}

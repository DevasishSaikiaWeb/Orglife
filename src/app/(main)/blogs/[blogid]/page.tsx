import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { JsonLd } from "@/components/json-ld";
import { BLOGS, getDetailedBlog } from "@/constants/blogs";
import { SITE } from "@/constants/site";
import { blogPostingSchema, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ blogid: string | string[] }> };

async function resolveSlug(params: PageProps["params"]) {
  const { blogid } = await params;
  const raw = Array.isArray(blogid) ? blogid[0] : blogid;
  return decodeURIComponent(raw ?? "");
}

export function generateStaticParams() {
  return BLOGS.map((blog) => ({ blogid: blog.urlSlug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const blog = getDetailedBlog(slug);

  if (!blog) return { title: "Article not found" };

  const seo = blog.seo;
  return buildMetadata({
    title: blog.subtitle ? blog.title : blog.title,
    description: seo?.metaDescription ?? blog.subtitle ?? blog.title,
    path: `/blogs/${slug}`,
    type: "article",
    image: blog.image,
    imageAlt: seo?.imageAlt ?? blog.title,
    keywords: [...(seo?.keywords ?? []), ...(blog.category ?? [])],
    authors: [blog.author ?? SITE.name],
    section: blog.category?.[0],
    tags: blog.category,
    publishedTime: seo?.publishDate
      ? new Date(seo.publishDate).toISOString()
      : undefined,
    modifiedTime: seo?.publishDate
      ? new Date(seo.publishDate).toISOString()
      : undefined,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const slug = await resolveSlug(params);
  const blog = getDetailedBlog(slug);

  if (!blog) notFound();

  const path = `/blogs/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: blog.title, path },
  ];
  const published = blog.seo?.publishDate
    ? new Date(blog.seo.publishDate).toISOString()
    : undefined;

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: blog.title,
            description: blog.seo?.metaDescription ?? blog.subtitle,
            path,
            primaryImage: blog.image,
            datePublished: published,
          }),
          breadcrumbSchema(crumbs),
          blogPostingSchema({
            headline: blog.title,
            description: blog.seo?.metaDescription ?? blog.subtitle,
            path,
            image: blog.image,
            datePublished: published,
            author: blog.author ?? SITE.name,
            keywords: [...(blog.seo?.keywords ?? []), ...(blog.category ?? [])],
          }),
        )}
      />
      <main
        id="main-content"
        className="space-y-16 md:space-y-24 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <article>
          <Breadcrumbs crumbs={crumbs} />

          <header>
            <h1 className="font-h1 [word-spacing:1.25rem] font-heading">
              {blog.title}
            </h1>
            {blog.subtitle && (
              <p className="font-body mt-4 text-muted-foreground">
                {blog.subtitle}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-small-body text-muted-foreground">
              <span>By {blog.author ?? SITE.name}</span>
              {published && (
                <time dateTime={published}>{blog.date}</time>
              )}
              {blog.readingTime && <span>{blog.readingTime} read</span>}
            </div>
            {blog.category?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {blog.category.map((cat) => (
                  <li
                    key={cat}
                    className="font-small-body border border-muted-foreground/75 py-0.5 px-4 rounded-full"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.seo?.imageAlt ?? blog.title}
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              fetchPriority="high"
              className="w-full h-auto mt-12"
            />
          )}

          {/* Article body is rendered on the server so crawlers and AI
              browsers receive the full text in the initial HTML. */}
          <div className="mt-16 mb-20 w-full text-pretty font-small-body leading-relaxed max-w-4xl mx-auto">
            {blog.content}
          </div>
        </article>

        <ContactForPartnership />
      </main>
    </>
  );
}

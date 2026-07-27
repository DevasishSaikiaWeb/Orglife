import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForPartnership } from "@/components/contact-for-partnership";
import { JsonLd } from "@/components/json-ld";
import {
  type Project_Details,
  PROJECT_DETAILS,
} from "@/constants/projectDetails";
import {
  breadcrumbSchema,
  creativeWorkSchema,
  graph,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { PageDetails } from "./_components/page-details";

type PageProps = { params: Promise<{ slug: string | string[] }> };

const PROJECT_KEYS = Object.keys(PROJECT_DETAILS) as Array<
  keyof typeof PROJECT_DETAILS
>;

/** Cards link to `/projects/<Title>`, so slugs may be URL-encoded titles. */
function resolveProject(raw: string): Project_Details | undefined {
  const target = decodeURIComponent(raw).replace(/-/g, " ").toLowerCase().trim();
  const key = PROJECT_KEYS.find(
    (candidate) => candidate.toLowerCase().trim() === target,
  );
  return key ? (PROJECT_DETAILS[key] as Project_Details) : undefined;
}

async function resolveSlug(params: PageProps["params"]) {
  const { slug } = await params;
  return Array.isArray(slug) ? slug[0] : (slug ?? "");
}

export function generateStaticParams() {
  return PROJECT_KEYS.map((key) => ({ slug: key }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const project = resolveProject(slug);
  if (!project) return { title: "Project not found" };

  return buildMetadata({
    title: `${project.title} — Project`,
    description: project.subTitle,
    path: `/projects/${encodeURIComponent(slug)}`,
    section: "Portfolio",
    keywords: [project.title, "project", "creative work", "case study"],
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const slug = await resolveSlug(params);
  const project = resolveProject(slug);

  if (!project) notFound();

  const path = `/projects/${encodeURIComponent(slug)}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: `${project.title} — Project`,
            description: project.subTitle,
            path,
            primaryImage: project.main_image,
          }),
          breadcrumbSchema(crumbs),
          creativeWorkSchema({
            name: project.title,
            description: project.subTitle,
            path,
            image: project.main_image,
          }),
        )}
      />
      <main
        id="main-content"
        className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div>
          <Breadcrumbs crumbs={crumbs} />
          <PageDetails data={project} />
        </div>
        <ContactForPartnership />
      </main>
    </>
  );
}

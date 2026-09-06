import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};


export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const name = decodeURIComponent(slug).replace(/[-_]+/g, " ");

  return buildMetadata({
    title: name,
    description: `${name} — live experiences curated and produced by Orglife.`,
    path: `/events/${slug}`,
    section: "Events",
    noIndex: true,
  });
}

export default function EventsSlugLayout({ children }: LayoutProps) {
  return children;
}

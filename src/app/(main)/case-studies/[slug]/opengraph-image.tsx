import { CASE_STUDIES, getCaseStudy } from "@/constants/caseStudies";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Orglife case study";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return renderOgImage({
    eyebrow: "Case Study",
    title: study?.brand ?? "Orglife Case Studies",
    footer: study?.industries.join(" · ") ?? "Selected work",
  });
}

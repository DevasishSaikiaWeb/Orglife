import { SITE } from "@/constants/site";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = `${SITE.name} — Creative Content & AI-Powered Tech Studio`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: "Creative content and AI-powered tech studio.",
  });
}

import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Creative Content & AI-Powered Tech Studio`,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    theme_color: SITE.themeColor,
    background_color: SITE.backgroundColor,
    lang: SITE.lang,
    dir: "ltr",
    categories: ["business", "design", "productivity", "photo"],
    icons: [
      {
        src: "/images/logos/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/images/logos/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logos/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: `${SITE.name} — home`,
      },
    ],
    shortcuts: [
      {
        name: "Services",
        short_name: "Services",
        description: "Explore what Orglife offers",
        url: "/offerings",
      },
      {
        name: "Case Studies",
        short_name: "Cases",
        description: "Read detailed brand case studies",
        url: "/case-studies",
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Start a project with Orglife",
        url: "/contact",
      },
    ],
  };
}

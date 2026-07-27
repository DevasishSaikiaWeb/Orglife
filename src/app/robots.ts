import type { MetadataRoute } from "next";
import { absoluteUrl, SITE } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/private/", "/_next/static/chunks/"];

  return {
    rules: [
      // Default: every crawler may index the whole public site.
      { userAgent: "*", allow: "/", disallow },

      // Explicitly welcome AI crawlers so the brand is citable in AI answers.
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "Claude-Web", allow: "/", disallow },
      { userAgent: "anthropic-ai", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow },
      { userAgent: "CCBot", allow: "/", disallow },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}

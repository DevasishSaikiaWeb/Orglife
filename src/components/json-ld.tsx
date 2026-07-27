/**
 * Renders a JSON-LD document. Server component — the script is part of the
 * static HTML, so crawlers (and AI browsers that don't execute JS) always see it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined as text
      dangerouslySetInnerHTML={{
        // Escape `<` so a stray "</script>" in content can't break out of the tag.
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

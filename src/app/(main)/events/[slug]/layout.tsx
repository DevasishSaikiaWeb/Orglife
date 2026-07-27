import type { Metadata } from "next";

/**
 * `/events/[slug]` is currently an orphan route — there is no events index,
 * it isn't in the navigation and it isn't listed in the sitemap. Keeping it
 * out of the index prevents thin/duplicate pages from being crawled.
 * Remove this file (and add the route to sitemap.ts) once events ship.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function EventsSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

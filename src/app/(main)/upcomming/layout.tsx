import type { Metadata } from "next";

/**
 * `/upcomming` is an orphan route — it is commented out of the navigation and
 * is not in the sitemap. Keeping it out of the index avoids thin/duplicate
 * pages. Delete this file and add the route to sitemap.ts when it ships.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function UpcommingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

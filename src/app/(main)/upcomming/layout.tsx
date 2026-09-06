import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

/**
 * `/upcomming` is an orphan route — it is commented out of the navigation and
 * is not in the sitemap. Keeping it out of the index avoids thin/duplicate
 * pages. Delete this file and add the route to sitemap.ts when it ships.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Upcoming",
    description:
      "Upcoming work in progress at Orglife — projects and collaborations currently being prepared.",
    path: "/upcomming",
    noIndex: true,
  }),
};

export default function UpcommingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

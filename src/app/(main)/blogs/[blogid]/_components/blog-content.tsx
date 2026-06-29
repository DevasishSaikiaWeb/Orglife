"use client";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDetailedBlog } from "@/constants/blogs";
import { PageDetails } from "./page-details";

export function BlogContent({ slug: slugFromParams }: { slug?: string }) {
  const pathname = usePathname();
  const lenis = useLenis(); // get Lenis instance

  const [data, setData] = useState<any>(null);
  const slug =
    slugFromParams ??
    (typeof pathname === "string"
      ? pathname.split("/").filter(Boolean).pop()
      : undefined);

  useEffect(() => {
    if (!slug) return;
    setData(getDetailedBlog(slug));
  }, [slug]);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // scroll to top instantly
    }
  }, [pathname, lenis]);

  return (
    <main className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PageDetails data={data} />
    </main>
  );
}

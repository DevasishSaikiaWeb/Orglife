"use client";

import { useLenis } from "lenis/react";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Events } from "@/constants/events";
import { PageDetails } from "./_components/page-details";

export default function EventsSlugPage() {
  // `useParams` is the client-component way to read the route segment. Reading
  // the `params` prop here warns in Next 15, where it is a promise.
  const params = useParams<{ slug: string | string[] }>();
  const pathname = usePathname();
  const lenis = useLenis();

  const raw = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const slug = raw ?? pathname?.split("/").filter(Boolean).pop() ?? "";
  const key = slug.replace(/\s+/g, "-") as keyof typeof Events;

  // Static lookup — no need to stage it through state, which only produced a
  // "Loading..." flash on every navigation.
  const data = Events?.[key] ?? null;

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return (
    <main className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PageDetails data={data} title={key} />
    </main>
  );
}

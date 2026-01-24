"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROJECT_DETAILS } from "@/constants/projectDetails";
import { PageDetails } from "./_components/page-details";
import { useLenis } from "lenis/react";
import { Events } from "@/constants/events";

function page({ params }: any) {
  const pathname = usePathname();
  const lenis = useLenis(); // get Lenis instance

  const [data, setData] = useState<any>(null);
  const slugFromParams = params?.slug;
  const slug = Array.isArray(slugFromParams)
    ? slugFromParams[0]
    : slugFromParams ??
      (typeof pathname === "string"
        ? pathname.split("/").filter(Boolean).pop()
        : undefined);

  console.log("check log == :", slug.replace(/\s+/g, "-").replace(/%20/g, " "));
  console.log("keys", Object.keys(Events));

  useEffect(() => {
    const events =
      Events?.[slug.replace(/\s+/g, "-").replace(/%20/g, " ")];
    console.log("filtered data :", events);
    setData(events);
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

export default page;

"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROJECT_DETAILS } from "@/constants/projectDetails";
import { PageDetails } from "./_components/page-details";

function page({ params }: any) {
  const pathname = usePathname();
  const [data, setData] = useState<any>(null);
  const slugFromParams = params?.slug;
  const slug = Array.isArray(slugFromParams)
    ? slugFromParams[0]
    : (slugFromParams ??
      (typeof pathname === "string"
        ? pathname.split("/").filter(Boolean).pop()
        : undefined));

  console.log("check log == :", slug.replace(/\s+/g, "-").replace(/%20/g, " "));
  console.log("keys" , Object.keys(PROJECT_DETAILS))

  useEffect(() => {
    const filtered_project = PROJECT_DETAILS?.[slug.replace(/\s+/g, "-").replace(/%20/g, " ")]
    console.log("filtered data :", filtered_project);
    setData(filtered_project);
  }, [slug]);

  return (
    <main className="space-y-32 md:space-y-64 pt-32 sm:pt-64 max-w-368 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <PageDetails data={data} />
    </main>
  );
}

export default page;

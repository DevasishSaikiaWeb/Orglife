import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IconButton } from "@/components/ui/icon-button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist or has moved. Explore Orglife's services, products, projects and case studies instead.",
  robots: { index: false, follow: true },
};

// Global 404 — renders inside the root layout (not the (main) group), so it
// pulls in the Header/Footer directly to stay consistent with the rest of the site.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex flex-col justify-center max-w-368 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <p className="font-heading font-bold text-muted-foreground text-[6rem] md:text-[10rem] leading-none">
          404
        </p>
        <h1 className="font-h1 [word-spacing:1.25rem] font-heading mt-4">
          Page not found.
        </h1>
        <p className="font-body mt-4">
          The page you’re looking for doesn’t exist or has moved. Let’s get you
          back on track.
        </p>
        <div className="mt-10">
          <Link href="/">
            <IconButton label="Back to Home" icon={<ArrowRightIcon />} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

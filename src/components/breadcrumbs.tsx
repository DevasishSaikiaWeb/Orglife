import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail. Pair with `breadcrumbSchema()` on the same page so
 * the rendered trail and the structured data always agree (Google requirement).
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (crumbs.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-small-body text-muted-foreground">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-x-2">
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.path}
                    className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRightIcon aria-hidden="true" className="size-4" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

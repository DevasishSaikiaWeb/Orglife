import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type ActionType = {
  label: string;
  href?: string;
};

type HeadingProps = {
  title: string;
  subtitle?: string;
  action?: ActionType;
  dot?: string;
};

export function Heading1({
  title,
  subtitle,
  dot,
}: Omit<HeadingProps, "action">) {
  return (
    <>
      {/* `whitespace-pre-line` honours explicit "\n" in a title so sections can
          control their own line breaks; ordinary titles still wrap normally. */}
      <h1 className="font-h1 [word-spacing:1.25rem] font-heading whitespace-pre-line">
        {title}
        {dot && <span className="dot-text">{dot}</span>}
      </h1>
      <p className="font-body mt-2">{subtitle}</p>
    </>
  );
}

export function Heading2({ title, subtitle, action, dot }: HeadingProps) {
  return (
    <>
      {/* `whitespace-pre-line` honours explicit "\n" in a title so sections can
          control their own line breaks; ordinary titles still wrap normally. */}
      <h2 className="font-h1 [word-spacing:1.25rem] font-heading whitespace-pre-line">
        {title}
        {dot && <span className="dot-text">{dot}</span>}
      </h2>
      {subtitle && (
        <p className="font-small-body max-w-4xl mt-1.5 text-muted-foreground">
          {subtitle}
        </p>
      )}
      {action && (
        <Button asChild className="mt-8">
          {action.href ? (
            <Link href={action.href}>{action.label}</Link>
          ) : (
            <p>{action.label}</p>
          )}
        </Button>
      )}
    </>
  );
}

export function Heading3({
  title,
  subtitle,
  subtitle2,
  toptitle,
  wide,
}: Omit<HeadingProps, "action" | "title"> & {
  title?: string;
  toptitle?: string;
  subtitle2?: string;
  /**
   * Drop `font-body`'s 75% cap so the copy fills its column and lines up with
   * the container's right edge. Set it on every block in a section, otherwise
   * neighbouring paragraphs end at different points.
   */
  wide?: boolean;
}) {
  const bodyWidth = wide ? "lg:max-w-none" : "";

  return (
    <>
      {toptitle && <p>{toptitle}</p>}
      <div
        className={cn(
          "flex md:flex-row flex-col gap-x-8 gap-y-2",
          toptitle && "mt-4",
        )}
      >
        {title ? (
          <h3 className="font-heading [word-spacing:0.6rem] leading-[90%] flex-1 font-h3">
            {title}
          </h3>
        ) : (
          <div className="flex-1 max-md:hidden" aria-hidden="true" />
        )}
        {subtitle && (
          <p className={cn("font-body flex-1 max-md:mt-1.5", bodyWidth)}>
            {subtitle}
          </p>
        )}
      </div>
      {subtitle2 && (
        <div className="flex md:flex-row flex-col gap-x-8 mt-4 md:mt-6">
          {/* Empty left column so the paragraph stays under the first one
              instead of repeating the heading. */}
          <div className="flex-1 max-md:hidden" aria-hidden="true" />
          <p className={cn("font-body flex-1", bodyWidth)}>{subtitle2}</p>
        </div>
      )}
    </>
  );
}

export function Heading4({
  title,
  subtitle,
  toptitle,
}: Omit<HeadingProps, "action"> & { toptitle?: string }) {
  return (
    <>
      {toptitle && <p>{toptitle}</p>}
      <div
        className={cn(
          "flex md:flex-row flex-col gap-x-8 gap-y-2",
          toptitle && "mt-4",
        )}
      >
        <h3 className="font-heading [word-spacing:0.3rem] leading-[120%] flex-1 font-h4">
          {title}
        </h3>
        {subtitle && (
          <p className="font-body flex-1 max-md:mt-1.5">{subtitle}</p>
        )}
      </div>
    </>
  );
}

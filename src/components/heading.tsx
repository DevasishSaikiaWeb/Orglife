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
};

export function Heading1({ title, subtitle }: Omit<HeadingProps, "action">) {
  return (
    <>
      <h1 className="font-h1 [word-spacing:1.25rem] font-heading">{title}</h1>
      <p className="font-body mt-2">{subtitle}</p>
    </>
  );
}

export function Heading2({ title, subtitle, action }: HeadingProps) {
  return (
    <>
      <h2 className="font-h1 [word-spacing:1.25rem] font-heading">{title}</h2>
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
        <h3 className="font-heading [word-spacing:0.6rem] leading-[90%] flex-1 font-h3">
          {title}
        </h3>
        {subtitle && (
          <p className="font-body flex-1 max-md:mt-1.5">{subtitle}</p>
        )}
      </div>
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

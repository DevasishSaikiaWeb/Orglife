import type { JSX } from "react";

interface ShowcaseColumnGridProps {
  leftSectionHeading: string;

  // rightSection: {
  //   heading: string | JSX.Element;
  //   description: string;
  // }[];

  rightFirstHeader: string | JSX.Element;
  rightFirstDescription: string;
  rightSecondHeader: string | JSX.Element;
  rightSecondDescription: string;
  rightThirdHeader: string | JSX.Element;
  rightThirdDescription: string;
}

export function ShowcaseColumnGrid({
  leftSectionHeading,
  // rightSection,
  rightFirstHeader,
  rightFirstDescription,
  rightSecondHeader,
  rightSecondDescription,
  rightThirdHeader,
  rightThirdDescription,
}: ShowcaseColumnGridProps) {
  return (
    <div className="flex flex-col md:flex-row gap-y-8 gap-x-6">
      <p className="text-[18px] text-balance flex-1 font-medium">
        {leftSectionHeading}
      </p>
      <div className="grid flex-3 w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6">
        {/* --- Map an array method ---

        {rightSection.map((item) => (
          <div
            key={item.heading.toString()}
            className="pl-4 border-l border-muted-foreground/75 flex flex-col justify-between h-96"
          >
            {typeof item.heading === "string" ? (
              <p className="uppercase font-heading text-[2.5rem] leading-10 font-semibold">
                {item.heading}
              </p>
            ) : (
              item.heading
            )}
            <p className="text-[14px] text-balance wrap-anywhere leading-relaxed mt-4 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))} 
         
         --- Solve the error --- */}

        <div className="max-md:pt-8 md:pl-4 max-md:border-t md:border-l border-muted-foreground/75 flex flex-col justify-between md:min-h-96">
          {typeof rightFirstHeader === "string" ? (
            <p className="uppercase font-heading text-[2.5rem] leading-10 font-semibold">
              {rightFirstHeader}
            </p>
          ) : (
            rightFirstHeader
          )}
          <p className="text-[14px] text-balance wrap-anywhere leading-relaxed mt-4 text-muted-foreground">
            {rightFirstDescription}
          </p>
        </div>

        <div className="max-md:pt-8 md:pl-4 max-md:border-t md:border-l border-muted-foreground/75 flex flex-col justify-between md:min-h-96">
          {typeof rightSecondHeader === "string" ? (
            <p className="uppercase font-heading text-wrap text-[2.5rem] leading-10 font-semibold">
              {rightSecondHeader}
            </p>
          ) : (
            rightSecondHeader
          )}
          <p className="text-[14px] text-balance wrap-anywhere leading-relaxed mt-4 text-muted-foreground">
            {rightSecondDescription}
          </p>
        </div>

        <div className="max-md:pt-8 md:pl-4 max-md:border-t md:border-l border-muted-foreground/75 flex flex-col justify-between md:min-h-96">
          {typeof rightThirdHeader === "string" ? (
            <p className="uppercase font-heading text-[2.5rem] leading-10 font-semibold">
              {rightThirdHeader}
            </p>
          ) : (
            rightThirdHeader
          )}
          <p className="text-[14px] text-balance wrap-anywhere leading-relaxed mt-4 text-muted-foreground">
            {rightThirdDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

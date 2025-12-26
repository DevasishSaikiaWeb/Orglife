import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ActionType = {
  label: string;
  href: string;
};

type ListType = {
  label: string;
  isComingSoon?: boolean;
};

type DetailsCardProps = {
  list: ListType[];
  title: string;
  description?: string;
  action: ActionType;
};

export function DetailsCard({
  list,
  // For old layout
  // title,
  description,
  action,
}: DetailsCardProps) {
  return (
    <section>
      {/* --- For old layout ---
      <Heading2 title={title} /> */}

      <div className="flex md:flex-row flex-col gap-8 mt-8">
        <div className="flex-1">
          <p className="text-balance leading-relaxed">{description}</p>
          <Button asChild className="mt-8">
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>
        <ul className="flex-3 divide-y divide-muted-foreground/60 border-y border-muted-foreground/60">
          {list.map((item) => (
            <li
              key={item.label}
              className="py-4 gap-4 md:gap-16 flex items-center"
            >
              <CheckIcon className="opacity-75" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

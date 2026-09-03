import Link from "next/link";
import { Button } from "@/components/ui/button";

function LogoMark({ rotation }: { rotation: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className="size-6 shrink-0 fill-foreground opacity-75"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M3.6,25.7c5.4,6.9,15.4,8.1,22.2,2.7,4.5-3.6,6.6-9.2,5.8-14.5-3.1.4-6.4-.8-8.6-3.5-2.1-2.7-2.5-6.2-1.4-9.1C16.6-.7,10.7,0,6.2,3.5-.7,8.9-1.8,18.9,3.6,25.7Z" />
    </svg>
  );
}

const ROTATIONS = [0, 45, 90, 135, 180, 225, 270, 315];

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
        <ul className="flex-3 divide-y divide-muted-foreground/60 border-b border-muted-foreground/60">
          {list.map((item, index) => (
            <li
              key={item.label}
              className="py-4 gap-4 md:gap-16 flex items-center"
            >
              <LogoMark rotation={ROTATIONS[index % ROTATIONS.length]} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

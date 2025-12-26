import type { JSX } from "react";

type IconButtonType = {
  label: string;
  icon: JSX.Element;
};

export function IconButton({ icon, label }: IconButtonType) {
  return (
    <div className="group hover:gap-4 transition-all duration-300 cursor-pointer flex items-center gap-8 ease-in-out hover:">
      <span>{label}</span>
      <span className="bg-foreground text-background rounded-full size-10 flex items-center justify-center ease-in-out group-hover:bg-foreground/80 transition-colors duration-300">
        {icon}
      </span>
    </div>
  );
}

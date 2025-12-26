import Link from "next/link";
import { Logo } from "./footer-logo";

export function Footer() {
  return (
    <footer className="max-w-368 pt-16 md:pt-24 pb-16 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Link href={"/"} className="w-full">
        <Logo />
      </Link>
      <div className="flex md:flex-row flex-col-reverse mt-8 gap-y-2 md:justify-between md:items-center">
        <p className="leading-relaxed text-muted-foreground">
          Copyright &copy; Orglife®
          <br />
          An Impact-first Creative Partner
        </p>
        <p className="leading-relaxed text-muted-foreground">
          This website has been built following
          <br />
          low-carbon principles of web design and development.
        </p>
      </div>
    </footer>
  );
}

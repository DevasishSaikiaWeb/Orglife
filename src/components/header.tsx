"use client";

import { useLenis } from "lenis/react";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavItemType = {
  label: string | JSX.Element;
  href: string;
};

const NAV_ITEMS: NavItemType[] = [
  {
    label: "Services",
    href: "/offerings",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/contact",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lenis = useLenis();
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: we intentionally run this effect only on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header
        className={cn(
          "z-9999 backdrop-blur-md transition-colors duration-500 fixed inset-x-0 top-0",
          isOpen ? "bg-background" : "bg-background/75",
        )}
      >
        <nav className="max-w-368 h-24 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="cursor-pointer group flex uppercase font-heading font-medium tracking-widest items-center gap-4"
            aria-expanded={isOpen}
            aria-controls="site-menu"
          >
            <span>{!isOpen ? "Menu" : "Close"}</span>
            <div className="space-y-1.5">
              <div className="bg-foreground h-0.5 w-8"></div>
              <div className="bg-foreground h-0.5 w-8"></div>
            </div>
          </button>
        </nav>
      </header>
      <ul
        className={cn(
          "fixed z-9990 top-24 bottom-0 transition-all flex flex-col py-8 duration-300 ease-in right-0 left-0 min-w-sm bg-background backdrop-blur-lg",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="max-w-368 w-full h-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="flex gap-8 h-full md:flex-row flex-col-reverse">
            <div className="flex-1 hidden md:flex flex-col gap-y-2">
              <p className="text-balance leading-relaxed">
                406, Trinity Tower, Opposite Pragati Grand Hotel, Zydus Hospital
                Road, Thaltej
                <br />
                380059
              </p>
              <p className="underline text-muted-foreground underline-offset-4">
                devasish.saikia@orglife.co.in
              </p>
              <div className="mt-8 flex gap-6 items-center">
                <Link
                  className="size-8 rounded-full flex items-center justify-center bg-foreground text-background"
                  href={"www.facebook.com"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={20}
                  >
                    <title>facebook</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                  </svg>
                </Link>
                <Link
                  className="size-8 rounded-full flex items-center justify-center bg-foreground text-background"
                  href={"www.instagram.com"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={20}
                  >
                    <title>instagram</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                </Link>
                <Link
                  className="size-8 rounded-full flex items-center justify-center bg-foreground text-background"
                  href={"www.linkedin.com"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={20}
                  >
                    <title>linkedin</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div
              data-lenis-prevent
              className="overflow-y-auto flex-3 space-y-2"
            >
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.href}
                  className="text-foreground/50 border-b border-dotted pb-2 text-nowrap transition-all duration-300 hover:text-foreground font-semibold text-4xl md:text-[3.5rem] min-[57rem]:text-[5rem] md:leading-16 uppercase font-heading"
                >
                  <Link
                    onClick={toggleMenu}
                    className="w-full flex items-center gap-2 justify-between"
                    href={item.href}
                  >
                    {item.label}
                    <ArrowUpRightIcon className="size-10 max-[24rem]:hidden p-0" />
                  </Link>
                </li>
              ))}
            </div>
          </div>
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
        </div>
      </ul>
    </>
  );
}

export function Logo() {
  return (
    <Image src="/images/logos/logoO.svg" width={100} height={100} alt="logo" />
  );
}

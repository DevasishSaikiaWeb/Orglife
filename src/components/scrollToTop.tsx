"use client";
import { useLenis } from "lenis/react";
import { ChevronUp } from "lucide-react";
import { easeInOut } from "motion";
import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const lenis = useLenis();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!lenis) return null;

  return (
    <>
      {showButton && (
        <div className="cursor-pointer group fixed bottom-8 right-8 h-10 w-10 rounded-sm flex justify-center items-center bg-white">
          <ChevronUp
            className="h-7 w-7 text-background group-hover:scale-125 transition-transform duration-200"
            onClick={() => lenis.scrollTo(0, { duration: 2 , easing : easeInOut })}
          />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;

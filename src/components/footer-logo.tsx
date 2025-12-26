"use client";

import { useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function Logo() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="group">
        <Image
          src="/images/logos/logoO.svg"
          alt="Orglife Logo"
          className="w-full hidden group-hover:block"
          width={1000}
          height={800}
        />
        <Image
          src="/images/logos/logoW.svg"
          alt="Orglife Logo"
          width={1000}
          height={800}
          className="w-full group-hover:hidden"
        />
      </div>

      {/* <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      // fill="#F8941D"
      // className="fill-white w-full transition-colors duration-300 ease-in-out hover:fill-[#F8941D]"
      className="w-full transition-colors duration-300 ease-in-out"
      version="1.1"
      viewBox="0 0 55369.93 11044.67"
      initial={{ fill: "#ffffff" }}
      animate={{ fill: isInView ? "#F8941D" : "#ffffff" }}
      transition={{ duration: isInView ? 1.5 : 0, ease: "linear" }}
    > </motion.svg>
     */}
    </>
  );
}

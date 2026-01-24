"use client";
import { useEffect, useRef, useState } from "react";
import { tabs } from "@/constants/work";

function Tabs() {
  const [active, setActive] = useState(tabs[0]);
  const tabRefs = useRef([]);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeIndex = tabs.indexOf(active);
    const activeTab = tabRefs.current[activeIndex];

    if (activeTab) {
      setUnderlineProps({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [active]);

  return (
    <div className="mt-4 relative border-b border-muted-foreground/50 w-fit flex overflow-x-auto">
      {/* Sliding underline */}
      <span
        className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
        style={{
          left: underlineProps.left,
          width: underlineProps.width,
        }}
      />

      {tabs.map((tab, i) => (
        <button
          key={tab}
          type="button"
          ref={(el) => (tabRefs.current[i] = el)}
          onClick={() => setActive(tab)}
          className={`relative px-3 py-3 mt-4 text-sm 
            ${active === tab ? "text-primary font-medium" : "text-muted-foreground"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;

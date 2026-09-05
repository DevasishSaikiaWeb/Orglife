"use client";

import { useEffect } from "react";

const MEDIA_TAGS = new Set(["IMG", "VIDEO", "CANVAS", "PICTURE"]);

/** True for media elements, and for anything nested inside <picture>/<video>. */
function isMedia(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  if (MEDIA_TAGS.has(target.tagName)) return true;
  return Boolean(target.closest("picture, video"));
}

export function MediaProtection() {
  useEffect(() => {
    function block(event: Event) {
      if (isMedia(event.target)) event.preventDefault();
    }

    document.addEventListener("contextmenu", block, { capture: true });
    document.addEventListener("dragstart", block, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", block, { capture: true });
      document.removeEventListener("dragstart", block, { capture: true });
    };
  }, []);

  return null;
}

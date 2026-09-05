/** One logo cell as rendered from md up: w-32 (128px) + gap-16 (64px). */
export const MARQUEE_ITEM_PX = 192;

/** Widest the page container ever gets — max-w-368 is 1472px. */
export const MARQUEE_VIEWPORT_PX = 1472;

/**
 * Travel speed in px per second. Durations are derived from it rather than
 * fixed, because a fixed duration has to cover the whole track in the same
 * time — so every logo added made a marquee visibly faster. Change this to
 * change the pace of every marquee at once.
 */
export const MARQUEE_SPEED_PX_PER_SEC = 60;

/**
 * Copies per half-track, and the loop length that keeps the pace constant.
 * `itemPx` is the rendered cell width plus its gap — pass it when a marquee
 * uses a different logo size, or the derived speed drifts off 60px/s.
 */
export function marqueeTiming(count: number, itemPx: number = MARQUEE_ITEM_PX) {
  const trackPx = Math.max(1, count * itemPx);
  // Half the track must be wider than the container, or its trailing edge
  // shows at the loop point.
  const repeat = Math.max(1, Math.ceil(MARQUEE_VIEWPORT_PX / trackPx));
  return {
    repeat,
    duration: Math.round((repeat * trackPx) / MARQUEE_SPEED_PX_PER_SEC),
  };
}

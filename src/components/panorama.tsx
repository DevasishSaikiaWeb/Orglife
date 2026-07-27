"use client";

import View360, {
  ControlBar,
  EquirectProjection,
  LoadingSpinner,
} from "@egjs/react-view360";
import "@egjs/view360/css/view360.min.css";
import { useMemo } from "react";

type PanoramaProps = {
  src: string;
  video?: boolean;
};

export default function Panorama({ src, video }: PanoramaProps) {
  const projection = useMemo(
    () => new EquirectProjection({ src, video }),
    [src, video],
  );

  const plugins = useMemo(
    () => [
      new ControlBar({ vrButton: true, fullscreenButton: true }),
      new LoadingSpinner(),
    ],
    [],
  );

  return (
    <View360
      className="size-full"
      projection={projection}
      plugins={plugins}
      autoplay={video}
    />
  );
}

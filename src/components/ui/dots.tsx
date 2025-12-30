"use client";

import React, { useEffect, useState } from "react";

const triangle = (
  <svg className="fill-primary size-6" viewBox="0 0 100 100">
    <polygon points="50,10 90,90 10,90" />
  </svg>
);

const DotGrid: React.FC = () => {
  const [rotations, setRotations] = useState<number[][]>([
    [90, 180], // [0][0], [0][1]
    [0, 270], // [1][0], [1][1]
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotations((prev) => [
        [
          // [0][0] — rotate clockwise 90°
          // prev[0][0] == 90 ? 180 : 90,
          prev[0][0] + 90,

          // [0][1] — point ↓ → → ↑ → ← → ↓
          prev[0][1] + 90,
          // prev[0][1] == 270 ? 180 : 270,
        ],
        [
          // [1][0] — rotate counterclockwise
          prev[1][0] + 90,
          // prev[1][0] == 0 ? 90 : 0,

          // [1][1] — rotate counterclockwise
          prev[1][1] + 90,
          // prev[1][1] == 360 ? 270 : 360,
        ],
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {rotations.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((rotation, j) => (
            <div
              key={j}
              className="flex h-6 w-6 items-center justify-center transition-transform duration-500"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {triangle}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DotGrid;

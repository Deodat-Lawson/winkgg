"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number; // percent
  delay: number; // seconds
  duration: number; // seconds
  size: number; // px
  opacity: number;
  sway: number; // px
}

export function SnowfallEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7,
      sway: 18 + Math.random() * 22,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white romantic-snowflake"
          style={
            {
              left: `${flake.x}%`,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              ["--snow-duration" as never]: `${flake.duration}s`,
              ["--snow-delay" as never]: `${flake.delay}s`,
              ["--snow-sway" as never]: `${flake.sway}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}



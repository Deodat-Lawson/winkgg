"use client";

import { useEffect, useState } from "react";

interface BokehParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function BokehEffect() {
  const [particles, setParticles] = useState<BokehParticle[]>([]);

  useEffect(() => {
    const bokeh: BokehParticle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 80,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      opacity: 0.1 + Math.random() * 0.3,
    }));
    setParticles(bokeh);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full romantic-bokeh"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(212, 175, 55, 0) 70%)",
              filter: "blur(20px)",
              ["--bokeh-duration" as never]: `${p.duration}s`,
              ["--bokeh-delay" as never]: `${p.delay}s`,
              ["--bokeh-opacity" as never]: `${p.opacity}`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}



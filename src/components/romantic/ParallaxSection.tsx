"use client";

import { useEffect, useRef, useState } from "react";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function ParallaxSection({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress 0 -> 1 while element moves through viewport
      const progress = clamp01((vh - rect.top) / (vh + rect.height));
      const y = (1 - progress) * 100 * speed - progress * 100 * speed;
      const opacity = clamp01(progress < 0.3 ? progress / 0.3 : progress > 0.7 ? (1 - progress) / 0.3 : 1);

      setStyle({
        transform: `translate3d(0, ${y}px, 0)`,
        opacity,
        willChange: "transform, opacity",
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref}>
      <div style={style}>{children}</div>
    </div>
  );
}



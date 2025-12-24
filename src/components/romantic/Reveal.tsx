"use client";

import { useRef } from "react";
import { useIntersectionVisible } from "./useIntersectionVisible";

export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionVisible(ref, { rootMargin: "-100px", once: true });

  return (
    <div
      ref={ref}
      className={`romantic-reveal ${isVisible ? "is-visible" : ""} ${className ?? ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}



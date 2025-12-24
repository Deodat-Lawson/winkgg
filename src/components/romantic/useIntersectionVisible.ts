"use client";

import { useEffect, useState } from "react";

export function useIntersectionVisible<T extends Element>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit & { once?: boolean },
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const once = options?.once ?? true;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      options,
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options?.root, options?.rootMargin, options?.threshold, options?.once]);

  return isVisible;
}



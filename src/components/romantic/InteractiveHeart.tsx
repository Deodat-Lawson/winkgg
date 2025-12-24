"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

export function InteractiveHeart() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleClick = (e: MouseEvent) => {
      const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
      setHearts((prev) => [...prev, newHeart]);
      window.setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Cursor follower */}
      <div
        className="absolute w-8 h-8 pointer-events-none transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 16}px, ${mousePosition.y - 16}px, 0)`,
        }}
      >
        <Heart className="w-full h-full text-[#D4AF37] opacity-30 fill-[#D4AF37]" />
      </div>

      {/* Click hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.x - 16,
            top: heart.y - 16,
            animation: "heart-float 1.8s ease-out forwards",
          }}
        >
          <Heart className="w-8 h-8 text-[#8B1538] fill-[#8B1538]" />
        </div>
      ))}
    </div>
  );
}



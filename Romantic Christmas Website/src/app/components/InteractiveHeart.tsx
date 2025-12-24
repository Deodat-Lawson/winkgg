import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

export function InteractiveHeart() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50" onClick={handleClick}>
      {/* Cursor follower */}
      <motion.div
        className="absolute w-8 h-8 pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      >
        <Heart className="w-full h-full text-[#D4AF37] opacity-30 fill-[#D4AF37]" />
      </motion.div>

      {/* Click hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{
            x: heart.x - 16,
            y: heart.y - 16,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            y: heart.y - 200,
            scale: 1.5,
            opacity: 0,
          }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Heart className="w-8 h-8 text-[#8B1538] fill-[#8B1538]" />
        </motion.div>
      ))}
    </div>
  );
}

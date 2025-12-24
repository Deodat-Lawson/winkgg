import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
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
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
          initial={{ y: -20, x: 0 }}
          animate={{
            y: '100vh',
            x: [0, 20, -20, 0],
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              delay: flake.delay,
              ease: 'linear',
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  );
}

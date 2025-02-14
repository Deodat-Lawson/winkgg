"use client"
import React from 'react';
import { Heart, Gift, Stars, Sparkles } from 'lucide-react';

const FloatingHeart = ({ size, className, delay }) => (
    <div
        className={`absolute animate-bounce ${className}`}
        style={{ animationDelay: delay }}
    >
      <Heart className="text-red-400 opacity-50" size={size} />
    </div>
);

const SparkleElement = ({ className }) => (
    <div className={`absolute ${className}`}>
      <Sparkles className="text-yellow-400 animate-pulse" size={24} />
    </div>
);

const ValentinePage = () => {
  return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 flex flex-col items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Floating Hearts */}
          {Array.from({ length: 20 }).map((_, i) => (
              <FloatingHeart
                  key={i}
                  size={16 + Math.random() * 24}
                  className={`
              top-${Math.floor(Math.random() * 100)}
              left-${Math.floor(Math.random() * 100)}
              animate-bounce
            `}
                  delay={`${Math.random() * 2}s`}
              />
          ))}

          {/* Sparkles */}
          {Array.from({ length: 15 }).map((_, i) => (
              <SparkleElement
                  key={`sparkle-${i}`}
                  className={`
              top-${Math.floor(Math.random() * 100)}
              left-${Math.floor(Math.random() * 100)}
            `}
              />
          ))}
        </div>

        {/* Header with Animation */}
        <div className="flex items-center gap-4 mt-8 animate-bounce">
          <Gift className="text-red-500 animate-spin" size={40} />
          <div className="relative">
            <h1 className="text-5xl font-bold text-red-600 animate-pulse">
              Happy Valentine's Day
            </h1>
            <Stars className="absolute -top-6 -right-6 text-yellow-400 animate-spin" size={24} />
            <Stars className="absolute -bottom-6 -left-6 text-yellow-400 animate-spin" size={24} />
          </div>
          <Gift className="text-red-500 animate-spin" size={40} />
        </div>

        {/* Centered Video Container */}
        <div className="flex-1 w-full flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl">
            <div className="absolute inset-0 -m-4 bg-gradient-to-r from-red-200 via-pink-200 to-red-200 rounded-lg animate-pulse" />

            <div className="relative bg-white rounded-lg shadow-lg p-6 flex justify-center">
              <div className="relative bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                    width="800"
                    height="450"
                    className="block"
                    src="https://www.youtube.com/embed/eeQr9hSZFr0?si=GF5O5XwcAxX7dUVA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Valentine's Day Video"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorations */}
        <div className="mb-8 flex items-center gap-8">
          <div className="flex items-center gap-2 animate-bounce">
            <Heart className="text-red-500" size={24} fill="red" />
            <Heart className="text-pink-500" size={32} fill="pink" />
            <Heart className="text-red-500" size={24} fill="red" />
          </div>
          <div className="flex items-center gap-2 animate-bounce delay-100">
            <Heart className="text-pink-500" size={24} fill="pink" />
            <Heart className="text-red-500" size={32} fill="red" />
            <Heart className="text-pink-500" size={24} fill="pink" />
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="fixed top-0 left-0 p-8">
          <div className="animate-spin">
            <Gift className="text-red-500" size={48} />
          </div>
        </div>
        <div className="fixed top-0 right-0 p-8">
          <div className="animate-spin">
            <Gift className="text-red-500" size={48} />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 p-8">
          <div className="animate-spin">
            <Gift className="text-red-500" size={48} />
          </div>
        </div>
        <div className="fixed bottom-0 right-0 p-8">
          <div className="animate-spin">
            <Gift className="text-red-500" size={48} />
          </div>
        </div>
      </div>
  );
};

export default ValentinePage;
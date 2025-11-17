"use client"

import React from "react";
import { Gift, Heart, Sparkles, Stars } from "lucide-react";

type FloatingHeartProps = {
  size: number;
  className: string;
  delay: string;
};

const FloatingHeart = ({ size, className, delay }: FloatingHeartProps) => (
  <div className={`absolute animate-bounce ${className}`} style={{ animationDelay: delay }}>
    <Heart className="text-red-400 opacity-50" size={size} />
  </div>
);

type SparkleElementProps = {
  className: string;
};

const SparkleElement = ({ className }: SparkleElementProps) => (
  <div className={`absolute ${className}`}>
    <Sparkles className="text-yellow-400 animate-pulse" size={24} />
  </div>
);

const detailCards = [
  {
    title: "Title",
    description: "Best Girlfriend / Love of My Life / CEO of My Heart",
  },
  {
    title: "Start Date",
    description: "Immediately – retroactive to the day I met you",
  },
  {
    title: "Location",
    description: "Hybrid: remote cuddles accepted, in-person adored. Daily commute to my heart required.",
  },
];

const benefits = [
  "Unlimited hugs & competitive cuddle package",
  "Guaranteed boyfriend loyalty and weekly date nights",
  "Random forehead kisses (no cap) and PTO: Please Touch Often",
  "Scientifically proven health boost: more serotonin, less stress",
  "Snack delivery on demand & 24/7 emotional support with zero downtime",
  "Long-term growth opportunities: more love, more memories, maybe a shared mortgage",
];

const responsibilities = [
  "Brightening my days simply by existing",
  "Stealing my hoodies and wearing them better than I ever could",
  "Making me grin at random because I remembered something adorable",
  "Going on adventures, both epic and everyday",
  "Letting me hype you up nonstop and being breathtaking without trying",
  "Allowing me to love you extravagantly and consistently",
];

const requirements = [
  "Elite-tier beauty and a 10/10 face card that never declines",
  "God-level emotional intelligence and S-tier girlfriend energy",
  "Excellent communication, especially when you're teasing me",
  "A heart so warm it should be nationally protected",
];

const ValentinePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 flex flex-col items-center overflow-hidden text-gray-800">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingHeart
            key={i}
            size={16 + Math.random() * 24}
            className={`top-${Math.floor(Math.random() * 100)} left-${Math.floor(Math.random() * 100)} animate-bounce`}
            delay={`${Math.random() * 2}s`}
          />
        ))}

        {Array.from({ length: 15 }).map((_, i) => (
          <SparkleElement
            key={`sparkle-${i}`}
            className={`top-${Math.floor(Math.random() * 100)} left-${Math.floor(Math.random() * 100)}`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <Gift className="text-red-500 animate-spin" size={40} />
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl font-bold text-red-600 animate-pulse">
                Dear [Her Name],
              </h1>
              <Stars className="absolute -top-6 -right-6 text-yellow-400 animate-spin" size={24} />
              <Stars className="absolute -bottom-6 -left-6 text-yellow-400 animate-spin" size={24} />
            </div>
            <Gift className="text-red-500 animate-spin" size={40} />
          </div>
          <p className="max-w-3xl text-lg leading-relaxed">
            After a thorough review of your exceptional qualifications—including your beauty, intelligence, humor, kindness,
            and your undeniable track record of making my life exponentially better—you have been selected as the #1 candidate
            for the highly competitive, full-time role of <span className="font-semibold text-red-500">Best Woman & Girlfriend</span>.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed">
            Following final-round evaluations (which you passed with flying colors, charm, and an unfairly cute smile), it is my
            great joy to formally extend the following offer:
          </p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {detailCards.map((card) => (
            <div key={card.title} className="bg-white/80 rounded-2xl shadow-lg p-6 backdrop-blur border border-pink-200">
              <p className="text-sm uppercase tracking-wide text-pink-500">{card.title}</p>
              <p className="mt-2 text-lg font-semibold">{card.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-white/80 rounded-3xl shadow-xl p-8 backdrop-blur border border-red-200">
          <h2 className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <Heart className="text-red-500" fill="currentColor" size={28} /> Compensation & Benefits
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Compensation here is paid in joy, affection, and unlimited perks designed exclusively for you:
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-red-500">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white/90 rounded-3xl shadow-lg p-8 border border-pink-200">
            <h3 className="text-2xl font-semibold text-pink-600">✨ Job Responsibilities</h3>
            <ul className="mt-4 space-y-3">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Heart className="text-red-400" size={18} fill="#f87171" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/90 rounded-3xl shadow-lg p-8 border border-yellow-200">
            <h3 className="text-2xl font-semibold text-yellow-600">✨ Candidate Requirements</h3>
            <p className="mt-2 text-gray-700">You have already demonstrated the following and more—we believe you are wildly overqualified.</p>
            <ul className="mt-4 space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles className="text-yellow-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-r from-pink-100 to-red-100 rounded-3xl border border-red-200 p-8 text-center shadow-inner">
          <h3 className="text-3xl font-bold text-red-600">✨ Acceptance</h3>
          <p className="mt-4 text-lg">
            To accept this offer, simply reply with:
            <span className="block mt-2 font-semibold text-2xl text-red-500">
              “Yes, I accept being your Best Girlfriend and the love of your life.”
            </span>
            (Or just kiss me, which also counts legally.)
          </p>
          <button className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg hover:bg-red-600 transition">
            <Heart className="text-white" fill="currentColor" size={20} /> Accept with a Kiss
          </button>
        </section>

        <section className="mt-12 text-center text-lg leading-relaxed bg-white/70 rounded-3xl p-8 border border-pink-100 shadow">
          <p>
            Thank you again for your interest in joining this lifelong partnership. We look forward to many years of shared laughter,
            late-night talks, cozy mornings, and unforgettable memories.
          </p>
          <p className="mt-6 font-semibold text-red-600">
            Sincerely,
            <br />
            Timothy Lin
            <br />
            CEO, President, and Unconditionally Devoted Partner
            <br />
            Timothy Lin Global Affection, Inc.
          </p>
        </section>
      </div>

      {/* Bottom Decorations */}
      <div className="relative z-10 mb-10 flex items-center gap-8">
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
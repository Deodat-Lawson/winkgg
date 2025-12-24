"use client";

import { Heart, Sparkles, Gift } from "lucide-react";
import { useState } from "react";
import { SnowfallEffect } from "~/components/romantic/SnowfallEffect";
import { BokehEffect } from "~/components/romantic/BokehEffect";
import { InteractiveHeart } from "~/components/romantic/InteractiveHeart";
import { PhotoModal } from "~/components/romantic/PhotoModal";
import { ParallaxSection } from "~/components/romantic/ParallaxSection";
import { Reveal } from "~/components/romantic/Reveal";

type SelectedPhoto = {
  src: string;
  title: string;
  description: string;
};

export default function Page() {
  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto | null>(null);

  const photos = {
    ammora: {
      src: "/romantic/ammora.png",
      title: "Ammora",
      description: "The restaurant that had the perfect envionment for us to spend a romantic evening together.",
    },
    ruxton: {
      src: "/romantic/ruxton.png",
      title: "The Ruxton",
      description: "The best steak you have ever had in your life.",
    },
    charleston: {
      src: "https://images.unsplash.com/photo-1734901404365-e93d979b575b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNhbmRsZXMlMjB3YXJtJTIwZ2xvd3xlbnwxfHx8fDE3NjY1ODM1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Charleston",
      description: "Where everything started...",
    },
    disney: {
      src: "/romantic/disney.png",
      title: "Disney ✨",
      description: "Where we spent our spring break together. The happiest place on earth.",
    },
    cancun: {
      src: "/romantic/cancun.png",
      title: "Cancun 🌊 — The Beloved",
      description: "Where we spent our best thanksgiving together. The most beautiful place I have ever been to with the most beautiful person I have ever met.",
    },
  } satisfies Record<string, SelectedPhoto>;

  return (
    <div className="min-h-screen bg-[#1a0f0f] text-[#FFFDF7] overflow-x-hidden">
      <SnowfallEffect />
      <BokehEffect />
      <InteractiveHeart />

      <PhotoModal
        isOpen={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        imageSrc={selectedPhoto?.src ?? ""}
        title={selectedPhoto?.title ?? ""}
        description={selectedPhoto?.description ?? ""}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1641543488944-4a054a532950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjB0cmVlJTIwbGlnaHRzJTIwYm9rZWh8ZW58MXx8fHwxNzY2NTY5MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl animate-fade-in">
          <div className="mb-6 animate-romantic-pulse">
            <Heart className="w-16 h-16 mx-auto text-[#8B1538] fill-[#8B1538] opacity-80" />
          </div>

          <h1
            className="font-['Playfair_Display'] mb-8 text-[#FFFDF7]"
            style={{ fontSize: "4.5rem", lineHeight: "1.1" }}
          >
            Merry Christmas, My Love
          </h1>

          <p className="font-['Crimson_Text'] italic text-[1.8rem] text-[#D4AF37] mb-4">
            Timothy, senior year — and somehow you’re still my favorite part of every day.
          </p>
          <p className="font-['Crimson_Text'] italic text-[1.25rem] text-[#FFFDF7]/80">
            你是我最喜欢的人。圣诞快乐，宝贝。
          </p>

          <div className="mt-12">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Our Love Story */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="font-['Playfair_Display'] text-center mb-20 text-[#D4AF37]"
              style={{ fontSize: "3.5rem" }}
            >
              Our Love Story
            </h2>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <div className="relative bg-gradient-to-br from-[#8B1538]/20 to-[#2C5F2D]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.30)]">
                <Heart className="absolute top-6 right-6 w-8 h-8 text-[#8B1538] opacity-50" />
                <p className="font-['Crimson_Text'] italic text-[1.5rem] text-[#FFFDF7]">
                  “It’s been months, and somehow it still feels like we’re in the best part of the
                  beginning.”
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="relative bg-gradient-to-br from-[#2C5F2D]/20 to-[#8B1538]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.30)]">
                <Sparkles className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37] opacity-50" />
                <p className="font-['Crimson_Text'] italic text-[1.5rem] text-[#FFFDF7]">
                  “I’m a senior. You’re a junior at Hopkins. We’re busy… but we still choose each
                  other.”
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={240}>
              <div className="relative bg-gradient-to-br from-[#8B1538]/20 to-[#2C5F2D]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.30)]">
                <Heart className="absolute top-6 right-6 w-8 h-8 text-[#8B1538] opacity-50" />
                <p className="font-['Crimson_Text'] italic text-[1.5rem] text-[#FFFDF7]">
                  “Different campuses, different chapters — same story: us, figuring it out together.”
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={300}>
            <div className="mt-16 flex justify-center gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#8B1538] animate-romantic-dot"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Moments I'll Never Forget */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2
              className="font-['Playfair_Display'] text-center mb-8 text-[#D4AF37]"
              style={{ fontSize: "3.5rem" }}
            >
              Moments I’ll Never Forget
            </h2>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="font-['Crimson_Text'] text-center italic text-[1.3rem] mb-20 text-[#FFFDF7]/80">
              The kind of memories that glow brighter than any Christmas light.
            </p>
          </Reveal>

          {/* Nights We Dressed Up */}
          <Reveal>
            <div className="mb-24">
              <h3 className="font-['Dancing_Script'] text-[2.5rem] text-[#8B1538] mb-12 text-center">
                Nights We Dressed Up for Each Other
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { key: "ammora", label: "Ammora", sub: "Where the vibe matched your smile" },
                  { key: "ruxton", label: "The Ruxton", sub: "The night felt like a movie" },
                  { key: "charleston", label: "Charleston", sub: "Candlelight + us talking for hours" },
                ].map((item) => {
                  const photo = photos[item.key as keyof typeof photos];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer text-left transition-all duration-300 hover:scale-[1.05] hover:border-[#D4AF37]/80"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={`${item.label} - dinner`}
                        className="w-full h-[400px] object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="font-['Dancing_Script'] text-[1.8rem] text-[#D4AF37]">
                          {item.label}
                        </p>
                        <p className="font-['Inter'] text-sm text-[#FFFDF7]/80">{item.sub}</p>
                      </div>
                      <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center">
                        <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                          Click to view
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Places That Felt Like Home */}
          <Reveal>
            <div>
              <h3 className="font-['Dancing_Script'] text-[2.5rem] text-[#2C5F2D] mb-12 text-center">
                Places That Felt Like Home (Because You Were There)
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { key: "disney", label: "Disney ✨", sub: "You made it magical" },
                  { key: "cancun", label: "Cancun 🌊 — The Beloved", sub: "My favorite sunshine memory" },
                ].map((item) => {
                  const photo = photos[item.key as keyof typeof photos];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer text-left transition-all duration-300 hover:scale-[1.05] hover:border-[#D4AF37]/80"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={item.label}
                        className="w-full h-[450px] object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                        <p className="font-['Dancing_Script'] text-[2rem] text-[#D4AF37] mb-2">
                          {item.label}
                        </p>
                        <p className="font-['Inter'] text-[#FFFDF7]/80">{item.sub}</p>
                      </div>
                      <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center">
                        <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                          Click to view
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* You & Your Dreams */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent to-[#2C5F2D]/10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-['Playfair_Display'] mb-12 text-[#D4AF37]" style={{ fontSize: "3.5rem" }}>
              I Believe in You — Always
            </h2>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="bg-gradient-to-br from-[#8B1538]/20 to-[#2C5F2D]/20 backdrop-blur-sm border border-[#D4AF37]/40 rounded-2xl p-12 shadow-2xl mb-16">
              <p className="font-['Crimson_Text'] text-[1.4rem] leading-relaxed mb-6 text-[#FFFDF7]">
                I know school can be a lot — classes, meetings, deadlines — and you still show up
                with that steady, brave heart. I know you are having the busiest semester ever, and stressed about your job search.
                But I know you can do it. You are so smart and so talented. I know you will find everything you want.
              </p>
              <p className="font-['Crimson_Text'] text-[1.4rem] leading-relaxed mb-6 text-[#FFFDF7]">
                Even when we’re on different schedules, I’m always cheering for you; I know you can do it. I love you so much.
              </p>
              <p className="font-['Crimson_Text'] text-[1.4rem] leading-relaxed text-[#D4AF37] italic">
                你真的很棒。别忘了你有多聪明、多美、多厉害。
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Future", icon: Sparkles, color: "#D4AF37" },
              { label: "Dreams", icon: Heart, color: "#8B1538" },
              { label: "Next Chapter", icon: Gift, color: "#2C5F2D" },
            ].map((item, index) => (
              <Reveal key={item.label} delayMs={index * 120}>
                <div className="relative group">
                  <div
                    className="bg-gradient-to-br from-[#1a0f0f] to-[#2a1f1f] border-4 border-[#D4AF37]/40 rounded-2xl p-8 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
                    style={{ borderColor: "rgba(212,175,55,0.40)" }}
                  >
                    <item.icon className="w-12 h-12 mx-auto mb-4" style={{ color: item.color }} />
                    <p className="font-['Dancing_Script'] text-[1.8rem]" style={{ color: item.color }}>
                      {item.label}
                    </p>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#8B1538]/20 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A Letter From My Heart */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="font-['Playfair_Display'] text-center mb-16 text-[#D4AF37]"
              style={{ fontSize: "3.5rem" }}
            >
              A Letter From My Heart
            </h2>
          </Reveal>

          <Reveal delayMs={100}>
            <div
              className="relative bg-gradient-to-br from-[#2a1f1f] to-[#1a0f0f] text-[#FFF7ED] p-16 rounded-lg shadow-2xl border-8 border-[#D4AF37]/30"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\\"100\\" height=\\"100\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noise\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.9\\" numOctaves=\\"4\\" /%3E%3C/filter%3E%3Crect width=\\"100\\" height=\\"100\\" filter=\\"url(%23noise)\\" opacity=\\"0.05\\" /%3E%3C/svg%3E")',
              }}
            >
              <div className="absolute top-8 right-8 w-16 h-16 border-4 border-[#8B1538]/30 rounded-full" />
              <div className="absolute bottom-8 left-8 w-12 h-12 border-4 border-[#2C5F2D]/30 rounded-full" />

              <p className="font-['Crimson_Text'] italic text-[1.5rem] leading-loose mb-8">
                This Christmas, I don’t want anything fancy. I just want to think of <span className="italic">us</span>.
              </p>

              <p className="font-['Crimson_Text'] italic text-[1.5rem] leading-loose mb-8">
                I love how you’re there for me, especially when I’m sad or stressed. When my brain is loud, you make it soft again —
                the way you listen, the way you hold me, the way you remind me I’m not alone.
                I still think about you giving me a massage on the bed, and how safe it feels to fall asleep hugging you.
                Nora, you’re my comfort, my peace, my home.
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent my-8" />

              <p className="font-['Crimson_Text'] italic text-[1.5rem] leading-loose">
                And I want to protect you more, too — especially after the hard moments.
                When you were in the hospital, when your eye hurt so much, and when you were traveling back and forth to Hong Kong for interviews,
                I felt both proud of you and worried for you at the same time.
                I’m right here — always on your team, always in your corner. 我一直都在。以后也一直在。
              </p>

              <div className="mt-12 text-right">
                <p className="font-['Dancing_Script'] text-[2rem] text-[#8B1538]">Forever yours,</p>
                <p className="font-['Dancing_Script'] text-[2.2rem] text-[#8B1538]">Timothy</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Forever Starts Here */}
      <section className="relative py-40 px-6 min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1639772004902-e2237d349abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBjaHJpc3RtYXMlMjBvcm5hbWVudHN8ZW58MXx8fHwxNjY1ODM1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl">
          <Reveal>
            <div className="mb-8 animate-romantic-pulse">
              <Heart className="w-24 h-24 mx-auto text-[#8B1538] fill-[#8B1538]" />
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <h2 className="font-['Playfair_Display'] mb-8 text-[#D4AF37]" style={{ fontSize: "4rem" }}>
              Merry Christmas ❤️
            </h2>
          </Reveal>

          <Reveal delayMs={200}>
            <p className="font-['Crimson_Text'] italic text-[1.8rem] leading-relaxed mb-6 text-[#FFFDF7]">
              Thank you for being my favorite person — this season, and every one after.
            </p>
          </Reveal>

          <Reveal delayMs={280}>
            <p className="font-['Dancing_Script'] text-[2.2rem] text-[#D4AF37] mt-12">
              我们还有很多很多个圣诞节。✨
            </p>
          </Reveal>

          <Reveal delayMs={360}>
            <div className="mt-20 flex justify-center gap-4">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-[#8B1538] animate-romantic-dot"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* A tiny parallax glow at the end */}
      <ParallaxSection speed={0.25}>
        <div className="h-32 bg-gradient-to-t from-[#8B1538]/20 to-transparent" />
      </ParallaxSection>
    </div>
  );
}

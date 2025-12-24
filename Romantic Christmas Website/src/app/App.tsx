import { motion } from 'motion/react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { useState } from 'react';
import { SnowfallEffect } from './components/SnowfallEffect';
import { BokehEffect } from './components/BokehEffect';
import { InteractiveHeart } from './components/InteractiveHeart';
import { PhotoModal } from './components/PhotoModal';
import { ParallaxSection } from './components/ParallaxSection';
import noraImage1 from 'figma:asset/cefc96c1a66c9932c52c7271202aa9fd292aa282.png';
import noraImage2 from 'figma:asset/bb4c6817f368c5989f1af4c8f0d119302fe8d56f.png';
import noraImage3 from 'figma:asset/fc42f862996ec6cbc55b20cd3386dc7a86b718b7.png';
import disneyImage from 'figma:asset/c73def36804b8f63c899c5e9db7d23d35601c5ed.png';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const photos = {
    ammora: {
      src: noraImage1,
      title: 'Ammora',
      description: 'Where elegance met love — a perfect evening together'
    },
    ruxton: {
      src: noraImage2,
      title: 'The Ruxton',
      description: 'A night to remember, celebrating us'
    },
    charleston: {
      src: 'https://images.unsplash.com/photo-1734901404365-e93d979b575b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNhbmRsZXMlMjB3YXJtJTIwZ2xvd3xlbnwxfHx8fDE3NjY1ODM1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Charleston',
      description: 'Candlelit conversations and beautiful moments'
    },
    disney: {
      src: disneyImage,
      title: 'Disney ✨',
      description: 'Where magic became real because I was with you'
    },
    cancun: {
      src: noraImage3,
      title: 'Cancun 🌊 — The Beloved',
      description: 'Paradise found in your smile, memories made under the sun'
    }
  };

  return (
    <div className="min-h-screen bg-[#1a0f0f] text-[#FFFDF7] overflow-x-hidden">
      <SnowfallEffect />
      <BokehEffect />
      <InteractiveHeart />
      
      <PhotoModal
        isOpen={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        imageSrc={selectedPhoto?.src || ''}
        title={selectedPhoto?.title || ''}
        description={selectedPhoto?.description || ''}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1641543488944-4a054a532950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjB0cmVlJTIwbGlnaHRzJTIwYm9rZWh8ZW58MXx8fHwxNzY2NTY5MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
          }}
        />
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-16 h-16 mx-auto text-[#8B1538] fill-[#8B1538] opacity-80" />
          </motion.div>
          
          <h1 className="font-['Playfair_Display'] mb-8 text-[#FFFDF7]" style={{ fontSize: '4.5rem', lineHeight: '1.1' }}>
            Merry Christmas, My Love
          </h1>
          
          <motion.p 
            className="font-['Crimson_Text'] italic text-[1.8rem] text-[#D4AF37] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Nine months ago, you became my favorite part of every day.
          </motion.p>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Love Story */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="font-['Playfair_Display'] text-center mb-20 text-[#D4AF37]"
            style={{ fontSize: '3.5rem' }}
            {...fadeInUp}
          >
            Our Love Story
          </motion.h2>
          
          <div className="space-y-12">
            <motion.div 
              className="relative bg-gradient-to-br from-[#8B1538]/20 to-[#2C5F2D]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-10 shadow-2xl"
              {...fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <Heart className="absolute top-6 right-6 w-8 h-8 text-[#8B1538] opacity-50" />
              <p className="font-['Crimson_Text'] italic text-[1.5rem] text-[#FFFDF7]">
                "It's been 9 months, and somehow it still feels like the beginning."
              </p>
            </motion.div>

            <motion.div 
              className="relative bg-gradient-to-br from-[#2C5F2D]/20 to-[#8B1538]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-10 shadow-2xl"
              {...fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37] opacity-50" />
              <p className="font-['Crimson_Text'] italic text-[1.5rem] text-[#FFFDF7]">
                "I'm a senior. You're a junior."
              </p>
            </motion.div>

            <motion.div 
              className="relative bg-gradient-to-br from-[#8B1538]/20 to-[#2C5F2D]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-10 shadow-2xl"
              {...fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <Heart className="absolute top-6 right-6 w-8 h-8 text-[#8B1538] opacity-50" />
              <p className="font-['Crimson_Text'] italic text-[1.5rem] text-[#FFFDF7]">
                "Different chapters, same story — walking forward together."
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-16 flex justify-center gap-3"
            {...fadeInUp}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#8B1538]"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Moments I'll Never Forget */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="font-['Playfair_Display'] text-center mb-8 text-[#D4AF37]"
            style={{ fontSize: '3.5rem' }}
            {...fadeInUp}
          >
            Moments I'll Never Forget
          </motion.h2>
          
          <motion.p 
            className="font-['Crimson_Text'] text-center italic text-[1.3rem] mb-20 text-[#FFFDF7]/80"
            {...fadeInUp}
          >
            Memories that glow brighter than any Christmas light
          </motion.p>

          {/* Nights We Dressed Up */}
          <motion.div className="mb-24" {...fadeInUp}>
            <h3 className="font-['Dancing_Script'] text-[2.5rem] text-[#8B1538] mb-12 text-center">
              Nights We Dressed Up for Each Other
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photos.ammora)}
              >
                <motion.img 
                  src={noraImage1} 
                  alt="Ammora - elegant dinner"
                  className="w-full h-[400px] object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                  layoutId={`photo-${noraImage1}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="font-['Dancing_Script'] text-[1.8rem] text-[#D4AF37]">Ammora</p>
                  <p className="font-['Inter'] text-sm text-[#FFFDF7]/80">Where elegance met love</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click to view</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photos.ruxton)}
              >
                <motion.img 
                  src={noraImage2} 
                  alt="The Ruxton - special evening"
                  className="w-full h-[400px] object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                  layoutId={`photo-${noraImage2}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="font-['Dancing_Script'] text-[1.8rem] text-[#D4AF37]">The Ruxton</p>
                  <p className="font-['Inter'] text-sm text-[#FFFDF7]/80">A night to remember</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click to view</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photos.charleston)}
              >
                <div className="relative w-full h-[400px]">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1734901404365-e93d979b575b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNhbmRsZXMlMjB3YXJtJTIwZ2xvd3xlbnwxfHx8fDE3NjY1ODM1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Charleston - romantic atmosphere"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                    layoutId={`photo-${photos.charleston.src}`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="font-['Dancing_Script'] text-[1.8rem] text-[#D4AF37]">Charleston</p>
                  <p className="font-['Inter'] text-sm text-[#FFFDF7]/80">Candlelit conversations</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click to view</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Places That Felt Like Home */}
          <motion.div {...fadeInUp}>
            <h3 className="font-['Dancing_Script'] text-[2.5rem] text-[#2C5F2D] mb-12 text-center">
              Places That Felt Like Home Because You Were There
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photos.disney)}
              >
                <div className="relative w-full h-[450px]">
                  <motion.img 
                    src={disneyImage} 
                    alt="Disney - magical moments"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                    layoutId={`photo-${disneyImage}`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <p className="font-['Dancing_Script'] text-[2rem] text-[#D4AF37] mb-2">Disney ✨</p>
                  <p className="font-['Inter'] text-[#FFFDF7]/80">Where magic became real because I was with you</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click to view</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D4AF37]/30 cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.8)' }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photos.cancun)}
              >
                <motion.img 
                  src={noraImage3} 
                  alt="Cancun - The Beloved"
                  className="w-full h-[450px] object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                  layoutId={`photo-${noraImage3}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <p className="font-['Dancing_Script'] text-[2rem] text-[#D4AF37] mb-2">Cancun 🌊 — The Beloved</p>
                  <p className="font-['Inter'] text-[#FFFDF7]/80">Paradise found in your smile</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-['Inter'] text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click to view</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* You & Your Dreams */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent to-[#2C5F2D]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="font-['Playfair_Display'] mb-12 text-[#D4AF37]"
            style={{ fontSize: '3.5rem' }}
            {...fadeInUp}
          >
            I Believe in You — Always
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-br from-[#8B1538]/20 to-[#2C5F2D]/20 backdrop-blur-sm border border-[#D4AF37]/40 rounded-2xl p-12 shadow-2xl mb-16"
            {...fadeInUp}
          >
            <p className="font-['Crimson_Text'] text-[1.4rem] leading-relaxed mb-6 text-[#FFFDF7]">
              I know you're in the middle of your job search right now.
            </p>
            <p className="font-['Crimson_Text'] text-[1.4rem] leading-relaxed mb-6 text-[#FFFDF7]">
              I see how hard you try, how much heart you put into everything.
            </p>
            <p className="font-['Crimson_Text'] text-[1.4rem] leading-relaxed text-[#D4AF37] italic">
              I hope you never forget how capable, brilliant, and strong you are — 
              even on the days that feel heavy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Future', icon: Sparkles, color: '#D4AF37' },
              { label: 'Dreams', icon: Heart, color: '#8B1538' },
              { label: 'Next Chapter', icon: Gift, color: '#2C5F2D' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="relative group"
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-[#1a0f0f] to-[#2a1f1f] border-4 border-[#D4AF37]/40 rounded-2xl p-8 shadow-2xl"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    borderColor: item.color,
                    boxShadow: `0 0 50px ${item.color}40`
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4" style={{ color: item.color }} />
                  <p className="font-['Dancing_Script'] text-[1.8rem]" style={{ color: item.color }}>
                    {item.label}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#8B1538]/20 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Letter From My Heart */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="font-['Playfair_Display'] text-center mb-16 text-[#D4AF37]"
            style={{ fontSize: '3.5rem' }}
            {...fadeInUp}
          >
            A Letter From My Heart
          </motion.h2>
          
          <motion.div 
            className="relative bg-gradient-to-br from-[#FFFDF7] to-[#F5E6D3] text-[#1a0f0f] p-16 rounded-lg shadow-2xl border-8 border-[#D4AF37]/30"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.05" /%3E%3C/svg%3E")',
            }}
            {...fadeInUp}
          >
            <div className="absolute top-8 right-8 w-16 h-16 border-4 border-[#8B1538]/30 rounded-full" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-4 border-[#2C5F2D]/30 rounded-full" />
            
            <p className="font-['Crimson_Text'] italic text-[1.5rem] leading-loose mb-8">
              This Christmas, I don't wish for anything more than more mornings with you, 
              more dinners, more trips, and more moments where I get to call you mine.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent my-8" />
            
            <p className="font-['Crimson_Text'] italic text-[1.5rem] leading-loose">
              No matter where life takes us next, I want you to know — 
              you are never walking alone.
            </p>
            
            <motion.div 
              className="mt-12 text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-['Dancing_Script'] text-[2rem] text-[#8B1538]">
                Forever yours ❤️
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Forever Starts Here */}
      <section className="relative py-40 px-6 min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639772004902-e2237d349abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBjaHJpc3RtYXMlMjBvcm5hbWVudHN8ZW58MXx8fHwxNjY1ODM1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
          }}
        />
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 mx-auto text-[#8B1538] fill-[#8B1538]" />
          </motion.div>
          
          <h2 className="font-['Playfair_Display'] mb-8 text-[#D4AF37]" style={{ fontSize: '4rem' }}>
            Merry Christmas, Nora ❤️
          </h2>
          
          <p className="font-['Crimson_Text'] italic text-[1.8rem] leading-relaxed mb-6 text-[#FFFDF7]">
            Thank you for being my favorite person, 
            this season and every one after.
          </p>
          
          <motion.p 
            className="font-['Dancing_Script'] text-[2.2rem] text-[#D4AF37] mt-12"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Excited for all the Christmases still to come ✨
          </motion.p>

          <motion.div
            className="mt-20 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full bg-[#8B1538]"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer glow */}
      <div className="h-32 bg-gradient-to-t from-[#8B1538]/20 to-transparent" />
    </div>
  );
}

export default App;
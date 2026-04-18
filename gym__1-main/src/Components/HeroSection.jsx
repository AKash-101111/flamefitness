import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
  '/images/hero/hero-5.jpg',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    // 3 seconds interval as requested
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen hero-fullscreen mb-6 overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src={heroImages[currentIndex]}
            alt="Flame Fitness Studio"
            className="w-full h-full object-cover ken-burns"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay - Optimized for premium look */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Subtle vignette glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center stagger-in">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white league-spartan font-extrabold tracking-tighter uppercase leading-tight">
            Unleash Your<br />
            <span className="gradient-text text-6xl md:text-9xl lg:text-[10rem]">Beast!</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="poiret text-lg md:text-2xl text-white/80 mt-4 md:mt-2 max-w-2xl leading-relaxed"
        >
          Train Elite. Become Unstoppable.
          <br />
          <span className="text-[#FFD700]/80 league-spartan font-bold">FLAME</span> empowers every step of your fitness journey.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const el = document.getElementById('programs-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-10 px-12 py-5 bg-[#FFD700] text-[#050505] font-black text-xl league-spartan uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.3)]"
        >
          Start Your Journey
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 flex gap-3 z-30">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentIndex
                  ? 'bg-[#FFD700] w-12 shadow-[0_0_15px_rgba(255,215,0,0.8)]'
                  : 'bg-white/20 w-3 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 scroll-bounce opacity-60"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
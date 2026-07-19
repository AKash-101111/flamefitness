import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen hero-fullscreen mb-6 overflow-hidden">
      {/* Background Video - Scaled to crop bottom-right watermark */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ transform: 'scale(1.08)', transformOrigin: 'top left' }}
      >
        <source src="/videos/client-gym-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay - Optimized for premium look */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Subtle vignette glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-full py-12 px-4 sm:px-6 text-center stagger-in">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full flex justify-center"
        >
          <h1 className="hero-title text-white uppercase text-center">
            <span className="inline-block whitespace-nowrap">Unleash Your</span>
            <br />
            <span className="gradient-text">Beast!</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="poiret text-base sm:text-xl md:text-2xl text-white/80 mt-4 md:mt-6 max-w-2xl leading-relaxed px-4"
        >
          Train Elite. Become Unstoppable.
          <br />
          <span className="text-[var(--primary)]/80 league-spartan font-bold">FLAME</span> empowers every step of your fitness journey.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const el = document.getElementById('membership-plans');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-8 sm:mt-10 px-8 sm:px-12 py-4 sm:py-5 bg-[var(--primary)] text-[#050505] font-black text-lg sm:text-xl league-spartan uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,0,0,0.3)]"
        >
          Start Your Journey
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 scroll-bounce opacity-60"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
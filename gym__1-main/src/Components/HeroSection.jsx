import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full hero-fullscreen mb-6 overflow-hidden flex items-center justify-center">
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

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full py-6 sm:py-10 px-4 sm:px-6 text-center stagger-in gap-3 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
        {/* 1. Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <h1 className="hero-title text-white uppercase text-center">
            <span className="inline-block whitespace-nowrap">Unleash Your</span>
            <br />
            <span className="gradient-text">Beast!</span>
          </h1>
        </motion.div>

        {/* 2 & 3. Subtitle & Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="poiret text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed px-4 m-0"
        >
          Train Elite. Become Unstoppable.
          <br />
          <span className="text-[var(--primary)]/80 league-spartan font-bold">FLAME</span> empowers every step of your fitness journey.
        </motion.p>

        {/* 4. CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const el = document.getElementById('membership-plans');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 sm:px-12 py-3.5 sm:py-4.5 bg-[var(--primary)] text-[#050505] font-black text-base sm:text-lg md:text-xl league-spartan uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,0,0,0.3)] m-0 w-[min(90%,280px)] sm:w-auto"
        >
          Start Your Journey
        </motion.button>

        {/* 5. Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => {
            const el = document.getElementById('membership-plans');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="scroll-bounce opacity-60 hover:opacity-100 cursor-pointer mt-1 sm:mt-2 transition-opacity pointer-events-auto"
          aria-label="Scroll to membership plans"
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
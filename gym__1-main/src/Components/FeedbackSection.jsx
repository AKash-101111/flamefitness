import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaExternalLinkAlt, FaHeart, FaDumbbell, FaMedal } from 'react-icons/fa';

// Read Google review link from single environment variable with fallback
const GOOGLE_REVIEW_URL = 
    import.meta.env.VITE_GOOGLE_REVIEW || 
    "https://search.google.com/local/writereview?placeid=ChIJf-flame-fitness-studio";

const FeedbackSection = () => {
    const handleReviewClick = () => {
        window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="w-full py-16 md:py-28 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[var(--primary)]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold league-spartan text-white tracking-tighter uppercase mb-4">
                            We Value Your <span className="gradient-text">Feedback</span>
                        </h2>
                        <p className="poiret text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Your experience fuels our passion. Share your journey with the Flame Fitness community on Google.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-card p-8 sm:p-12 md:p-16 primary-border shadow-[0_0_60px_rgba(255,0,0,0.08)] rounded-3xl text-center relative overflow-hidden"
                >
                    {/* Subtle ambient light inside card */}
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[var(--primary)]/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Star Rating Display */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <motion.div
                                key={star}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 + star * 0.08 }}
                            >
                                <FaStar className="w-8 h-8 md:w-10 md:h-10 text-[var(--primary)] drop-shadow-[0_0_15px_rgba(255,0,0,0.7)] fill-current" />
                            </motion.div>
                        ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black league-spartan text-white uppercase tracking-wider mb-3">
                        Loved Training With Us?
                    </h3>

                    <p className="poiret text-white/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                        Take a quick moment to leave us a review on Google. It helps more athletes find their ultimate fitness home!
                    </p>

                    {/* Review Us CTA Button */}
                    <div className="flex justify-center items-center">
                        <motion.a
                            href={GOOGLE_REVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleReviewClick}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 50px rgba(255, 0, 0, 0.6)"
                            }}
                            whileTap={{ scale: 0.96 }}
                            className="group relative inline-flex items-center justify-center gap-4 px-8 sm:px-12 py-5 bg-[var(--primary)] text-[#050505] font-black rounded-2xl league-spartan text-xl sm:text-2xl uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.35)] cursor-pointer"
                        >
                            <FaGoogle className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                            <span>Review Us</span>
                            <FaExternalLinkAlt className="text-lg opacity-80 group-hover:translate-x-1 -translate-y-0.5 transition-transform duration-300" />
                        </motion.a>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
                        <div className="flex items-center justify-center gap-2 text-white/70">
                            <FaHeart className="text-[var(--primary)] text-sm" />
                            <span className="poiret text-sm md:text-base">100% Athlete Focused</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white/70">
                            <FaMedal className="text-[var(--primary)] text-sm" />
                            <span className="poiret text-sm md:text-base">Verified Google Reviews</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-white/70">
                            <FaDumbbell className="text-[var(--primary)] text-sm" />
                            <span className="poiret text-sm md:text-base">Elite Fitness Community</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeedbackSection;

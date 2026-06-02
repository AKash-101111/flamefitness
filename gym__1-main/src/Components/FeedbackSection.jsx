import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackSection = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [formData, setFormData] = useState({ name: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section className="w-full py-24 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold league-spartan text-white tracking-tighter uppercase mb-4">
                        We Value Your <span className="gradient-text">Feedback</span>
                    </h2>
                    <p className="poiret text-xl text-white/50">Help us maintain the elite standard of fitness.</p>
                </div>

                <div className="glass-card p-10 primary-border shadow-[0_0_50px_rgba(255,0,0,0.05)]">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center py-12 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6 primary-pulse">
                                    <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold league-spartan text-[var(--primary)] mb-2 uppercase">Thank You!</h3>
                                <p className="poiret text-white/70 text-lg">Your feedback helps us grow stronger. We appreciate your input.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="block poiret text-white/70 text-lg ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Enter your name"
                                        className="w-full p-4 rounded-xl input-primary montserrat"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block poiret text-white/70 text-lg ml-1">Your Message</label>
                                    <textarea 
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Tell us what you think..."
                                        className="w-full p-4 rounded-xl input-primary montserrat resize-none"
                                    />
                                </div>
                                <button 
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-[var(--primary)] text-[#050505] font-bold rounded-xl league-spartan text-xl uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    {status === 'sending' ? (
                                        <span className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Submit Feedback
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;

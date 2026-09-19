import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const JoinForm = ({ isOpen, onClose, defaultPlan }) => {
    const [submitted, setSubmitted] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(defaultPlan || "Monthly Package");

    React.useEffect(() => {
        if (defaultPlan) {
            setSelectedPlan(defaultPlan);
        }
    }, [defaultPlan]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 3000);
    };

    const handleClose = () => {
        setSubmitted(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center"
            >
                {/* Blurred background overlay */}
                <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-xl"
                    onClick={handleClose}
                />

                {/* Form card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-[90%] max-w-lg glass-card p-6 sm:p-10 shadow-[0_0_80px_rgba(255,0,0,0.15)] text-white overflow-hidden"
                >
                    {/* Primary top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-t-3xl" />

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center py-12"
                        >
                            <div className="w-24 h-24 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-8 primary-pulse">
                                <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-black league-spartan text-[var(--primary)] mb-4 uppercase tracking-wider">Welcome To The Elite</h3>
                            <p className="poiret text-white/70 text-center text-lg">Your journey to greatness begins now. Our team will contact you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <>
                            <motion.h2 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl font-black text-white league-spartan mb-8 text-center uppercase tracking-widest"
                            >
                                Start Your <span className="text-[var(--primary)]">Legacy</span>
                            </motion.h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Full Name</label>
                                    <input type="text" required className="w-full p-4 rounded-2xl input-primary montserrat" placeholder="Enter your name" />
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Email Address</label>
                                    <input type="email" required className="w-full p-4 rounded-2xl input-primary montserrat" placeholder="your@email.com" />
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Phone Number</label>
                                    <input type="tel" required className="w-full p-4 rounded-2xl input-primary montserrat" placeholder="+91 98765 43210" />
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Select Plan</label>
                                    <select 
                                        required 
                                        value={selectedPlan}
                                        onChange={(e) => setSelectedPlan(e.target.value)}
                                        className="w-full p-4 rounded-2xl input-primary montserrat appearance-none cursor-pointer"
                                    >
                                        <option value="Monthly Package" className="bg-[#0B0B0B]">Monthly Package - RS. 6,000/-</option>
                                        <option value="Quarterly Package" className="bg-[#0B0B0B]">Quarterly Package - RS. 12,000/-</option>
                                        <option value="Half Yearly Package" className="bg-[#0B0B0B]">Half Yearly Package - RS. 18,000/-</option>
                                        <option value="Annual Package" className="bg-[#0B0B0B]">Annual Package - RS. 25,000/-</option>
                                        <option value="Body Transformation" className="bg-[#0B0B0B]">Body Transformation - RS. 50,000/-</option>
                                        <option value="Dance Fitness" className="bg-[#0B0B0B]">Dance Fitness (12 Sessions) - RS. 3,000/-</option>
                                    </select>
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full p-5 bg-[var(--primary)] text-[#050505] font-black league-spartan uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] cursor-pointer mt-4"
                                >
                                    Join The Tribe
                                </motion.button>
                            </form>
                        </>
                    )}

                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[var(--primary)] hover:bg-white/10 transition-all cursor-pointer"
                    >
                        ✕
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default JoinForm;

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const JoinForm = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

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
                    className="relative z-10 w-[90%] max-w-lg glass-card p-10 shadow-[0_0_80px_rgba(255,215,0,0.15)] text-white overflow-hidden"
                >
                    {/* Gold top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-t-3xl" />

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center py-12"
                        >
                            <div className="w-24 h-24 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-8 gold-pulse">
                                <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-black league-spartan text-[#FFD700] mb-4 uppercase tracking-wider">Welcome To The Elite</h3>
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
                                Start Your <span className="text-[#FFD700]">Legacy</span>
                            </motion.h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Full Name</label>
                                    <input type="text" required className="w-full p-4 rounded-2xl input-gold montserrat" placeholder="Enter your name" />
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Email Address</label>
                                    <input type="email" required className="w-full p-4 rounded-2xl input-gold montserrat" placeholder="your@email.com" />
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Phone Number</label>
                                    <input type="tel" required className="w-full p-4 rounded-2xl input-gold montserrat" placeholder="+91 98765 43210" />
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                                    <label className="block mb-2 poiret text-white/50 text-sm tracking-widest uppercase">Select Plan</label>
                                    <select required className="w-full p-4 rounded-2xl input-gold montserrat appearance-none cursor-pointer">
                                        <option value="Basic" className="bg-[#0B0B0B]">Basic Membership</option>
                                        <option value="Standard" className="bg-[#0B0B0B]">Standard Membership</option>
                                        <option value="Premium" className="bg-[#0B0B0B]">Premium Membership</option>
                                    </select>
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    type="submit"
                                    className="w-full bg-[#FFD700] text-[#050505] font-black py-5 rounded-2xl mt-4 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300 league-spartan text-xl uppercase tracking-[0.2em] cursor-pointer"
                                >
                                    Confirm Enrollment
                                </motion.button>
                            </form>
                        </>
                    )}

                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#FFD700] hover:bg-white/10 transition-all cursor-pointer"
                    >
                        ✕
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default JoinForm;

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaUserTie } from 'react-icons/fa';
import { GiBoxingGlove, GiMeditation, GiMuscleFat } from 'react-icons/gi';
import { MdSportsGymnastics } from 'react-icons/md';
import JoinForm from '../Components/JoinForm';

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const personalTraining = {
        title: 'Personal Training',
        description: 'One-on-one sessions tailored entirely around you — your goals, your pace, your body. Our certified head coach designs a bespoke program covering strength, conditioning, nutrition guidance, and recovery, so every rep you do has a purpose.',
        icon: <FaUserTie />,
        tag: 'FEATURED',
        highlights: [
            { label: 'Customised Program', detail: 'Built around your unique goals and body type' },
            { label: '1-on-1 Coaching', detail: 'Dedicated undivided attention every session' },
            { label: 'Nutrition Guidance', detail: 'Diet plans aligned with your training' },
            { label: 'Progress Tracking', detail: 'Regular assessments and plan adjustments' },
            { label: 'Injury Prevention', detail: 'Corrective techniques and safe progressions' },
            { label: 'Flexible Scheduling', detail: 'Sessions at timings that work for you' },
        ],
    };

    const programsList = [
        {
            title: "Gymnasium",
            description: "3000 sq ft of gymnasium housing world-class equipment ranging from cardio to strength training machines.",
            icon: <FaDumbbell />,
            benefits: [
                "Access to 50+ premium machines",
                "Guided warm-up and cool-down zones",
                "Personal trainer assistance",
                "Progress tracking support"
            ]
        },
        {
            title: "Aerobics & Dance",
            description: "Dedicated 1500 sq ft section for high-energy aerobics and dance classes.",
            icon: <MdSportsGymnastics />,
            benefits: [
                "High-energy group sessions",
                "Cardio endurance building",
                "Stress relief through movement",
                "Expert choreographers"
            ]
        },
        {
            title: "Zumba",
            description: "Rocking environment to sweat out your stress with fun and effective Zumba routines.",
            icon: <FaRunning />,
            benefits: [
                "Fun dance-fitness fusion",
                "Burn 500-800 calories per session",
                "All fitness levels welcome",
                "Licensed Zumba instructors"
            ]
        },
        {
            title: "Boxing",
            description: "Customized training sessions including specialized boxing classes for all skill levels.",
            icon: <GiBoxingGlove />,
            benefits: [
                "Full-body workout",
                "Self-defense techniques",
                "Speed & agility training",
                "Endurance and power building"
            ]
        },
        {
            title: "Yoga",
            description: "Mind-body wellness classes to improve flexibility and reduce stress.",
            icon: <GiMeditation />,
            benefits: [
                "Flexibility improvement",
                "Mental clarity and focus",
                "Breath control techniques",
                "Injury prevention"
            ]
        },
        {
            title: "Sports Conditioning",
            description: "Specialized training for athletes and sports professionals.",
            icon: <GiMuscleFat />,
            benefits: [
                "Sport-specific training plans",
                "Performance optimization",
                "Injury rehabilitation support",
                "Competitive edge building"
            ]
        }
    ];

    return (
        <div id="programs-section" className="w-full min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-6 tracking-tighter text-center uppercase">
                Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 poiret mb-16 text-center max-w-2xl mx-auto italic">
                Customizing workouts as per the needs of our clients.
            </p>

            {/* ── Personal Training — Full-Width Hero Card ─────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedProgram(personalTraining)}
                className="group w-full mb-10 cursor-pointer relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-amber-500/30 hover:border-amber-400/70 transition-all duration-500 shadow-[0_0_60px_rgba(245,158,11,0.08)] hover:shadow-[0_0_80px_rgba(245,158,11,0.22)] bg-[#0a0800]"
                style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
            >
                {/* Animated top accent */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                {/* Subtle radial glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(245,158,11,0.07)_0%,transparent_65%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(245,158,11,0.04)_0%,transparent_60%)] pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-0">

                    {/* Left — Icon + Badge */}
                    <div className="lg:w-[28%] flex flex-col items-center justify-center py-10 px-8 border-b lg:border-b-0 lg:border-r border-amber-500/15">
                        {/* Pulsing ring */}
                        <div className="relative flex items-center justify-center mb-6">
                            <span className="absolute w-28 h-28 rounded-full bg-amber-400/10 animate-ping" style={{ animationDuration: '2.4s' }} />
                            <span className="absolute w-24 h-24 rounded-full bg-amber-400/15 animate-ping" style={{ animationDuration: '2.0s', animationDelay: '0.4s' }} />
                            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-900/20 border border-amber-400/40 flex items-center justify-center text-5xl text-amber-400 group-hover:text-amber-300 group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                                <FaUserTie />
                            </div>
                        </div>

                        {/* FEATURED badge */}
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-black league-spartan uppercase tracking-[0.2em] mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Featured
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-black text-white league-spartan uppercase tracking-tight text-center leading-tight">
                            Personal<br />Training
                        </h3>
                    </div>

                    {/* Right — Description + Highlights grid */}
                    <div className="lg:w-[72%] p-7 sm:p-10 flex flex-col justify-center">
                        <p className="poiret text-white/60 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
                            {personalTraining.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                            {personalTraining.highlights.map((h, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-400/[0.04] border border-amber-400/10 group-hover:border-amber-400/20 transition-colors"
                                >
                                    <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="text-white/90 text-xs sm:text-sm font-bold league-spartan uppercase tracking-wide leading-tight">{h.label}</p>
                                        <p className="text-white/40 text-[10px] sm:text-xs montserrat mt-0.5 leading-snug">{h.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 flex items-center gap-2 text-amber-400 text-sm font-black league-spartan uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-500 translate-x-[-6px] group-hover:translate-x-0">
                            <span>Learn More</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ── Regular Programs Grid ─────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {programsList.map((prog, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedProgram(prog)}
                        className="group p-10 glass-card cursor-pointer hover:border-[var(--primary)]/60 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)] transition-all duration-500 primary-shimmer-border"
                        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                    >
                        <div className="text-5xl mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform duration-500 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            {prog.icon}
                        </div>
                        <h3 className="text-2xl font-black text-white league-spartan mb-4 uppercase tracking-tighter">{prog.title}</h3>
                        <p className="poiret text-white/50 text-lg leading-relaxed">{prog.description}</p>
                        
                        <div className="mt-8 flex items-center gap-2 text-[var(--primary)] text-sm font-bold league-spartan uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                            <span>Explore Program</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Program Detail Modal */}
            <AnimatePresence>
                {selectedProgram && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setSelectedProgram(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 40 }}
                            transition={{ duration: 0.35 }}
                            className="glass-card p-6 md:p-12 max-w-lg w-[90%] relative shadow-[0_0_80px_rgba(255,0,0,0.1)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-transparent ${selectedProgram.tag ? 'via-amber-400' : 'via-[var(--primary)]'} to-transparent`} />
                            {selectedProgram.tag && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[10px] font-black league-spartan uppercase tracking-[0.2em] mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                    {selectedProgram.tag}
                                </span>
                            )}
                            <div className={`text-5xl mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] ${selectedProgram.tag ? 'text-amber-400' : 'text-[var(--primary)]'}`}>
                                {selectedProgram.icon}
                            </div>
                            <h2 className={`text-3xl md:text-4xl font-bold league-spartan mb-4 uppercase tracking-tight ${selectedProgram.tag ? 'text-amber-400' : 'text-[var(--primary)]'}`}>
                                {selectedProgram.title}
                            </h2>
                            <p className="text-white/70 montserrat mb-6 leading-relaxed">
                                {selectedProgram.description}
                            </p>
                            <h4 className={`text-sm font-bold uppercase tracking-widest league-spartan mb-3 ${selectedProgram.tag ? 'text-amber-400/80' : 'text-[var(--primary)]/80'}`}>
                                {selectedProgram.tag ? 'What You Get' : 'Benefits'}
                            </h4>
                            <ul className="space-y-3 mb-6">
                                {(selectedProgram.highlights || selectedProgram.benefits || []).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className={`w-5 h-5 flex-shrink-0 ${selectedProgram.tag ? 'text-amber-400' : 'text-[var(--primary)]'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-white/70 montserrat">
                                            {typeof item === 'string' ? item : <><strong className="text-white/90">{item.label}</strong> — {item.detail}</>}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setSelectedProgram(null)}
                                className={
                                    selectedProgram.tag
                                        ? 'w-full py-3 bg-amber-400 text-black font-bold rounded-xl transition-all league-spartan uppercase tracking-wider cursor-pointer hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]'
                                        : 'w-full py-3 bg-[var(--primary)] text-black font-bold rounded-xl transition-all league-spartan uppercase tracking-wider cursor-pointer hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]'
                                }
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setSelectedProgram(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:bg-white/20 transition-all cursor-pointer"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <div className="mt-24 p-6 sm:p-12 bg-gradient-to-br from-[#1a0000] to-[#0B0B0B] border border-[var(--primary)]/20 rounded-[50px] w-full text-center shadow-[0_0_60px_rgba(255,0,0,0.05)] overflow-hidden relative group">
                <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-4xl md:text-6xl font-bold text-white league-spartan mb-8 tracking-tighter relative z-10">
                    Ready to <span className="text-[var(--primary)]">Transform?</span>
                </h2>
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="px-12 py-5 bg-[var(--primary)] text-[#050505] font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(255,0,0,0.3)] relative z-10 league-spartan uppercase tracking-wider cursor-pointer font-black"
                >
                    Join A Program
                </button>
            </div>

            <JoinForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
    );
};

export default Programs;

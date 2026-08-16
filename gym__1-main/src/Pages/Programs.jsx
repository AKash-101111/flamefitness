import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaDumbbell } from 'react-icons/fa';
import { FaChildReaching, FaPersonRunning } from 'react-icons/fa6';
import { MdSportsGymnastics, MdSelfImprovement } from 'react-icons/md';
import { GiBoxingGlove } from 'react-icons/gi';
import JoinForm from '../Components/JoinForm';

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

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
            icon: <FaChildReaching />,
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
            icon: <MdSelfImprovement />,
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
            icon: <FaPersonRunning />,
            benefits: [
                "Sport-specific training plans",
                "Performance optimization",
                "Injury rehabilitation support",
                "Competitive edge building"
            ]
        }
    ];

        const personalTrainingProg = {
            title: "Personal Training",
            description: "Elite one-to-one fitness coaching for strength, athletic performance, and transformational results.",
            icon: <FaDumbbell />,
            benefits: [
                "Elite personal coaching",
                "Customized strength & athletic training",
                "One-to-one fitness monitoring",
                "Premium gym environment"
            ]
        };

    return (
        <div id="programs-section" className="w-full min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-6 tracking-tighter text-center uppercase">
                Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 poiret mb-16 text-center max-w-2xl mx-auto italic">
                Customizing workouts as per the needs of our clients.
            </p>

            {/* Featured Personal Training Card */}
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProgram(personalTrainingProg)}
                className="w-full max-w-5xl mx-auto mb-16 cursor-pointer group relative rounded-[32px] overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.15)] hover:shadow-[0_0_60px_rgba(255,0,0,0.4)] transition-all duration-700"
                style={{
                    background: 'linear-gradient(145deg, rgba(20,0,0,0.9) 0%, rgba(5,5,5,1) 100%)',
                    border: '1px solid rgba(255, 0, 0, 0.4)',
                }}
            >
                {/* Subtle animated red aura */}
                <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row-reverse w-full relative z-10">
                    {/* ATHLETE VISUAL */}
                    <div className="w-full md:w-[55%] h-[300px] md:h-[450px] relative overflow-hidden shrink-0">
                        <img 
                            src="/images/programs/personal_training.jpg" 
                            alt="Premium Personal Training"
                            className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#050505] via-[#050505]/40 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center relative bg-[#050505]/80 backdrop-blur-sm md:bg-transparent">
                        <div className="text-5xl mb-6 text-[var(--primary)] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                            <FaDumbbell />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white league-spartan mb-4 uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
                            Personal Training
                        </h3>
                        <p className="poiret text-white/70 text-lg leading-relaxed mb-8">
                            Elite one-to-one fitness coaching for strength, athletic performance, and transformational results in a premium environment.
                        </p>
                        
                        <div className="mt-auto flex items-center gap-2 text-[var(--primary)] text-sm font-bold league-spartan uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500">
                            <span>Explore Program</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
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
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-t-3xl" />
                            <div className="text-5xl text-[var(--primary)] mb-4 drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                                {selectedProgram.icon}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] league-spartan mb-4 uppercase tracking-tight">
                                {selectedProgram.title}
                            </h2>
                            <p className="text-white/70 montserrat mb-6 leading-relaxed">
                                {selectedProgram.description}
                            </p>
                            <h4 className="text-sm font-bold text-[var(--primary)]/80 uppercase tracking-widest league-spartan mb-3">Benefits</h4>
                            <ul className="space-y-3 mb-6">
                                {selectedProgram.benefits.map((b, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-white/70 montserrat">{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setSelectedProgram(null)}
                                className="w-full py-3 bg-[var(--primary)] text-[#050505] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all league-spartan uppercase tracking-wider cursor-pointer"
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

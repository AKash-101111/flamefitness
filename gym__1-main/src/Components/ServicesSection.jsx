import React, { useState, Suspense, lazy } from 'react';
import { MorphingText } from './MorphingText';
import ChromaGrid from './ChromaGrid';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy load the heavy 3D gallery
const CircularGallery = lazy(() => import('./CircularGallery'));

const ServicesSection = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [showGallery, setShowGallery] = useState(false); // Only load on demand

    const texts = [
        "Air Conditioning",
        "Changing Room",
        "Bathing Area",
        "Parking Area",
        "Personal Racks",
        "Drinks & Snacks",
    ];

    const team = [
        {
            image: "https://i.pravatar.cc/300?img=5",
            title: "John Carter",
            subtitle: "Trainer",
            handle: "@johncarter",
            borderColor: "#FFD700",
            gradient: "linear-gradient(145deg, #FFD700, #1a1500)",
            url: "#",
            experience: "8+ years",
            description: "Specializes in strength training and bodybuilding. Has trained over 200+ clients to achieve their dream physique."
        },
        {
            image: "https://i.pravatar.cc/300?img=6",
            title: "Emma Watson",
            subtitle: "Trainer",
            handle: "@emmawatson",
            borderColor: "#FFD700",
            gradient: "linear-gradient(180deg, #FFD700, #1a1500)",
            url: "#",
            experience: "6+ years",
            description: "Expert in functional training and HIIT workouts. Passionate about helping clients improve their overall fitness."
        },
        {
            image: "https://i.pravatar.cc/300?img=7",
            title: "Liam Smith",
            subtitle: "Trainer",
            handle: "@liamsmith",
            borderColor: "#FFD700",
            gradient: "linear-gradient(165deg, #FFD700, #1a1500)",
            url: "#",
            experience: "10+ years",
            description: "CrossFit certified trainer with expertise in athletic performance and competition preparation."
        },
        {
            image: "https://i.pravatar.cc/300?img=8",
            title: "Sophia Lee",
            subtitle: "Physiotherapist",
            handle: "@sophialee",
            borderColor: "#FFD700",
            gradient: "linear-gradient(135deg, #FFD700, #1a1500)",
            url: "#",
            experience: "7+ years",
            description: "Certified sports physiotherapist specializing in injury rehabilitation and prevention for athletes."
        },
        {
            image: "https://i.pravatar.cc/300?img=9",
            title: "James Wilson",
            subtitle: "Physiotherapist",
            handle: "@jameswilson",
            borderColor: "#FFD700",
            gradient: "linear-gradient(195deg, #FFD700, #1a1500)",
            url: "#",
            experience: "5+ years",
            description: "Focuses on mobility training and post-workout recovery techniques for optimal performance."
        },
        {
            image: "https://i.pravatar.cc/300?img=10",
            title: "Olivia Brown",
            subtitle: "Cardio Trainer",
            handle: "@oliviabrown",
            borderColor: "#FFD700",
            gradient: "linear-gradient(225deg, #FFD700, #1a1500)",
            url: "#",
            experience: "4+ years",
            description: "Cardio and endurance specialist. Expert in treadmill training, cycling, and stamina building programs."
        },
        {
            image: "https://i.pravatar.cc/300?img=12",
            title: "Mia Thompson",
            subtitle: "Nutritionist",
            handle: "@miathompson",
            borderColor: "#FFD700",
            gradient: "linear-gradient(145deg, #FFD700, #1a1500)",
            url: "#",
            experience: "6+ years",
            description: "Certified nutritionist who creates personalized meal plans to complement your workout routine."
        },
        {
            image: "https://i.pravatar.cc/300?img=13",
            title: "Max Johnson",
            subtitle: "Heavy Weight Trainer",
            handle: "@maxjohnson",
            borderColor: "#FFD700",
            gradient: "linear-gradient(180deg, #FFD700, #1a1500)",
            url: "#",
            experience: "9+ years",
            description: "Powerlifting champion and strength coach. Specializes in deadlifts, squats, and bench press form."
        }
    ];

    const handleTrainerClick = (trainer) => {
        setSelectedTrainer(trainer);
    };

    return (
        <div className='w-full flex flex-col items-center py-8 my-10 overflow-hidden'>
            <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter mb-8 md:mb-0'>
                Equipment
            </h1>
            <div className='w-full h-[50vh] md:h-[65vh] relative'>
                {!showGallery ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 rounded-[40px] md:rounded-[80px] border border-white/5 backdrop-blur-sm group">
                        <p className="text-white/60 poiret text-xl mb-6">Interactive 3D Equipment Gallery</p>
                        <button 
                            onClick={() => setShowGallery(true)}
                            className="px-10 py-4 bg-[#FFD700] text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,215,0,0.3)] league-spartan uppercase tracking-wider"
                        >
                            Explore Gear
                        </button>
                    </div>
                ) : (
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/40 poiret">Loading 3D Scene...</div>}>
                        <CircularGallery />
                    </Suspense>
                )}
            </div>
            <div className='w-full min-h-[50vh] md:h-[65vh] flex flex-col gap-8 items-center mt-20 mb-10'>
                <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter'>
                    Facilities
                </h1>
                <div className="w-[90%] md:w-[32vw] h-[35vh] py-6 flex flex-col items-center justify-center md:block border-[#FFD700]/30 border-t-2 border-b-2">
                    <MorphingText texts={texts} />
                </div>
            </div>

            {/* Trainers Section */}
            <div className='w-full flex flex-col items-center mt-10'>
                <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter mb-8'>
                    Our <span className="gradient-text">Trainers</span>
                </h1>
                <p className="text-white/50 poiret text-lg mb-12 text-center max-w-xl italic">
                    Click on a trainer to learn more about their expertise
                </p>

                {/* Trainer Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8 w-full max-w-6xl mb-12">
                    {team.map((trainer, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleTrainerClick(trainer)}
                            className="group relative rounded-[24px] md:rounded-[40px] overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-[#FFD700]/50 transition-all duration-700 shadow-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.25)]"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                            
                            {/* Shimmer effect overlay */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent skew-y-[-10deg] translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                <h3 className="text-xl md:text-2xl font-black text-white league-spartan uppercase tracking-tighter mb-1">{trainer.title}</h3>
                                <p className="text-[#FFD700] text-sm md:text-base poiret font-bold tracking-widest uppercase">{trainer.subtitle}</p>
                                <div className="w-0 group-hover:w-full h-0.5 bg-[#FFD700] mt-3 transition-all duration-500 shadow-[0_0_10px_#FFD700]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Also keep the ChromaGrid for desktop experience */}
                <div className='w-[95%] md:w-[85vw] rounded-4xl hidden md:block'>
                    <ChromaGrid
                        items={team.map(t => ({ ...t, url: '#' }))}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>

            {/* Trainer Detail Modal */}
            <AnimatePresence>
                {selectedTrainer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setSelectedTrainer(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 40 }}
                            transition={{ duration: 0.35 }}
                            className="glass-card p-8 md:p-10 max-w-md w-[90%] relative shadow-[0_0_80px_rgba(255,215,0,0.1)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-t-3xl" />
                            
                            <div className="flex items-center gap-5 mb-6">
                                <img
                                    src={selectedTrainer.image}
                                    alt={selectedTrainer.title}
                                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FFD700]/50"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-[#FFD700] league-spartan">{selectedTrainer.title}</h2>
                                    <p className="text-white/60 poiret">{selectedTrainer.subtitle}</p>
                                    <p className="text-white/40 text-sm montserrat mt-1">{selectedTrainer.experience} experience</p>
                                </div>
                            </div>
                            
                            <p className="text-white/70 montserrat leading-relaxed mb-6">
                                {selectedTrainer.description}
                            </p>
                            
                            <button
                                onClick={() => setSelectedTrainer(null)}
                                className="w-full py-3 bg-[#FFD700] text-[#050505] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all league-spartan uppercase tracking-wider cursor-pointer"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setSelectedTrainer(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#FFD700] hover:bg-white/20 transition-all cursor-pointer"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicesSection;
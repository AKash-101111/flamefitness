import React, { useState, Suspense, lazy } from 'react';
import { MorphingText } from './MorphingText';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy load the heavy 3D gallery
const CircularGallery = lazy(() => import('./CircularGallery'));

const ServicesSection = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [showGallery, setShowGallery] = useState(false); // Only load on demand
    const [showHeadCoachProfile, setShowHeadCoachProfile] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

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
            borderColor: "#FF0000",
            gradient: "linear-gradient(145deg, #FF0000, #1a0000)",
            url: "#",
            experience: "8+ years",
            description: "Specializes in strength training and bodybuilding. Has trained over 200+ clients to achieve their dream physique."
        },
        {
            image: "https://i.pravatar.cc/300?img=6",
            title: "Emma Watson",
            subtitle: "Trainer",
            handle: "@emmawatson",
            borderColor: "#FF0000",
            gradient: "linear-gradient(180deg, #FF0000, #1a0000)",
            url: "#",
            experience: "6+ years",
            description: "Expert in functional training and HIIT workouts. Passionate about helping clients improve their overall fitness."
        },
        {
            image: "https://i.pravatar.cc/300?img=7",
            title: "Liam Smith",
            subtitle: "Trainer",
            handle: "@liamsmith",
            borderColor: "#FF0000",
            gradient: "linear-gradient(165deg, #FF0000, #1a0000)",
            url: "#",
            experience: "10+ years",
            description: "CrossFit certified trainer with expertise in athletic performance and competition preparation."
        },
        {
            image: "https://i.pravatar.cc/300?img=8",
            title: "Sophia Lee",
            subtitle: "Physiotherapist",
            handle: "@sophialee",
            borderColor: "#FF0000",
            gradient: "linear-gradient(135deg, #FF0000, #1a0000)",
            url: "#",
            experience: "7+ years",
            description: "Certified sports physiotherapist specializing in injury rehabilitation and prevention for athletes."
        },
        {
            image: "https://i.pravatar.cc/300?img=9",
            title: "James Wilson",
            subtitle: "Physiotherapist",
            handle: "@jameswilson",
            borderColor: "#FF0000",
            gradient: "linear-gradient(195deg, #FF0000, #1a0000)",
            url: "#",
            experience: "5+ years",
            description: "Focuses on mobility training and post-workout recovery techniques for optimal performance."
        },
        {
            image: "https://i.pravatar.cc/300?img=10",
            title: "Olivia Brown",
            subtitle: "Cardio Trainer",
            handle: "@oliviabrown",
            borderColor: "#FF0000",
            gradient: "linear-gradient(225deg, #FF0000, #1a0000)",
            url: "#",
            experience: "4+ years",
            description: "Cardio and endurance specialist. Expert in treadmill training, cycling, and stamina building programs."
        },
        {
            image: "https://i.pravatar.cc/300?img=12",
            title: "Mia Thompson",
            subtitle: "Nutritionist",
            handle: "@miathompson",
            borderColor: "#FF0000",
            gradient: "linear-gradient(145deg, #FF0000, #1a0000)",
            url: "#",
            experience: "6+ years",
            description: "Certified nutritionist who creates personalized meal plans to complement your workout routine."
        },
        {
            image: "https://i.pravatar.cc/300?img=13",
            title: "Max Johnson",
            subtitle: "Heavy Weight Trainer",
            handle: "@maxjohnson",
            borderColor: "#FF0000",
            gradient: "linear-gradient(180deg, #FF0000, #1a0000)",
            url: "#",
            experience: "9+ years",
            description: "Powerlifting champion and strength coach. Specializes in deadlifts, squats, and bench press form."
        }
    ];

    const headCoach = {
        image: "/images/trainers/head-coach.jpg", // Using placeholder path as instructed
        fallbackImage: "https://i.pravatar.cc/500?img=11",
        title: "Surendar P",
        subtitle: "Head Coach",
        experience: "15+ Years",
        description: "Surendar is a world-class fitness professional dedicated to transforming lives through elite training protocols and holistic lifestyle optimization. As the visionary behind our premium training standards, he brings unmatched expertise to the floor.",
        skills: ["Elite Strength Conditioning", "Body Recomposition", "Injury Rehabilitation", "Advanced Sports Nutrition", "Competition Prep"],
        achievements: ["National Powerlifting Champion", "Trained 50+ Elite Athletes", "Fitness Industry Innovator Award 2024"],
        specializations: ["Hypertrophy", "Functional Movement", "Metabolic Conditioning"],
        highlights: [
            "Tamil Nadu Vice President – TGOTWA Chennai",
            "Founder & Owner – Flame Fitness Studio, T. Nagar",
            "Certified Fitness Coach & Wellness Specialist",
            "Internationally Certified by ISSA, IFA & NASM"
        ]
    };

    const certificatesData = [
        {
            image: "/images/certificates/issa-strength-training.jpg",
            title: "Importance of Strength Training for Senior Clients",
            organization: "ISSA",
            date: "2021",
            type: "Specialization"
        },
        {
            image: "/images/certificates/covid-safe-coach.jpg",
            title: "COVID Safe Sport Coaches & Officials Certification",
            organization: "Sport Australia",
            date: "2020",
            type: "Safety Certification"
        },
        {
            image: "/images/certificates/proprioceptive-fitness.jpg",
            title: "Proprioceptive Fitness Training",
            organization: "Caduceus",
            date: "2019",
            type: "Advanced Training"
        },
        {
            image: "/images/certificates/sports-nutrition.jpg",
            title: "Fitness Nutrition & Sports Supplementation",
            organization: "Caduceus",
            date: "2018",
            type: "Nutrition Certification"
        },
        {
            image: "/images/certificates/nasm-bodybuilding.jpg",
            title: "Guide to Bodybuilding",
            organization: "NASM",
            date: "2017",
            type: "Specialization"
        },
        {
            image: "/images/certificates/ifa-personal-trainer.jpg",
            title: "Personal Trainer & Group Fitness Instructor",
            organization: "International Fitness Association (IFA)",
            date: "2016",
            type: "Primary Certification"
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
                            className="px-10 py-4 bg-[var(--primary)] text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,0,0,0.3)] league-spartan uppercase tracking-wider"
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
                <div className="w-[90%] md:w-[32vw] h-[35vh] py-6 flex flex-col items-center justify-center md:block border-[var(--primary)]/30 border-t-2 border-b-2">
                    <MorphingText texts={texts} />
                </div>
            </div>

            {/* Trainers Section */}
            <div className='w-full flex flex-col items-center mt-20'>
                <h2 className='text-[10px] md:text-sm text-[var(--primary)] font-bold tracking-[0.2em] uppercase mb-4'>
                    Meet the Professionals Behind Your Transformation
                </h2>
                <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter mb-16'>
                    Our <span className="gradient-text">Trainers</span>
                </h1>

                {/* Head Coach Premium Card */}
                <div className="w-full max-w-5xl px-4 md:px-8 mb-20">
                    <motion.div
                        whileHover={{ y: -10, scale: 1.01 }}
                        className="group relative rounded-[32px] overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_50px_rgba(255,0,0,0.3)] flex flex-col md:flex-row"
                        onClick={() => setShowHeadCoachProfile(true)}
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden">
                            <img
                                src={headCoach.image}
                                alt={headCoach.title}
                                loading="lazy"
                                onError={(e) => { e.target.src = headCoach.fallbackImage }}
                                className="w-full h-full object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-[#050505]/80 backdrop-blur-md">
                            <h3 className="text-3xl md:text-5xl font-black text-white league-spartan uppercase tracking-tighter mb-2">
                                {headCoach.title}
                            </h3>
                            <p className="text-[var(--primary)] text-xl poiret font-bold tracking-widest uppercase mb-6">
                                {headCoach.subtitle}
                            </p>
                            <p className="text-white/70 montserrat leading-relaxed mb-8 line-clamp-3">
                                {headCoach.description}
                            </p>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white league-spartan">{headCoach.experience}</p>
                                    <p className="text-xs text-white/50 uppercase tracking-widest montserrat">Experience</p>
                                </div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-[var(--primary)] league-spartan">{certificatesData.length}</p>
                                    <p className="text-xs text-white/50 uppercase tracking-widest montserrat">Certifications</p>
                                </div>
                            </div>

                            <button className="self-start px-8 py-3 bg-transparent border-2 border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-black font-bold rounded-xl transition-all duration-300 league-spartan uppercase tracking-wider">
                                View Full Profile
                            </button>
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </motion.div>
                </div>

                {/* Supporting Trainers Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8 w-full max-w-6xl mb-12">
                    {team.map((trainer, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleTrainerClick(trainer)}
                            className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-700 shadow-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.title}
                                    loading="lazy"
                                    onError={(e) => { e.target.src = "https://i.pravatar.cc/300?img=1" }}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                            
                            {/* Shimmer effect overlay */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent skew-y-[-10deg] translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                <h3 className="text-xl md:text-2xl font-black text-white league-spartan uppercase tracking-tighter mb-1">{trainer.title}</h3>
                                <p className="text-[var(--primary)] text-xs md:text-sm poiret font-bold tracking-widest uppercase">{trainer.subtitle}</p>
                                <button className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 text-xs uppercase tracking-wider text-white border-b border-[var(--primary)] pb-1 transition-all duration-300">
                                    View Profile
                                </button>
                                <div className="w-0 group-hover:w-full h-0.5 bg-[var(--primary)] mt-3 transition-all duration-500 shadow-[0_0_10px_var(--primary)]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Head Coach Profile Modal */}
            <AnimatePresence>
                {showHeadCoachProfile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
                        onClick={() => setShowHeadCoachProfile(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[32px] w-full max-w-5xl my-auto relative shadow-[0_0_100px_rgba(255,0,0,0.15)] overflow-hidden flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-transparent to-[var(--primary)]" />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setShowHeadCoachProfile(false)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all cursor-pointer"
                            >
                                ✕
                            </button>

                            {/* Left Column: Image & Highlights */}
                            <div className="w-full md:w-[40%] bg-[#050505] flex flex-col max-h-[85vh] overflow-y-auto custom-scrollbar">
                                <div className="h-[400px] w-full shrink-0">
                                    <img 
                                        src={headCoach.image} 
                                        alt={headCoach.title} 
                                        loading="lazy"
                                        onError={(e) => { e.target.src = headCoach.fallbackImage }}
                                        className="w-full h-full object-cover grayscale-[20%]"
                                    />
                                </div>
                                <div className="p-8">
                                    <h4 className="text-lg text-[var(--primary)] league-spartan uppercase tracking-wider mb-6 border-b border-white/10 pb-4">Professional Highlights</h4>
                                    <div className="space-y-4">
                                        {headCoach.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                                <p className="text-white/90 text-sm montserrat leading-relaxed">{highlight}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Bio, Skills & Certifications */}
                            <div className="w-full md:w-[60%] p-8 md:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
                                <h2 className="text-4xl md:text-6xl font-black text-white league-spartan uppercase tracking-tighter mb-2">{headCoach.title}</h2>
                                <p className="text-xl text-[var(--primary)] poiret font-bold tracking-widest uppercase mb-8">{headCoach.subtitle}</p>

                                <div className="mb-10">
                                    <h4 className="text-lg text-white/60 league-spartan uppercase tracking-wider mb-4">Professional Biography</h4>
                                    <p className="text-white/80 montserrat leading-relaxed">{headCoach.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div>
                                        <h4 className="text-lg text-white/60 league-spartan uppercase tracking-wider mb-4">Experience</h4>
                                        <p className="text-2xl font-bold text-white mb-2">{headCoach.experience}</p>
                                        <div className="space-y-2">
                                            {headCoach.achievements.map((ach, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                                    <p className="text-sm text-white/70 montserrat">{ach}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white/60 league-spartan uppercase tracking-wider mb-4">Specializations & Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {[...headCoach.specializations, ...headCoach.skills].map((skill, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 montserrat">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Certifications Section inside Modal */}
                                <div>
                                    <h4 className="text-2xl text-[var(--primary)] league-spartan uppercase tracking-wider mb-6 border-b border-white/10 pb-4">Professional Certifications</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {certificatesData.map((cert, index) => (
                                            <div key={index} className="bg-[#050505] border border-white/10 rounded-2xl p-4 hover:border-[var(--primary)]/50 transition-colors flex gap-4 group">
                                                <div className="w-20 h-24 shrink-0 overflow-hidden rounded-lg bg-black border border-white/5 cursor-pointer relative" onClick={() => setSelectedCertificate(cert)}>
                                                    <img 
                                                        src={cert.image} 
                                                        alt={cert.title} 
                                                        loading="lazy"
                                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-[10px] uppercase text-white font-bold tracking-wider">Preview</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-between py-1">
                                                    <div>
                                                        <h5 className="text-white text-sm font-bold leading-tight mb-1">{cert.title}</h5>
                                                        <p className="text-[var(--primary)] text-xs uppercase tracking-wider">{cert.organization}</p>
                                                        <p className="text-white/40 text-[10px] mt-1">{cert.date} • {cert.type}</p>
                                                    </div>
                                                    <div className="flex gap-3 mt-3">
                                                        <button 
                                                            onClick={() => setSelectedCertificate(cert)}
                                                            className="text-xs text-white/70 hover:text-white underline decoration-white/30 underline-offset-2"
                                                        >
                                                            Preview
                                                        </button>
                                                        <a 
                                                            href={cert.image} 
                                                            download 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-xs text-[var(--primary)] hover:text-red-400 underline decoration-red-900/50 underline-offset-2"
                                                        >
                                                            Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Certificate Preview Fullscreen Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:bg-white/20 transition-all cursor-pointer z-10"
                            >
                                ✕
                            </button>
                            <img 
                                src={selectedCertificate.image} 
                                alt={selectedCertificate.title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,255,255,0.1)]"
                            />
                            <div className="mt-6 text-center">
                                <h3 className="text-xl text-white font-bold mb-1">{selectedCertificate.title}</h3>
                                <p className="text-[var(--primary)] uppercase tracking-wider text-sm">{selectedCertificate.organization}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Supporting Trainer Detail Modal */}
            <AnimatePresence>
                {selectedTrainer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedTrainer(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 40 }}
                            transition={{ duration: 0.35 }}
                            className="glass-card p-6 md:p-10 max-w-md w-[90%] relative shadow-[0_0_80px_rgba(255,0,0,0.1)] bg-[#0a0a0a]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-t-3xl" />
                            
                            <div className="flex items-center gap-5 mb-6">
                                <img
                                    src={selectedTrainer?.image}
                                    alt={selectedTrainer.title}
                                    loading="lazy"
                                    onError={(e) => { e.target.src = "https://i.pravatar.cc/300?img=1" }}
                                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[var(--primary)]/50"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-[var(--primary)] league-spartan">{selectedTrainer.title}</h2>
                                    <p className="text-white/60 poiret font-bold tracking-wider uppercase text-sm mb-1">{selectedTrainer.subtitle}</p>
                                    <p className="text-white/40 text-xs montserrat">{selectedTrainer.experience} Experience</p>
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="text-xs text-white/50 uppercase tracking-widest mb-2 border-b border-white/10 pb-1">Biography</h4>
                                <p className="text-white/80 montserrat text-sm leading-relaxed">
                                    {selectedTrainer.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-xs text-white/50 uppercase tracking-widest mb-3 border-b border-white/10 pb-1">Specializations</h4>
                                <div className="flex flex-wrap gap-2">
                                    {/* Using placeholder skills based on subtitle */}
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">Form Correction</span>
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">Custom Programs</span>
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">Motivation</span>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setSelectedTrainer(null)}
                                className="w-full py-3 bg-[var(--primary)] text-[#050505] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all league-spartan uppercase tracking-wider cursor-pointer"
                            >
                                Close Profile
                            </button>
                            <button
                                onClick={() => setSelectedTrainer(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:bg-white/20 transition-all cursor-pointer"
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
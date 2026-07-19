import React, { useState, Suspense, lazy } from 'react';
import { MorphingText } from './MorphingText';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy load the heavy 3D gallery
const CircularGallery = lazy(() => import('./CircularGallery'));

// ─── Trainer Placeholder Image ────────────────────────────────────────────────
// Used for Balu and Vijayakumar until real photos are provided.
// Replace the <TrainerPlaceholder> with <img src="..." ...> when photos arrive.
const TrainerPlaceholder = ({ initials, name }) => (
    <div
        aria-label={`Profile photo placeholder for ${name}`}
        className="w-full h-full flex flex-col items-center justify-center select-none"
        style={{
            background: 'linear-gradient(145deg, #0e0e0e 0%, #1a0000 60%, #050505 100%)',
        }}
    >
        {/* Red accent line at top */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

        {/* Large initials */}
        <span
            className="league-spartan font-black uppercase select-none"
            style={{
                fontSize: 'clamp(5rem, 10vw, 9rem)',
                color: 'rgba(255,255,255,0.06)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                userSelect: 'none',
            }}
        >
            {initials}
        </span>

        {/* Badge label */}
        <div className="mt-6 px-5 py-2 border border-[var(--primary)]/30 rounded-full">
            <p className="text-[var(--primary)]/60 text-xs uppercase tracking-[0.25em] montserrat font-semibold">
                Photo Coming Soon
            </p>
        </div>
    </div>
);

// ─── Trainer Data ─────────────────────────────────────────────────────────────

const headCoach = {
    image: '/images/trainers/head-coach.jpg',
    fallbackImage: 'https://i.pravatar.cc/500?img=11',
    title: 'Surendar P',
    subtitle: 'Head Coach & Managing Director',
    focus: 'Fitness Coach & Wellness',
    description:
        'Surendar P is a dedicated Fitness Coach & Wellness Specialist, serving as Head Coach and Managing Director of Flame Fitness Studio, and Vice President of TNGO&TWA (Tamil Nadu Gym Owners and Trainers Welfare Association). Internationally certified by leading fitness organizations including NASM, ISSA, and IFA, he brings elite standards to physical fitness and holistic wellness.',
    positions: [
        {
            role: 'Head Coach',
            organization: 'Flame Fitness Studio',
            description: 'Directs overall athletic training protocols, coaching standards, and member progression programs.',
        },
        {
            role: 'Managing Director',
            organization: 'Flame Fitness Studio',
            description: 'Leads executive management, operational vision, and strategic growth of Flame Fitness Studio.',
        },
        {
            role: 'Vice President',
            organization: 'TNGO&TWA (Tamil Nadu Gym Owners and Trainers Welfare Association)',
            description: 'Serves in leadership advocating for gym owners and trainers welfare across Tamil Nadu.',
        },
    ],
    affiliations: [
        { abbr: 'NASM', name: 'National Academy of Sports Medicine' },
        { abbr: 'ISSA', name: 'International Sports Sciences Association' },
        { abbr: 'IFA', name: 'International Fitness Association' },
    ],
};

const balu = {
    image: '/images/profile/balu-profile.png',
    initials: 'RB',
    title: 'R. Balu',
    subtitle: 'Senior Trainer & Floor Manager',
    experience: '11+ Years',
    clientsTrained: '300+',
    description:
        'Professional fitness trainer and former Mr Chennai with over 11 years of industry experience. A dedicated trainer focused on combining practical training with proper exercise knowledge, having trained more than 300 clients.',
    achievements: [
        'Mr Chennai — 2016',
        'Best Coach of 2022 — Flame Fitness Studio',
    ],
    certifications: [
        {
            title: 'Health and Fitness Instructor',
            organization: 'IISM (Indian Institute of Sports Medicine)',
        },
        {
            title: 'Certified Rehabilitation Exercise Specialist (Musculoskeletal)',
            organization: 'QuaFit',
        },
        {
            title: 'Certified Aquatic Fitness Instructor',
            organization: 'QuaFit',
        },
        {
            title: 'Sports & Exercise Science Internship',
            organization: 'NSCA',
        },
        {
            title: 'Corrective Approach to Functional Training',
            organization: 'AAFP Workshop',
        },
        {
            title: 'Foot and Footwear Biomechanics',
            organization: 'Fitness.inc',
        },
        {
            title: 'Heartsaver First Aid CPR AED',
            organization: 'CPRVerify',
        },
    ],
    resumePdf: '/documents/Balu Fitness Resume_Oct2023.pdf',
};

const vijay = {
    // Replace null with '/images/trainers/vijayakumar.jpg' when the real photo is available
    image: null,
    initials: 'VR',
    title: 'Vijayakumar R',
    subtitle: 'Health and Fitness Instructor (HFI)',
    description:
        'Health and Fitness Instructor at Flame Fitness Studio, dedicated to helping members achieve their fitness goals through structured, safe, and effective training.',
};

// ─── Certificate Data (Surendar P) ────────────────────────────────────────────

const certificatesData = [
    {
        image: '/images/certificates/issa-strength-training.jpg',
        title: 'Importance of Strength Training for Senior Clients',
        organization: 'ISSA',
        date: '2021',
        type: 'Specialization',
    },
    {
        image: '/images/certificates/covid-safe-coach.jpg',
        title: 'COVID Safe Sport Coaches & Officials Certification',
        organization: 'Sport Australia',
        date: '2020',
        type: 'Safety Certification',
    },
    {
        image: '/images/certificates/proprioceptive-fitness.jpg',
        title: 'Proprioceptive Fitness Training',
        organization: 'Caduceus',
        date: '2019',
        type: 'Advanced Training',
    },
    {
        image: '/images/certificates/sports-nutrition.jpg',
        title: 'Fitness Nutrition & Sports Supplementation',
        organization: 'Caduceus',
        date: '2018',
        type: 'Nutrition Certification',
    },
    {
        image: '/images/certificates/nasm-bodybuilding.jpg',
        title: 'Guide to Bodybuilding',
        organization: 'NASM',
        date: '2017',
        type: 'Specialization',
    },
    {
        image: '/images/certificates/ifa-personal-trainer.jpg',
        title: 'Personal Trainer & Group Fitness Instructor',
        organization: 'International Fitness Association (IFA)',
        date: '2016',
        type: 'Primary Certification',
    },
];

// ─── Reusable Stat Block ──────────────────────────────────────────────────────
const StatBlock = ({ value, label, accent }) => (
    <div className="text-center">
        <p className={`text-xl sm:text-2xl font-bold league-spartan ${accent ? 'text-[var(--primary)]' : 'text-white'}`}>
            {value}
        </p>
        <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest montserrat">{label}</p>
    </div>
);

// ─── Trainer Card (shared layout wrapper) ─────────────────────────────────────
// reverse=true  →  image on RIGHT, content on LEFT (desktop)
// reverse=false →  image on LEFT, content on RIGHT (desktop)
// On Mobile/Tablet (< md): Single column layout with Image at TOP and Content BELOW
const TrainerCard = ({ trainer, reverse, onViewProfile, stats }) => {
    const imageArea = trainer.image ? (
        <img
            src={trainer.image}
            alt={trainer.title}
            loading="lazy"
            onError={(e) => {
                e.target.style.display = 'none';
            }}
            className="w-full h-full object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
        />
    ) : (
        <TrainerPlaceholder initials={trainer.initials} name={trainer.title} />
    );

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.002 }}
            className={`group relative rounded-[24px] sm:rounded-[32px] overflow-hidden glass-card border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_50px_rgba(255,0,0,0.25)] flex flex-col ${
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } w-full`}
        >
            {/* Image Section - Always rendered first in DOM so mobile flex-col shows image above text */}
            <div className="w-full md:w-1/2 h-[260px] sm:h-[360px] md:h-[480px] relative overflow-hidden shrink-0">
                {imageArea}
                <div
                    className={`absolute inset-0 ${
                        reverse
                            ? 'bg-gradient-to-t md:bg-gradient-to-l'
                            : 'bg-gradient-to-t md:bg-gradient-to-r'
                    } from-[#050505] via-[#050505]/40 to-transparent`}
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center relative z-10 bg-[#050505]/80 backdrop-blur-md">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white league-spartan uppercase tracking-tight sm:tracking-tighter mb-2">
                    {trainer.title}
                </h3>
                <p className="text-[var(--primary)] text-sm sm:text-base md:text-lg poiret font-bold tracking-widest uppercase mb-4 sm:mb-6">
                    {trainer.subtitle}
                </p>
                <p className="text-white/70 montserrat text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                    {trainer.description}
                </p>

                {/* Stats row */}
                {stats && stats.length > 0 && (
                    <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap">
                        {stats.map((stat, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <div className="w-px h-8 sm:h-10 bg-white/10" />}
                                <StatBlock value={stat.value} label={stat.label} accent={stat.accent} />
                            </React.Fragment>
                        ))}
                    </div>
                )}

                <button
                    onClick={onViewProfile}
                    className="self-start px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-black font-bold rounded-xl transition-all duration-300 league-spartan uppercase tracking-wider text-xs sm:text-sm"
                >
                    View Full Profile
                </button>

                {/* Top hover accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </motion.div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ServicesSection = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [showHeadCoachProfile, setShowHeadCoachProfile] = useState(false);
    const [showBaluProfile, setShowBaluProfile] = useState(false);
    const [showVijayProfile, setShowVijayProfile] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const texts = [
        'Air Conditioning',
        'Changing Room',
        'Bathing Area',
        'Parking Area',
        'Personal Racks',
        'Drinks & Snacks',
    ];

    return (
        <div className="w-full flex flex-col items-center py-8 my-10 overflow-x-hidden max-w-full">
            {/* ── Equipment ─────────────────────────────────────────────── */}
            <h1 className="text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter mb-8 md:mb-0">
                Equipment
            </h1>
            <div className="w-full h-[50vh] md:h-[65vh] relative">
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
                    <Suspense
                        fallback={
                            <div className="w-full h-full flex items-center justify-center text-white/40 poiret">
                                Loading 3D Scene...
                            </div>
                        }
                    >
                        <CircularGallery />
                    </Suspense>
                )}
            </div>

            {/* ── Facilities ────────────────────────────────────────────── */}
            <div className="w-full min-h-[50vh] md:h-[65vh] flex flex-col gap-8 items-center mt-20 mb-10">
                <h1 className="text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter">
                    Facilities
                </h1>
                <div className="w-[90%] md:w-[32vw] h-[35vh] py-6 flex flex-col items-center justify-center md:block border-[var(--primary)]/30 border-t-2 border-b-2">
                    <MorphingText texts={texts} />
                </div>
            </div>

            {/* ── Trainers Section ──────────────────────────────────────── */}
            <div className="w-full flex flex-col items-center mt-12 sm:mt-20 px-4">
                <h2 className="text-[10px] sm:text-xs md:text-sm text-[var(--primary)] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-4 text-center">
                    Meet the Professionals Behind Your Transformation
                </h2>
                <h1 className="text-3xl sm:text-5xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter mb-10 sm:mb-16 text-center">
                    Our <span className="gradient-text">Trainers</span>
                </h1>

                <div className="w-full max-w-5xl px-0 sm:px-4 md:px-8 flex flex-col gap-6 sm:gap-8">

                    {/* ── 1. Surendar P — Head Coach (Image Left on Desktop, Top on Mobile) ── */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.002 }}
                        className="group relative rounded-[24px] sm:rounded-[32px] overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_50px_rgba(255,0,0,0.3)] flex flex-col md:flex-row w-full"
                        onClick={() => setShowHeadCoachProfile(true)}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2 h-[260px] sm:h-[360px] md:h-[500px] relative overflow-hidden shrink-0">
                            <img
                                src={headCoach.image}
                                alt={headCoach.title}
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = headCoach.fallbackImage;
                                }}
                                className="w-full h-full object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center relative z-10 bg-[#050505]/80 backdrop-blur-md">
                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white league-spartan uppercase tracking-tight sm:tracking-tighter mb-2">
                                {headCoach.title}
                            </h3>
                            <p className="text-[var(--primary)] text-sm sm:text-base md:text-xl poiret font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                {headCoach.subtitle}
                            </p>
                            <p className="text-white/70 montserrat text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                                {headCoach.description}
                            </p>

                            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap">
                                <StatBlock value={headCoach.affiliations.length} label="Affiliations" />
                                <div className="w-px h-8 sm:h-10 bg-white/10" />
                                <StatBlock value={certificatesData.length} label="Certifications" accent />
                            </div>

                            <button className="self-start px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-black font-bold rounded-xl transition-all duration-300 league-spartan uppercase tracking-wider text-xs sm:text-sm">
                                View Full Profile
                            </button>
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </motion.div>

                    {/* ── 2. R. Balu — Senior Trainer (Image Right on Desktop, Top on Mobile) ── */}
                    <TrainerCard
                        trainer={balu}
                        reverse={true}
                        onViewProfile={() => setShowBaluProfile(true)}
                        stats={[
                            { value: balu.experience, label: 'Experience' },
                            { value: balu.clientsTrained, label: 'Clients Trained', accent: true },
                            { value: balu.certifications.length, label: 'Certifications' },
                        ]}
                    />

                    {/* ── 3. Vijayakumar R — HFI (Image Left on Desktop, Top on Mobile) ── */}
                    <TrainerCard
                        trainer={vijay}
                        reverse={false}
                        onViewProfile={() => setShowVijayProfile(true)}
                        stats={[]}
                    />
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/*  MODALS                                                         */}
            {/* ═══════════════════════════════════════════════════════════════ */}

            {/* ── Surendar — Full Profile Modal ─────────────────────────── */}
            <AnimatePresence>
                {showHeadCoachProfile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto min-h-[100dvh] w-screen overflow-x-hidden"
                        onClick={() => setShowHeadCoachProfile(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[24px] sm:rounded-[32px] w-[calc(100vw-24px)] max-w-5xl max-h-[calc(100dvh-24px)] md:max-h-[85vh] my-auto relative shadow-[0_0_100px_rgba(255,0,0,0.15)] overflow-hidden flex flex-col md:flex-row overflow-y-auto custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-transparent to-[var(--primary)]" />

                            {/* Close */}
                            <button
                                onClick={() => setShowHeadCoachProfile(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all cursor-pointer shadow-lg"
                                aria-label="Close profile modal"
                            >
                                ✕
                            </button>

                            {/* Left: Image & Overview */}
                            <div className="w-full md:w-[38%] bg-[#050505] flex flex-col shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                                <div className="h-[240px] sm:h-[320px] md:h-[380px] w-full shrink-0 relative overflow-hidden">
                                    <img
                                        src={headCoach.image}
                                        alt={headCoach.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = headCoach.fallbackImage;
                                        }}
                                        className="w-full h-full object-cover object-top grayscale-[20%]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                                </div>
                                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                                    <div>
                                        <h4 className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.2em] montserrat font-semibold mb-1 sm:mb-2">
                                            Professional Focus
                                        </h4>
                                        <p className="text-[var(--primary)] font-bold text-base sm:text-lg league-spartan uppercase tracking-wider">
                                            {headCoach.focus}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.2em] montserrat font-semibold mb-2 sm:mb-3">
                                            International Affiliations
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {headCoach.affiliations.map((aff, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full text-[10px] sm:text-xs font-bold text-white tracking-wider montserrat"
                                                >
                                                    {aff.abbr}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Bio, Positions, Affiliations & Certifications */}
                            <div className="w-full md:w-[62%] p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white league-spartan uppercase tracking-tight sm:tracking-tighter mb-1 sm:mb-2">
                                        {headCoach.title}
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-[var(--primary)] poiret font-bold tracking-widest uppercase">
                                        {headCoach.subtitle}
                                    </p>
                                </div>

                                {/* 1. Professional Summary */}
                                <div>
                                    <h4 className="text-base sm:text-lg text-[var(--primary)] league-spartan uppercase tracking-wider mb-2 sm:mb-3 border-b border-white/10 pb-2">
                                        Professional Summary
                                    </h4>
                                    <p className="text-white/80 montserrat leading-relaxed text-xs sm:text-sm md:text-base">
                                        {headCoach.description}
                                    </p>
                                </div>

                                {/* 2, 3, 4. Positions & Association Roles */}
                                <div>
                                    <h4 className="text-base sm:text-lg text-[var(--primary)] league-spartan uppercase tracking-wider mb-3 sm:mb-4 border-b border-white/10 pb-2">
                                        Positions & Association Roles
                                    </h4>
                                    <div className="space-y-3">
                                        {headCoach.positions.map((pos, i) => (
                                            <div
                                                key={i}
                                                className="p-3.5 sm:p-4 bg-white/[0.03] border border-white/5 rounded-xl sm:rounded-2xl hover:border-[var(--primary)]/30 transition-colors"
                                            >
                                                <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                                                    <p className="text-white text-sm sm:text-base font-bold league-spartan uppercase tracking-wide">
                                                        {pos.role}
                                                    </p>
                                                    <span className="text-[var(--primary)] text-[10px] sm:text-xs font-semibold uppercase tracking-wider montserrat">
                                                        {pos.organization}
                                                    </span>
                                                </div>
                                                <p className="text-white/70 text-xs montserrat leading-relaxed mt-1.5 sm:mt-2">
                                                    {pos.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 5. Professional Affiliations / Credentials */}
                                <div>
                                    <h4 className="text-base sm:text-lg text-[var(--primary)] league-spartan uppercase tracking-wider mb-3 sm:mb-4 border-b border-white/10 pb-2">
                                        Professional Affiliations & Credentials
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                                        {headCoach.affiliations.map((aff, i) => (
                                            <div
                                                key={i}
                                                className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center flex flex-col items-center justify-center hover:border-[var(--primary)]/30 transition-all"
                                            >
                                                <span className="text-xl sm:text-2xl font-black text-[var(--primary)] league-spartan mb-0.5 sm:mb-1">
                                                    {aff.abbr}
                                                </span>
                                                <span className="text-white/80 text-[10px] sm:text-xs font-medium montserrat leading-snug">
                                                    {aff.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 6. Certificates & Achievements */}
                                <div>
                                    <h4 className="text-lg sm:text-xl text-[var(--primary)] league-spartan uppercase tracking-wider mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                                        Certificates & Qualifications
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {certificatesData.map((cert, index) => (
                                            <div
                                                key={index}
                                                className="bg-[#050505] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-[var(--primary)]/50 transition-colors flex gap-3 sm:gap-4 group"
                                            >
                                                <div
                                                    className="w-16 h-20 sm:w-20 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-black border border-white/5 cursor-pointer relative"
                                                    onClick={() => setSelectedCertificate(cert)}
                                                >
                                                    <img
                                                        src={cert.image}
                                                        alt={cert.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-[9px] sm:text-[10px] uppercase text-white font-bold tracking-wider">
                                                            Preview
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-between py-0.5 min-w-0">
                                                    <div>
                                                        <h5 className="text-white text-xs sm:text-sm font-bold leading-tight mb-1 truncate">
                                                            {cert.title}
                                                        </h5>
                                                        <p className="text-[var(--primary)] text-[10px] sm:text-xs uppercase tracking-wider truncate">
                                                            {cert.organization}
                                                        </p>
                                                        <p className="text-white/40 text-[9px] sm:text-[10px] mt-0.5 sm:mt-1">
                                                            {cert.date} • {cert.type}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-3 mt-2 sm:mt-3">
                                                        <button
                                                            onClick={() => setSelectedCertificate(cert)}
                                                            className="text-[10px] sm:text-xs text-white/70 hover:text-white underline decoration-white/30 underline-offset-2"
                                                        >
                                                            Preview
                                                        </button>
                                                        <a
                                                            href={cert.image}
                                                            download
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-[10px] sm:text-xs text-[var(--primary)] hover:text-red-400 underline decoration-red-900/50 underline-offset-2"
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

            {/* ── R. Balu — Full Profile Modal ──────────────────────────── */}
            <AnimatePresence>
                {showBaluProfile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto min-h-[100dvh] w-screen overflow-x-hidden"
                        onClick={() => setShowBaluProfile(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[24px] sm:rounded-[32px] w-[calc(100vw-24px)] max-w-5xl max-h-[calc(100dvh-24px)] md:max-h-[85vh] my-auto relative shadow-[0_0_100px_rgba(255,0,0,0.15)] overflow-hidden flex flex-col md:flex-row overflow-y-auto custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-transparent to-[var(--primary)]" />

                            {/* Close */}
                            <button
                                onClick={() => setShowBaluProfile(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all cursor-pointer shadow-lg"
                                aria-label="Close profile modal"
                            >
                                ✕
                            </button>

                            {/* Left: Photo / Placeholder + Achievements */}
                            <div className="w-full md:w-[38%] bg-[#050505] flex flex-col shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                                <div className="h-[240px] sm:h-[320px] md:h-[360px] w-full shrink-0 relative overflow-hidden">
                                    {balu.image ? (
                                        <img
                                            src={balu.image}
                                            alt={balu.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-top grayscale-[20%]"
                                        />
                                    ) : (
                                        <TrainerPlaceholder initials={balu.initials} name={balu.title} />
                                    )}
                                </div>

                                {/* Achievements */}
                                <div className="p-5 sm:p-8">
                                    <h4 className="text-base sm:text-lg text-[var(--primary)] league-spartan uppercase tracking-wider mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                                        Achievements
                                    </h4>
                                    <div className="space-y-3 sm:space-y-4">
                                        {balu.achievements.map((achievement, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                                                <p className="text-white/90 text-xs sm:text-sm montserrat leading-relaxed">
                                                    {achievement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Resume Button */}
                                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                                        <button
                                            onClick={() =>
                                                window.open(balu.resumePdf, '_blank', 'noopener,noreferrer')
                                            }
                                            className="w-full py-3 px-4 sm:px-6 bg-transparent border-2 border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-black font-bold rounded-xl transition-all duration-300 league-spartan uppercase tracking-wider text-xs sm:text-sm"
                                        >
                                            View Resume
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Bio, Stats & Certifications */}
                            <div className="w-full md:w-[62%] p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white league-spartan uppercase tracking-tight sm:tracking-tighter mb-1 sm:mb-2">
                                        {balu.title}
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-[var(--primary)] poiret font-bold tracking-widest uppercase">
                                        {balu.subtitle}
                                    </p>
                                </div>

                                {/* Professional Summary */}
                                <div>
                                    <h4 className="text-base sm:text-lg text-white/60 league-spartan uppercase tracking-wider mb-2 sm:mb-4">
                                        Professional Summary
                                    </h4>
                                    <p className="text-white/80 montserrat leading-relaxed text-xs sm:text-sm md:text-base">
                                        {balu.description}
                                    </p>
                                </div>

                                {/* Experience Stats */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 bg-white/[0.03] rounded-2xl border border-white/5">
                                    <div className="text-center">
                                        <p className="text-xl sm:text-3xl font-black text-white league-spartan">
                                            {balu.experience}
                                        </p>
                                        <p className="text-[9px] sm:text-xs text-white/40 uppercase tracking-widest montserrat mt-1">
                                            Experience
                                        </p>
                                    </div>
                                    <div className="text-center border-x border-white/10">
                                        <p className="text-xl sm:text-3xl font-black text-[var(--primary)] league-spartan">
                                            {balu.clientsTrained}
                                        </p>
                                        <p className="text-[9px] sm:text-xs text-white/40 uppercase tracking-widest montserrat mt-1">
                                            Clients
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl sm:text-3xl font-black text-white league-spartan">
                                            {balu.certifications.length}
                                        </p>
                                        <p className="text-[9px] sm:text-xs text-white/40 uppercase tracking-widest montserrat mt-1">
                                            Certs
                                        </p>
                                    </div>
                                </div>

                                {/* Certifications List */}
                                <div>
                                    <h4 className="text-lg sm:text-xl text-[var(--primary)] league-spartan uppercase tracking-wider mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                                        Qualifications & Certifications
                                    </h4>
                                    <div className="space-y-2.5 sm:space-y-3">
                                        {balu.certifications.map((cert, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 p-3 sm:p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:border-[var(--primary)]/30 transition-colors"
                                            >
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center shrink-0 mt-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                                                </div>
                                                <div>
                                                    <p className="text-white/90 text-xs sm:text-sm font-semibold montserrat leading-snug">
                                                        {cert.title}
                                                    </p>
                                                    <p className="text-[var(--primary)]/70 text-[10px] sm:text-xs uppercase tracking-wider mt-1">
                                                        {cert.organization}
                                                    </p>
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

            {/* ── Vijayakumar — Profile Modal ────────────────────────────── */}
            <AnimatePresence>
                {showVijayProfile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl overflow-y-auto min-h-[100dvh] w-screen overflow-x-hidden"
                        onClick={() => setShowVijayProfile(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[24px] sm:rounded-[32px] w-[calc(100vw-24px)] max-w-2xl max-h-[calc(100dvh-24px)] md:max-h-[85vh] my-auto relative shadow-[0_0_100px_rgba(255,0,0,0.15)] overflow-hidden flex flex-col md:flex-row overflow-y-auto custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-transparent to-[var(--primary)]" />

                            {/* Close */}
                            <button
                                onClick={() => setShowVijayProfile(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all cursor-pointer shadow-lg"
                                aria-label="Close profile modal"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col md:flex-row w-full">
                                {/* Photo / Placeholder */}
                                <div className="w-full md:w-[40%] h-[220px] sm:h-[280px] md:min-h-[380px] relative overflow-hidden shrink-0 bg-[#050505]">
                                    {vijay.image ? (
                                        <img
                                            src={vijay.image}
                                            alt={vijay.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-top grayscale-[20%]"
                                        />
                                    ) : (
                                        <TrainerPlaceholder initials={vijay.initials} name={vijay.title} />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-[60%] p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                                    <div className="mb-2 sm:mb-3">
                                        <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--primary)]/60 montserrat font-semibold">
                                            Flame Fitness Studio
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white league-spartan uppercase tracking-tight sm:tracking-tighter mb-1 sm:mb-2">
                                        {vijay.title}
                                    </h2>
                                    <p className="text-[var(--primary)] text-xs sm:text-sm poiret font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                        {vijay.subtitle}
                                    </p>

                                    <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                                        <h4 className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest montserrat mb-2">
                                            About
                                        </h4>
                                        <p className="text-white/80 montserrat text-xs sm:text-sm leading-relaxed">
                                            {vijay.description}
                                        </p>
                                    </div>

                                    {/* Role badge */}
                                    <div className="flex items-center gap-3">
                                        <div className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full">
                                            <p className="text-[var(--primary)] text-[10px] sm:text-xs uppercase tracking-wider league-spartan font-bold">
                                                Health &amp; Fitness Instructor
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowVijayProfile(false)}
                                        className="mt-6 sm:mt-8 w-full py-2.5 sm:py-3 bg-transparent border border-white/10 text-white/60 hover:text-white hover:border-white/30 font-bold rounded-xl transition-all duration-300 league-spartan uppercase tracking-wider text-xs sm:text-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Certificate Preview Fullscreen Modal ──────────────────── */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-2xl min-h-[100dvh] w-screen overflow-x-hidden"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-[95vw] md:max-w-[90vw] max-h-[90dvh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute -top-10 sm:-top-12 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:bg-white/20 transition-all cursor-pointer z-20 shadow-md"
                                aria-label="Close certificate lightbox"
                            >
                                ✕
                            </button>
                            <img
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                className="max-w-full max-h-[60dvh] md:max-h-[75vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,255,255,0.1)]"
                            />
                            <div className="mt-4 sm:mt-6 text-center px-2">
                                <h3 className="text-sm sm:text-xl text-white font-bold mb-1">
                                    {selectedCertificate.title}
                                </h3>
                                <p className="text-[var(--primary)] uppercase tracking-wider text-xs sm:text-sm font-medium">
                                    {selectedCertificate.organization}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicesSection;
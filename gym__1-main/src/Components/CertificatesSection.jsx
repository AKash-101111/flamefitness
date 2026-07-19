import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------------------------------------------------------------------
// Certificate data — sourced only from the actual certificate images
// ---------------------------------------------------------------------------
const certificates = [
    {
        id: 1,
        src: '/images/certificates/cert-proprioceptive-fitness-training.jpeg',
        title: 'Proprioceptive Fitness Training',
        type: 'One Day Workshop',
        org: 'Caduceus — Excellence in Fitness Education',
        date: 'December 2018',
        trainer: 'Surendar P',
    },
    {
        id: 2,
        src: '/images/certificates/cert-postural-alignment-corrective-exercise.jpeg',
        title: 'Postural Alignment & Corrective Exercise',
        type: 'Four Hours Workshop',
        org: 'Caduceus — Excellence in Fitness Education',
        date: 'September 2018',
        trainer: 'Surendar P',
    },
    {
        id: 3,
        src: '/images/certificates/cert-fitness-nutrition-sports-supplementation.jpeg',
        title: 'Fitness Nutrition & Sports Supplementation',
        type: 'One Day Seminar',
        org: 'Caduceus — Excellence in Fitness Education',
        date: 'November 2018',
        trainer: 'Surendar P',
    },
    {
        id: 4,
        src: '/images/certificates/cert-covid-safe-sport-coaches.jpeg',
        title: 'COVID Safe Sport Coaches & Officials Certification',
        type: 'Online Certification',
        org: 'OpenLearning / Australian Coaching Council',
        date: 'June 2020',
        trainer: 'Surendar P',
    },
    {
        id: 5,
        src: '/images/certificates/cert-issa-strength-training-seniors.jpeg',
        title: 'Importance of Strength Training for Senior Clients',
        type: 'Continuing Education Course',
        org: 'ISSA — International Sports Sciences Association',
        date: 'December 2020',
        trainer: 'Surendar P',
    },
    {
        id: 6,
        src: '/images/certificates/cert-nasm-guide-bodybuilding.jpeg',
        title: "NASM's Guide to Bodybuilding",
        type: 'Record of Completion',
        org: 'NASM — National Academy of Sports Medicine',
        date: 'May 2021',
        trainer: 'Surendar P',
    },
];

// ---------------------------------------------------------------------------
// Badge strip — credibility indicators (no fabricated numbers)
// ---------------------------------------------------------------------------
const badges = [
    { icon: '🏅', label: 'Professional Certifications' },
    { icon: '💪', label: 'Specialised Fitness Training' },
    { icon: '📚', label: 'Workshops & Continuing Education' },
    { icon: '🏆', label: 'Industry Experience' },
];

// ---------------------------------------------------------------------------
// Certificate Card
// ---------------------------------------------------------------------------
const CertCard = ({ cert, index, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onClick(index)}
        className="cert-card group relative flex flex-col glass-card overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--primary)]/50 hover:shadow-[0_0_40px_rgba(255,0,0,0.2)] transition-all duration-500"
        role="button"
        tabIndex={0}
        aria-label={`View certificate: ${cert.title}`}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(index); }}
    >
        {/* Red accent line top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Certificate image */}
        <div className="cert-card-img-wrap overflow-hidden bg-white/5">
            <img
                src={cert.src}
                alt={`Certificate: ${cert.title} — ${cert.org}`}
                loading="lazy"
                className="cert-card-img w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-2 flex-1">
            {/* Type badge */}
            <span className="self-start px-3 py-0.5 rounded-full text-[10px] font-bold league-spartan uppercase tracking-widest bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                {cert.type}
            </span>

            <h3 className="text-base font-bold league-spartan text-white leading-snug tracking-tight">
                {cert.title}
            </h3>

            <p className="text-white/50 poiret text-sm leading-relaxed">
                {cert.org}
            </p>

            <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                <span className="text-white/35 montserrat text-xs">{cert.date}</span>
                <span className="text-[var(--primary)]/70 text-xs league-spartan uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    View
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </span>
            </div>
        </div>
    </motion.div>
);

// ---------------------------------------------------------------------------
// Lightbox Modal
// ---------------------------------------------------------------------------
const Lightbox = ({ index, onClose, onPrev, onNext }) => {
    const cert = certificates[index];
    const total = certificates.length;

    return (
        <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="modal-overlay z-[1100]"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-label={`Certificate viewer: ${cert.title}`}
        >
            {/* Prev Arrow — desktop */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-all cursor-pointer z-[1102] shrink-0"
                aria-label="Previous certificate"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next Arrow — desktop */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-all cursor-pointer z-[1102] shrink-0"
                aria-label="Next certificate"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Modal panel */}
            <motion.div
                key={`lightbox-panel-${index}`}
                initial={{ scale: 0.88, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, type: 'spring', damping: 22 }}
                className="relative max-w-3xl w-[92vw] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Certificate image */}
                <div className="w-full rounded-[24px] overflow-hidden shadow-[0_0_80px_rgba(255,0,0,0.15)] border border-[var(--primary)]/20 bg-white">
                    <img
                        src={cert.src}
                        alt={`Full certificate: ${cert.title} — ${cert.org}`}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Meta strip */}
                <div className="mt-4 w-full glass-card px-6 py-4 rounded-[18px] border border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                        <h2 className="text-white font-bold league-spartan text-lg leading-snug">{cert.title}</h2>
                        <p className="text-white/50 poiret text-sm mt-0.5">{cert.org}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[var(--primary)] text-xs font-bold league-spartan uppercase tracking-widest bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/20">
                            {cert.date}
                        </span>
                    </div>
                </div>

                {/* Counter */}
                <div className="mt-3 bg-black/40 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/10 text-white/60 text-sm poiret">
                    {index + 1} / {total}
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 md:top-0 md:right-0 md:-translate-y-1/2 md:translate-x-1/2 w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:bg-[var(--primary-glow)] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,0,0,0.4)] z-[1103]"
                    aria-label="Close certificate viewer"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

// ---------------------------------------------------------------------------
// Main Section
// ---------------------------------------------------------------------------
const CertificatesSection = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const total = certificates.length;

    const openLightbox = useCallback((index) => setLightboxIndex(index), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const goPrev = useCallback(() => {
        setLightboxIndex((i) => (i - 1 + total) % total);
    }, [total]);

    const goNext = useCallback(() => {
        setLightboxIndex((i) => (i + 1) % total);
    }, [total]);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, closeLightbox, goNext, goPrev]);

    // Lock body scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    return (
        <section
            id="certificates-section"
            className="w-full py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden"
            aria-label="Certificates and Achievements"
        >
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold league-spartan text-white tracking-tighter uppercase mb-5">
                        Certificates &amp; <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="poiret text-lg md:text-xl text-white/50 max-w-2xl mx-auto italic leading-relaxed">
                        Professional qualifications, certifications, and achievements that reflect our commitment to expert fitness training.
                    </p>
                </motion.div>

                {/* ── Badge Strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {badges.map((b, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-white/10 hover:border-[var(--primary)]/30 transition-all duration-300 group"
                        >
                            <span className="text-base">{b.icon}</span>
                            <span className="league-spartan text-sm font-bold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">
                                {b.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* ── Certificate Grid ── */}
                <div className="cert-grid">
                    {certificates.map((cert, i) => (
                        <CertCard key={cert.id} cert={cert} index={i} onClick={openLightbox} />
                    ))}
                </div>
            </div>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        index={lightboxIndex}
                        onClose={closeLightbox}
                        onPrev={goPrev}
                        onNext={goNext}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificatesSection;

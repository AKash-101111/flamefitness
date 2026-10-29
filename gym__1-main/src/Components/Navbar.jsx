import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import JoinForm from "./JoinForm";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const whatsappUrl = "https://wa.me/919940530733?text=Hi!%20I'm%20interested%20in%20joining%20Flame%20Fitness%20Studio%20and%20would%20like%20to%20know%20more%20about%20the%20membership%20plans%20and%20available%20facilities.";
    const instagramUrl = "https://www.instagram.com/flamefitnessstudio_tnagar?igsh=b3JtdncxOTF5bmti";

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Programs", path: "/programs" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path) => path === '/' ? (location.pathname === '/' || location.pathname === '/home') : location.pathname === path;

    return (
        <>
            <nav
                className="
                w-[95%] h-16
                flex items-center px-4 sm:px-6
                rounded-2xl
                sticky top-3 z-50
                mx-auto
                bg-black/40
                backdrop-blur-md
                border border-white/10
                shadow-[0_4px_30px_rgba(0,0,0,0.5)]
            "
            >
                <Link to="/" className="flex items-center gap-3">
                    <img src="/images/flamelogo.svg" alt="Flame Fitness Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
                    <span
                        className="block text-white text-[10px] sm:text-sm md:text-base tracking-widest leading-none font-bold"
                        style={{
                            fontFamily: "'Handel Gothic', 'HandelGothic BT', sans-serif",
                            textShadow: "0 0 15px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)",
                            background: "linear-gradient(180deg, #FFFFFF 0%, #FF4D4D 50%, #B20000 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
                        }}
                    >
                        FLAME FITNESS STUDIO
                    </span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex ml-auto items-center gap-6 lg:gap-8 text-white/80 font-medium">
                    <ul className="flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative poiret text-lg lg:text-xl font-normal cursor-pointer transition-colors duration-300 group ${
                                        isActive(link.path) ? "text-[var(--primary)] font-bold" : "text-white/80 hover:text-[var(--primary)]"
                                    }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--primary)] transition-all duration-300 shadow-[0_0_8px_rgba(255,0,0,0.6)] ${
                                        isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Attractive Social Badges */}
                    <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#151515] border border-white/15 text-white/80 hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <FaWhatsapp size={17} />
                        </a>
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#151515] border border-white/15 text-white/80 hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <FaInstagram size={17} />
                        </a>
                    </div>

                    <Button onClick={() => setIsFormOpen(true)}>Join Now</Button>
                </div>

                {/* MOBILE SOCIAL ICONS & MENU TOGGLE */}
                <div className="ml-auto md:hidden flex items-center gap-2">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-[#151515] border border-white/15 text-white/80 hover:text-white hover:border-[var(--primary)] transition-all duration-300"
                    >
                        <FaWhatsapp size={15} />
                    </a>
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-[#151515] border border-white/15 text-white/80 hover:text-white hover:border-[var(--primary)] transition-all duration-300"
                    >
                        <FaInstagram size={15} />
                    </a>
                    <button
                        className="text-[var(--primary)] cursor-pointer p-1 ml-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            {/* ─────────────────────────────────────────────────────────────
                MOBILE FULLSCREEN MENU OVERLAY
                Kept OUTSIDE <nav> so the nav's stacking context doesn't
                clip the fixed overlay or offset its position.
            ───────────────────────────────────────────────────────────── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 w-full h-full bg-[#050505]/95 backdrop-blur-2xl z-[200] flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 text-[var(--primary)] cursor-pointer p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>

                        <ul className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`poiret text-4xl font-normal cursor-pointer transition-colors duration-300 ${
                                            isActive(link.path) ? "text-[var(--primary)]" : "text-white hover:text-[var(--primary)]"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex flex-col items-center gap-6"
                        >
                            <button
                                onClick={() => { setIsFormOpen(true); setIsMobileMenuOpen(false); }}
                                className="px-10 py-4 bg-[var(--primary)] text-[#050505] font-bold text-lg league-spartan uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all cursor-pointer"
                            >
                                Join Now
                            </button>

                            {/* Social Icons in Mobile Overlay */}
                            <div className="flex items-center gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#151515] border border-white/15 text-white hover:text-[var(--primary)] hover:border-[var(--primary)] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-95"
                                >
                                    <FaWhatsapp size={22} />
                                </a>
                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#151515] border border-white/15 text-white hover:text-[var(--primary)] hover:border-[var(--primary)] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-95"
                                >
                                    <FaInstagram size={22} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Join Form Modal */}
            <JoinForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
};

export default Navbar;
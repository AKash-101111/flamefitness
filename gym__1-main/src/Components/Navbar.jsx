import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import JoinForm from "./JoinForm";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

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
                flex items-center px-6
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
                            fontFamily: "'Michroma', sans-serif",
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
                <div className="hidden md:flex ml-auto mr-10 items-center gap-8 text-white/80 font-medium">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative poiret text-xl font-normal cursor-pointer transition-colors duration-300 group ${
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
                    <Button onClick={() => setIsFormOpen(true)}>Join Now</Button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="ml-auto md:hidden text-[var(--primary)] cursor-pointer p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
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
                            className="mt-10"
                        >
                            <button
                                onClick={() => { setIsFormOpen(true); setIsMobileMenuOpen(false); }}
                                className="px-10 py-4 bg-[var(--primary)] text-[#050505] font-bold text-lg league-spartan uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all cursor-pointer"
                            >
                                Join Now
                            </button>
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

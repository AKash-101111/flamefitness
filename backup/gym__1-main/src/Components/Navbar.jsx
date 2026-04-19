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

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav
                className="
                w-[95%] h-16 
                flex items-center px-6 
                rounded-2xl 
                sticky top-3 z-50 
                bg-white/10 
                backdrop-blur-md 
                border border-white/20 
                shadow-sm
            "
            >
                <Link to="/" className="flex items-center gap-2">
                    <img src="/images/logoflame.jpeg" alt="Flame Fitness Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex ml-auto mr-10 items-center gap-8 text-white/80 font-medium">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`transition poiret text-xl font-normal cursor-pointer hover:text-[#D82639] ${
                                        isActive(link.path) ? "text-[#D82639] font-bold" : "text-white/80"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={() => setIsFormOpen(true)}>Join Now</Button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="ml-auto md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* MOBILE MENU OVERLAY */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 md:hidden shadow-2xl"
                        >
                            <ul className="flex flex-col gap-4 text-white font-medium text-center">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`transition poiret text-2xl font-normal cursor-pointer hover:text-[#D82639] ${
                                                isActive(link.path) ? "text-[#D82639]" : "text-white"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-center">
                                <Button onClick={() => { setIsFormOpen(true); setIsMobileMenuOpen(false); }}>Join Now</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Join Form Modal */}
            <JoinForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
};

export default Navbar;

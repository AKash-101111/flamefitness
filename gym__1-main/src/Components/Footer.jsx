import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: "COMPANY",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" }
            ]
        },
        {
            title: "PROGRAMS",
            links: [
                { name: "Strength", path: "/programs" },
                { name: "Cardio", path: "/programs" },
                { name: "Nutrition", path: "/programs" },
                { name: "Wellness", path: "/programs" }
            ]
        },
        {
            title: "LEGAL",
            links: [
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" }
            ]
        },
        {
            title: "SUPPORT",
            links: [
                { name: "Help Center", path: "#" },
                { name: "FAQs", path: "#" },
                { name: "Community", path: "#" },
                { name: "Feedback", path: "#" }
            ]
        }
    ];

    const socialLinks = [
        { icon: <FaWhatsapp size={20} />, url: "#", label: "WhatsApp" },
        { icon: <FaInstagram size={20} />, url: "#", label: "Instagram" },
        { icon: <FaLinkedin size={20} />, url: "#", label: "LinkedIn" },
        { icon: <FaGithub size={20} />, url: "#", label: "GitHub" },
        { icon: <MdEmail size={20} />, url: "mailto:info@flamefitness.in", label: "Email" }
    ];

    return (
        <footer className="w-full rounded-t-[60px] md:rounded-t-[120px] relative overflow-hidden bg-[#050505] text-white pt-24 pb-12 border-t border-[#FFD700]/10 shadow-[0_-20px_100px_rgba(0,0,0,0.8)]">
            {/* Ambient gold glow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-[#FFD700]/10 blur-3xl opacity-30" />
            {/* Background Branding */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <span className="text-[35vw] font-black text-[#FFD700] whitespace-nowrap uppercase italic league-spartan">FLAME</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Center Logo Section */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <Link to="/" className="group">
                        <motion.img
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            src="/images/logoflame.jpeg"
                            alt="Flame Fitness Logo"
                            className="h-28 w-auto rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 group-hover:border-[#FFD700]/30 transition-all duration-300 mb-8"
                        />
                    </Link>
                    <p className="max-w-3xl text-lg md:text-xl leading-relaxed glass-card p-8 bg-white/[0.02] border-[#FFD700]/10 montserrat italic text-white/60">
                        "Elevate your strength and performance. Join <span className="text-[#FFD700] font-bold">Flame Fitness Studio</span> to transform your body, mind, and fitness journey with expert guidance."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-8">
                    {/* Visit Us Box */}
                    <div className="lg:col-span-1">
                        <div className="p-6 glass-card border border-[#FFD700]/10 bg-[#FFD700]/5 rounded-3xl group hover:border-[#FFD700]/40 transition-all duration-500">
                            <p className="text-xs font-black uppercase tracking-[0.3em] league-spartan mb-3 text-[#FFD700]">Location</p>
                            <p className="text-sm md:text-base montserrat leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">
                                No.1/1, 70 feet scheme emelem complex 1st floor<br />
                                Mahalingapuram, Nungambakkam,<br />
                                Chennai, India 600034
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-[#FFD700] text-sm font-bold league-spartan uppercase tracking-tighter cursor-pointer hover:gap-3 transition-all">
                                <span>Get Directions</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {sections.map((section, idx) => (
                        <div key={idx} className="flex flex-col">
                            <h3 className="text-white text-base font-black tracking-[0.25em] uppercase mb-10 league-spartan border-b border-[#FFD700]/20 pb-2 w-fit">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-5">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link 
                                            to={link.path} 
                                            className="text-white/40 hover:text-[#FFD700] transition-all duration-300 text-sm md:text-base poiret hover:pl-2"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom Line */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs md:text-sm tracking-widest montserrat text-white/30">
                        © {currentYear} <span className="text-[#FFD700] font-black">Flame Fitness Studio</span>. All Rights Reserved. Made with Passion 🇮🇳
                    </p>

                    {/* Social Circle Links */}
                    <div className="flex gap-5">
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.url}
                                whileHover={{ 
                                    scale: 1.15, 
                                    translateY: -8,
                                    boxShadow: '0 0 25px rgba(255, 215, 0, 0.4)' 
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-[#050505] transition-all duration-300 shadow-xl"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

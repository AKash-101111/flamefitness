import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        { icon: <FaWhatsapp size={18} />, url: "#" },
        { icon: <FaInstagram size={18} />, url: "#" },
        { icon: <FaLinkedin size={18} />, url: "#" },
        { icon: <FaGithub size={18} />, url: "#" },
        { icon: <MdEmail size={18} />, url: "mailto:mohamed.al.silmi05@gmail.com" }
    ];

    return (
        <footer className="w-full rounded-t-[40px] md:rounded-t-[100px] relative overflow-hidden bg-[#3F0E13] text-[#FBE5E3] pt-20 pb-10">
            {/* Background Branding */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-[25vw] font-bold text-[#9B101D] whitespace-nowrap uppercase">FLAME</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Center Logo Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <Link to="/">
                        <img
                            src="/images/logoflame.jpeg"
                            alt="Flame Fitness Logo"
                            className="h-24 w-auto rounded-xl hover:scale-105 transition-transform duration-300 mb-6"
                        />
                    </Link>
                    <p className="max-w-2xl text-base leading-relaxed backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 montserrat">
                        "Elevate your strength and performance. Join Flame Fitness Studio to transform your body, mind, and fitness journey with expert guidance."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Visit Us Box (Matching APEX Style) */}
                    <div className="lg:col-span-1">
                        <div className="p-5 backdrop-blur-md bg-[#D82639]/10 rounded-2xl border-l-4 border-[#D82639]">
                            <p className="text-xs font-bold uppercase tracking-widest league-spartan mb-2 text-[#D82639]">Visit Us</p>
                            <p className="text-sm montserrat leading-relaxed text-[#FBE5E3]/80">
                                No.1/1, 70 feet scheme emelem complex 1st floor<br />
                                Mahalingapuram, Nungambakkam,<br />
                                Chennai, India 600034
                            </p>
                        </div>
                    </div>

                    {/* Links Sections (Right) */}
                    {sections.map((section, idx) => (
                        <div key={idx} className="flex flex-col">
                            <h3 className="text-[#FBE5E3] text-sm font-bold tracking-[0.2em] uppercase mb-8 league-spartan">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link 
                                            to={link.path} 
                                            className="hover:text-[#D82639] transition-colors duration-300 text-sm montserrat"
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
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs tracking-wider montserrat text-[#FBE5E3]/60">
                        © {currentYear} <span className="text-white font-bold">Flame Fitness Studio</span>. All Rights Reserved. Made in India 🇮🇳
                    </p>

                    {/* Social Circle Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#FBE5E3] hover:bg-[#D82639] hover:border-[#D82639] hover:text-white transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

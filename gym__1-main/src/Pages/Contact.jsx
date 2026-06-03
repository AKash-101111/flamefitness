import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            e.target.reset(); // Reset form
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            value: "08042781333",
            subtitle: "Call us Mon-Sat"
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "info@flamefitness.in",
            subtitle: "We'll reply within 24h"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "T. Nagar, Chennai",
            subtitle: "No.1/1, 70 feet scheme"
        },
        {
            icon: <FaClock />,
            title: "Hours",
            value: "6 AM - 10 PM",
            subtitle: "Monday to Saturday"
        }
    ];

    return (
        <div className="w-full min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-6 tracking-tighter text-center uppercase">
                Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 poiret mb-16 text-center max-w-2xl mx-auto italic">
                Get in touch with us to start your transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-start">
                <div className="space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.05, translateY: -5 }}
                                className="p-8 glass-card border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-500 backdrop-blur-md group"
                            >
                                <div className="text-[var(--primary)] text-3xl mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] transition-all">
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white league-spartan uppercase tracking-widest mb-2">
                                    {info.title}
                                </h3>
                                {info.title === "Phone" ? (
                                    <a 
                                        href={`tel:${info.value.replace(/\s+/g, '')}`}
                                        className="text-lg text-white/90 montserrat mb-1 hover:text-[var(--primary)] hover:underline transition-all cursor-pointer block"
                                    >
                                        {info.value}
                                    </a>
                                ) : info.title === "Email" ? (
                                    <a 
                                        href={`mailto:${info.value}`}
                                        className="text-lg text-white/90 montserrat mb-1 hover:text-[var(--primary)] hover:underline transition-all cursor-pointer block"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-lg text-white/90 montserrat mb-1">
                                        {info.value}
                                    </p>
                                )}
                                <p className="text-sm text-white/40 poiret">
                                    {info.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-full h-80 rounded-[50px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative group primary-border-hover">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.814343825838!2d80.23122177507775!3d13.047466587275217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665e88410001%3A0x6734614611461146!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713430000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 pointer-events-none border-[10px] border-white/5 rounded-[50px]"></div>
                    </div>
                </div>

                <div className="relative group p-10 glass-card border border-white/10 rounded-[60px] shadow-2xl overflow-hidden primary-border-hover">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-3xl font-bold text-white league-spartan mb-8 text-center uppercase tracking-widest">
                        Send a <span className="text-[var(--primary)]">Message</span>
                    </h2>

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center py-20 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6 primary-pulse">
                                    <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold league-spartan text-[var(--primary)] uppercase">Success!</h3>
                                <p className="poiret text-white/70 mt-2">We've received your message. Our team will get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <motion.form 
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit} 
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <input type="text" required placeholder="Your Name" className="w-full px-8 py-5 rounded-full input-primary montserrat" />
                                    <input type="email" required placeholder="Your Email" className="w-full px-8 py-5 rounded-full input-primary montserrat" />
                                </div>
                                <input type="tel" required placeholder="Phone Number" className="w-full px-8 py-5 rounded-full input-primary montserrat" />
                                <textarea rows="5" required placeholder="Your Message" className="w-full px-8 py-5 rounded-[40px] input-primary montserrat resize-none"></textarea>
                                <button 
                                    className="w-full py-5 bg-[var(--primary)] text-[#050505] font-black rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,0,0,0.3)] league-spartan uppercase tracking-widest cursor-pointer"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <span className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </span>
                                    ) : "Send Message"}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Contact;

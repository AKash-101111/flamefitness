import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Construct formatted WhatsApp message
        const messageText = 
            `*New Enquiry - Flame Fitness Studio*\n\n` +
            `👤 *Name:* ${formData.name.trim()}\n` +
            `📧 *Email:* ${formData.email.trim()}\n` +
            `📱 *Phone:* ${formData.phone.trim()}\n` +
            `💬 *Enquiry:* ${formData.message.trim()}`;

        const whatsappUrl = `https://wa.me/919940530733?text=${encodeURIComponent(messageText)}`;

        setTimeout(() => {
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setTimeout(() => setStatus('idle'), 6000);
        }, 800);
    };

    const contactInfo = [
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            value: "+91 99405 30733",
            subtitle: "Call or WhatsApp Mon-Sat",
            href: "tel:+919940530733"
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "Flamefitnessstudio@gmail.com",
            subtitle: "We'll reply within 24h",
            href: "mailto:Flamefitnessstudio@gmail.com"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "14, N Usman Rd, Darmapuram, T. Nagar, Chennai, Tamil Nadu 600017",
            subtitle: "Click for Google Maps",
            href: "https://www.google.com/search?sca_esv=b1ed0be76243ea24&sxsrf=APpeQns67M5oOlhbV3TS64SqV4z8BZQaVQ:1791429647060&q=flame+fitness+studio+address&ludocid=792837066430244050&sa=X&ved=2ahUKEwiR1YK-u6mXAxU8UGwGHRowLYsQ6BN6BAguEAI"
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
                                whileHover={{ scale: 1.03, translateY: -5 }}
                                className="p-8 glass-card border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-500 backdrop-blur-md group"
                            >
                                <div className="text-[var(--primary)] text-3xl mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] transition-all">
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white league-spartan uppercase tracking-widest mb-2">
                                    {info.title}
                                </h3>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-base sm:text-lg text-white/90 montserrat mb-1 hover:text-[var(--primary)] hover:underline transition-all cursor-pointer block leading-relaxed break-words"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-base sm:text-lg text-white/90 montserrat mb-1 leading-relaxed">
                                        {info.value}
                                    </p>
                                )}
                                <p className="text-sm text-white/40 poiret mt-1">
                                    {info.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-full h-80 rounded-[50px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative group primary-border-hover">
                        <iframe
                            src="https://maps.google.com/maps?q=Flame+Fitness+Studio+14+N+Usman+Rd+Darmapuram+T+Nagar+Chennai+Tamil+Nadu+600017&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                            title="Flame Fitness Studio Location Map"
                        />
                        <div className="absolute inset-0 pointer-events-none border-[10px] border-white/5 rounded-[50px]"></div>
                    </div>
                </div>

                <div className="relative group p-8 sm:p-10 glass-card border border-white/10 rounded-[60px] shadow-2xl overflow-hidden primary-border-hover">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-3xl font-bold text-white league-spartan mb-8 text-center uppercase tracking-widest">
                        <span className="text-[var(--primary)]">ENQUIRY</span>
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
                                <h3 className="text-2xl font-bold league-spartan text-[var(--primary)] uppercase">Enquiry Sent!</h3>
                                <p className="poiret text-white/70 mt-2 max-w-sm">
                                    WhatsApp is opened with your enquiry. Our team will get back to you shortly.
                                </p>
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
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        placeholder="Your Name" 
                                        className="w-full px-8 py-5 rounded-full input-primary montserrat" 
                                    />
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        placeholder="Your Email" 
                                        className="w-full px-8 py-5 rounded-full input-primary montserrat" 
                                    />
                                </div>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                    placeholder="Phone Number" 
                                    className="w-full px-8 py-5 rounded-full input-primary montserrat" 
                                />
                                <textarea 
                                    rows="5" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    placeholder="Your Enquiry" 
                                    className="w-full px-8 py-5 rounded-[40px] input-primary montserrat resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-[var(--primary)] text-[#050505] font-black rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,0,0,0.3)] league-spartan uppercase tracking-widest cursor-pointer flex items-center justify-center gap-3"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <span className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin" />
                                            Opening WhatsApp...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <FaWhatsapp size={22} />
                                            Send Enquiry
                                        </span>
                                    )}
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

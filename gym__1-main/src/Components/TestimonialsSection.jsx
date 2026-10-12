import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaExternalLinkAlt } from 'react-icons/fa';

// Google Reviews URL from environment variable with fallback
const GOOGLE_REVIEWS_URL =
    import.meta.env.VITE_GOOGLE_REVIEW ||
    "https://www.google.com/search?q=flame+fitness+studio#lrd=0x3a52665b761f9173:0xb00b91c7d5664d2,1,,,,";

// Real Google Reviews from Flame Fitness Studio (T. Nagar, Chennai)
const testimonials = [
    {
        name: "Sujith Rajendiran",
        role: "Flame Member • Guided by Trainer Kumar",
        time: "2 months ago",
        content: "I've had a great experience at Flame Fitness Studio, T. Nagar. The gym is clean, well-maintained, and has all the essential equipment for strength training and cardio. The atmosphere is motivating, and it's suitable for both beginners and experienced gym-goers. Special thanks to Mr. Kumar for his guidance and encouragement throughout my fitness journey.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Sujith+Rajendiran&background=FF0000&color=fff&bold=true"
    },
    {
        name: "G Sirisha",
        role: "Flame Member • Strength & Cardio",
        time: "6 months ago",
        content: "I recently joined this new gym and I'm thoroughly impressed. The facility is spotless and very well maintained, with modern equipment that's in excellent condition. The layout is spacious, making workouts comfortable without feeling cramped.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=G+Sirisha&background=111111&color=FF0000&bold=true"
    },
    {
        name: "Dhanushpriya Thirugnanam",
        role: "Flame Member • Fitness & Consistency",
        time: "9 months ago",
        content: "I've had a great experience at this gym. The environment is clean, well-maintained, with good equipment for all kinds of workouts. It's a place that really pushes you to stay consistent and focused on your fitness goals.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Dhanushpriya+T&background=FF0000&color=fff&bold=true"
    },
    {
        name: "Shafeeqa Simra",
        role: "Transformation • Guided by Vijay Master",
        time: "10 months ago",
        content: "Vijay master has taught techniques on how to work out independently, very knowledgeable with diet plans and nutrition. Have transformed and gained 10kgs; where the market only targets weight loss, weight gaining knowledge also is given.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Shafeeqa+Simra&background=111111&color=FF0000&bold=true"
    },
    {
        name: "Barathan",
        role: "Flame Member • Guided by Trainer Kumar",
        time: "1 year ago",
        content: "The gym has a great atmosphere, and Mr. Kumar, the friendly trainer, always guides me in the right way. His expertise makes every workout effective. Highly recommend this gym to anyone looking for a great training experience!",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Barathan&background=FF0000&color=fff&bold=true"
    },
    {
        name: "SUDHARSAN. R",
        role: "Flame Member • Guided by Trainer Kumar",
        time: "1 year ago",
        content: "Flame Fitness Studio is a top-notch gym with great facilities and a motivating atmosphere. Kumar is an excellent trainer who customizes workouts, ensures proper form, and keeps you motivated. Thanks to his guidance, I've made great progress. Highly recommend!",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Sudharsan+R&background=111111&color=FF0000&bold=true"
    },
    {
        name: "Yamini Ravishankaran",
        role: "Flame Member • Guided by Trainer Balu",
        time: "1 year ago",
        content: "Flame Fitness is unequivocally the top gym in T. Nagar. My trainer, Mr. Balu, is outstandingly professional. He continuously monitors my diet and provides invaluable advice. He ensures he is fully available to his clients throughout every session.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Yamini+R&background=FF0000&color=fff&bold=true"
    },
    {
        name: "K SETHURAMAN",
        role: "Flame Member • T. Nagar Community",
        time: "6 months ago",
        content: "First of all I stepped up into this gym with nervousness, but the environment changed that and made me feel like family. In my experience this gym is the worthiest of all in T. Nagar, with exceptional trainer support and positive energy.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=K+Sethuraman&background=111111&color=FF0000&bold=true"
    },
    {
        name: "Sankari Thiru",
        role: "Flame Member • Guided by Trainer Vijay",
        time: "1 year ago",
        content: "Flame Fitness Studio is a great gym. Mr. Vijay, undoubtedly the best trainer, ignited my fitness journey with his infectious enthusiasm and unwavering support. His ability to create a fun, motivating workout routine is unmatched.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Sankari+Thiru&background=FF0000&color=fff&bold=true"
    },
    {
        name: "Rahul Srinivasan",
        role: "Flame Member • Elite Training",
        time: "1 year ago",
        content: "Great gym with excellent training and atmosphere. The trainers and equipment make it the best place to train in Chennai. Clean, modern, and highly motivating.",
        stars: 5,
        image: "https://ui-avatars.com/api/?name=Rahul+Srinivasan&background=111111&color=FF0000&bold=true"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="w-full py-20 md:py-28 overflow-hidden bg-transparent relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="container mx-auto px-4 mb-12 text-center">
                <span className="mb-2 block text-xs sm:text-sm font-bold text-[var(--primary)] uppercase tracking-widest">
                    Real Stories. Real Results.
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-3">
                    Member <span className="gradient-text">Voices</span>
                </h2>
                <p className="poiret text-base sm:text-lg text-white/60 max-w-xl mx-auto italic">
                    Real Google Reviews from the Flame Fitness Studio community in T. Nagar.
                </p>

                {/* Google Reviews View Link Button */}
                <div className="mt-6 flex justify-center">
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-[var(--primary)]/30 hover:border-[var(--primary)] text-white hover:text-[var(--primary)] transition-all duration-300 text-xs sm:text-sm font-semibold tracking-wider shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,0,0,0.35)] cursor-pointer"
                    >
                        <FaGoogle className="text-[var(--primary)] text-sm group-hover:rotate-12 transition-transform" />
                        <span className="flex text-amber-400 text-xs">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="inline fill-current" />
                            ))}
                        </span>
                        <span className="text-white/80 group-hover:text-white font-medium">4.9 / 5 Rating</span>
                        <span className="text-[var(--primary)] text-xs font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            View All Reviews <FaExternalLinkAlt className="text-[10px]" />
                        </span>
                    </a>
                </div>
            </div>

            {/* Testimonials Marquee Track */}
            <div className="relative flex overflow-hidden">
                <div className="flex testimonial-track gap-6 py-6 px-4">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[390px] glass-card p-6 sm:p-7 primary-border-hover transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3.5 mb-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="w-12 h-12 rounded-full border border-[var(--primary)]/40 object-cover shadow-[0_0_10px_rgba(255,0,0,0.2)]"
                                    />
                                    <div>
                                        <h4 className="text-white font-bold text-sm sm:text-base tracking-wide">{item.name}</h4>
                                        <p className="text-[var(--primary)] poiret text-[11px] tracking-wider uppercase font-semibold">{item.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`w-3.5 h-3.5 ${i < item.stars ? 'text-[var(--primary)] drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]' : 'text-white/20'}`}
                                        />
                                    ))}
                                </div>
                                <p className="montserrat text-white/75 text-xs sm:text-sm leading-relaxed italic">
                                    "{item.content}"
                                </p>
                            </div>

                            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40">
                                <span className="text-[var(--primary)]/80 font-medium">Verified Google Review</span>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

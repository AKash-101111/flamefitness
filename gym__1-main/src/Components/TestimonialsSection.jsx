import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Pro Athlete",
        content: "Flame Fitness has completely transformed my approach to training. The luxury atmosphere and elite equipment make every session count.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=rahul"
    },
    {
        name: "Priya Das",
        role: "Fitness Enthusiast",
        content: "The trainers here are world-class. I've never felt more motivated to hit my goals. The elite standard of gyms in Chennai!",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=priya"
    },
    {
        name: "Vikram Mehta",
        role: "Corporate Professional",
        content: "The flexible hours and top-notch facilities are perfect for my busy schedule. It truly feels like a premium experience.",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=vikram"
    },
    {
        name: "Ananya Iyer",
        role: "Yoga Practitioner",
        content: "The yoga sessions are serene and effective. The environment is always clean and welcoming. Highly recommended!",
        stars: 4,
        image: "https://i.pravatar.cc/150?u=ananya"
    },
    {
        name: "Suresh Kumar",
        role: "Weightlifter",
        content: "Best heavy lifting equipment I've seen. The staff is knowledgeable and the community is great. Pure fire!",
        stars: 5,
        image: "https://i.pravatar.cc/150?u=suresh"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="w-full py-24 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold league-spartan text-white tracking-tighter uppercase mb-4">
                    Member <span className="gradient-text">Voices</span>
                </h2>
                <p className="poiret text-xl text-white/50 italic">The elite community of Flame Fitness Studio.</p>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="flex testimonial-track gap-8 py-10 px-4">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] glass-card p-8 primary-border-hover transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full border border-[var(--primary)]/30" />
                                <div>
                                    <h4 className="text-white font-bold league-spartan text-xl">{item.name}</h4>
                                    <p className="text-[var(--primary)] poiret text-sm">{item.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`w-5 h-5 ${i < item.stars ? 'star-primary' : 'text-white/20'}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="montserrat text-white/70 italic leading-relaxed">"{item.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

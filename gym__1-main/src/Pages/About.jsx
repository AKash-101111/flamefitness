import React from 'react';

const About = () => {
    return (
        <div className="w-full min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-12 tracking-tighter text-center uppercase">
                Our <span className="gradient-text">Story</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-white/90 poiret leading-relaxed">
                        FLAME FITNESS STUDIO is the brain child of fitness professionals who have been in this industry for over 10 years.
                        Started in <span className="text-[var(--primary)] font-bold">July 2010</span>, we offer one of the best gym facilities, aerobics and dance classes in Chennai.
                    </p>
                    <p className="text-lg text-white/70 montserrat leading-relaxed">
                        Our studio is set up over <span className="text-white font-bold">6000 sq ft</span> of area with a spacious
                        <span className="text-white font-bold"> 3000 sq ft</span> gymnasium housing world-class equipment ranging from cardio to strength training machines.
                    </p>
                    <div className="p-8 glass-card border border-[var(--primary)]/10 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-[var(--primary)]/30 transition-all duration-500">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)] opacity-50"></div>
                        <h3 className="text-[var(--primary)] text-xl font-black league-spartan mb-3 uppercase tracking-[0.2em]">Our Philosophy</h3>
                        <p className="text-white/80 montserrat italic leading-relaxed text-lg">
                            "To provide a high-energy environment where fitness meets fun. We believe that sweating out your stress should be a rocking experience."
                        </p>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-3xl border border-white/10 primary-border-hover shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
                        alt="Gym Interior"
                        loading="lazy"
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>

            <div className="mt-24 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="p-10 glass-card border border-white/10 rounded-[40px] hover:border-[var(--primary)]/50 transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] hover:-translate-y-2">
                    <h4 className="text-5xl font-black text-[var(--primary)] league-spartan mb-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">10+</h4>
                    <p className="text-white/40 poiret uppercase tracking-[0.3em] text-sm group-hover:text-white/70 transition-colors">Years Experience</p>
                </div>
                <div className="p-10 glass-card border border-white/10 rounded-[40px] hover:border-[var(--primary)]/50 transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] hover:-translate-y-2">
                    <h4 className="text-5xl font-black text-[var(--primary)] league-spartan mb-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">6000</h4>
                    <p className="text-white/40 poiret uppercase tracking-[0.3em] text-sm group-hover:text-white/70 transition-colors">Square Feet</p>
                </div>
                <div className="p-10 glass-card border border-white/10 rounded-[40px] hover:border-[var(--primary)]/50 transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] hover:-translate-y-2">
                    <h4 className="text-5xl font-black text-[var(--primary)] league-spartan mb-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">500+</h4>
                    <p className="text-white/40 poiret uppercase tracking-[0.3em] text-sm group-hover:text-white/70 transition-colors">Happy Members</p>
                </div>
            </div>
        </div>
    );
};

export default About;

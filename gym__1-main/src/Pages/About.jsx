import React from 'react';

const About = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-12 tracking-tighter text-center">
                Our <span className="gradient-text">Story</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-white/90 poiret leading-relaxed">
                        FLAME FITNESS STUDIO is the brain child of fitness professionals who have been in this industry for over 10 years. 
                        Started in <span className="text-[#D82639] font-bold">July 2010</span>, we offer one of the best gym facilities, aerobics and dance classes in Chennai.
                    </p>
                    <p className="text-lg text-white/70 montserrat leading-relaxed">
                        Our studio is set up over <span className="text-white font-bold">6000 sq ft</span> of area with a spacious 
                        <span className="text-white font-bold"> 3000 sq ft</span> gymnasium housing world-class equipment ranging from cardio to strength training machines.
                    </p>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                        <h3 className="text-[#D82639] text-xl font-bold league-spartan mb-3 uppercase tracking-wider">Our Philosophy</h3>
                        <p className="text-white/80 montserrat italic leading-relaxed">
                            "To provide a high-energy environment where fitness meets fun. We believe that sweating out your stress should be a rocking experience."
                        </p>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-3xl border border-white/20">
                    <img 
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
                        alt="Gym Interior" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3F0E13] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>

            <div className="mt-20 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-[#D82639]/50 transition-colors">
                    <h4 className="text-4xl font-bold text-[#D82639] league-spartan mb-2">10+</h4>
                    <p className="text-white/60 poiret uppercase tracking-widest text-sm">Years Experience</p>
                </div>
                <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-[#D82639]/50 transition-colors">
                    <h4 className="text-4xl font-bold text-[#D82639] league-spartan mb-2">6000</h4>
                    <p className="text-white/60 poiret uppercase tracking-widest text-sm">Square Feet</p>
                </div>
                <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-[#D82639]/50 transition-colors">
                    <h4 className="text-4xl font-bold text-[#D82639] league-spartan mb-2">500+</h4>
                    <p className="text-white/60 poiret uppercase tracking-widest text-sm">Happy Members</p>
                </div>
            </div>
        </div>
    );
};

export default About;

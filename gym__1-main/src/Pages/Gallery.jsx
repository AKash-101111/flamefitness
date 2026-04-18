import React from 'react';
import CircularGallery from '../Components/CircularGallery'

const Gallery = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-6 tracking-tighter text-center uppercase">
                Studio <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 poiret mb-16 text-center max-w-2xl mx-auto italic">
                A breeze and rocking environment to sweat out your stress.
            </p>

            <div className="w-full h-[70vh] rounded-[80px] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md">
                <CircularGallery />
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div 
                        key={i}
                        className="group relative h-64 md:h-80 rounded-[40px] overflow-hidden border border-white/10 hover:border-[#D82639]/50 transition-all duration-700"
                    >
                        <img 
                            src={`https://images.unsplash.com/photo-${1517836357463 - i*1000}?auto=format&fit=crop&q=80&w=500`} 
                            alt={`Gallery ${i}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3F0E13]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

import React, { useState, useEffect } from 'react';
import CircularGallery from '../Components/CircularGallery'
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000"
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (img, index) => {
        setSelectedImage(img);
        setCurrentIndex(index);
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        const nextIdx = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIdx]);
        setCurrentIndex(nextIdx);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[prevIdx]);
        setCurrentIndex(prevIdx);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex]);

    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-6 tracking-tighter text-center uppercase">
                Studio <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 poiret mb-16 text-center max-w-2xl mx-auto italic">
                A breeze and rocking environment to sweat out your stress.
            </p>

            <div className="w-full h-[70vh] rounded-[80px] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md mb-24">
                <CircularGallery />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {galleryImages.map((img, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openLightbox(img, i)}
                        className="group relative h-64 md:h-80 rounded-[40px] overflow-hidden border border-white/10 hover:border-[#FFD700]/50 transition-all duration-700 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
                    >
                        <img 
                            src={img} 
                            alt={`Gallery ${i}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <span className="bg-[#FFD700] text-[#050505] font-black px-6 py-2 rounded-full text-xs league-spartan uppercase tracking-widest shadow-[0_0_15px_rgba(255,215,0,0.4)]">View Full</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="modal-overlay p-4 z-[1000]"
                    >
                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevImage}
                            className="absolute left-8 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#FFD700] hover:bg-white/10 transition-all cursor-pointer z-[1001] hidden md:flex"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                        </button>

                        <button 
                            onClick={nextImage}
                            className="absolute right-8 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#FFD700] hover:bg-white/10 transition-all cursor-pointer z-[1001] hidden md:flex"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full h-[85vh] flex items-center justify-center p-2 rounded-[40px] overflow-hidden bg-black/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage} 
                                alt="Gallery Preview" 
                                className="w-full h-full object-contain rounded-3xl"
                            />
                            
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-[#FFD700]/30 flex items-center justify-center text-white hover:text-[#FFD700] transition-all cursor-pointer z-[1002]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white/60 text-sm poiret">
                                {currentIndex + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;

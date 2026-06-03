import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        video: "/videos/video-1.mp4",
        poster: "/images/bg.jpeg",
        title: "Run Beyond Limits",
        line: "Push past the burn. Chase the version of you that doesn’t stop.",
    },
    {
        video: "/videos/video-2.mp4",
        poster: "/images/bg.jpeg",
        title: "Build Relentless Strength",
        line: "Every rep forges power. Every set shapes greatness.",
    },
    {
        video: "/videos/video-3.mp4",
        poster: "/images/bg.jpeg",
        title: "Unleash the Warrior Within",
        line: "Let the ropes shake, not your resolve. This is where power awakens.",
    },
];

export default function CustomCarousel() {
    const [index, setIndex] = useState(0);
    
    // Create refs for the video elements to control playback and optimize performance
    const videoRef0 = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRefs = [videoRef0, videoRef1, videoRef2];

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    // Control video playback based on active index to reduce re-renders and save resources
    useEffect(() => {
        videoRefs.forEach((ref, i) => {
            if (ref.current) {
                if (i === index) {
                    ref.current.play().catch((err) => {
                        console.log(`Video ${i} play failed:`, err);
                    });
                } else {
                    ref.current.pause();
                }
            }
        });
    }, [index]);

    const prevSlide = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
    const nextSlide = () => setIndex((index + 1) % slides.length);

    return (
        <div className="flex w-full md:w-[95%] h-[50vh] md:h-[90vh] justify-center bg-[#1a1a1ab0] md:rounded-4xl mb-6 overflow-hidden">
            <div className="relative w-full h-full overflow-hidden md:rounded-3xl shadow-lg select-none">

                {/* VIDEO SLIDES */}
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="w-full h-full shrink-0 relative">
                            <video
                                ref={videoRefs[i]}
                                className="w-full h-full object-cover"
                                style={{ filter: 'hue-rotate(-20deg) contrast(1.1)', objectFit: 'cover' }}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload={i === 0 ? "auto" : "metadata"}
                                poster={slide.poster}
                                aria-hidden="true"
                            >
                                <source src={slide.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* OVERLAY */}
                            <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-[20vh] p-6 md:p-8 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white league-spartan mb-2">
                                    {slide.title}
                                </h1>
                                <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl poiret leading-tight">
                                    {slide.line}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LEFT ARROW */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all"
                >
                    <ChevronRight size={24} />
                </button>

                {/* INDICATORS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${index === i ? "w-10 bg-[var(--primary)] shadow-[0_0_15px_rgba(255,0,0,0.6)]" : "w-6 bg-white/30 hover:bg-white/50"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}


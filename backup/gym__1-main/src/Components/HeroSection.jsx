import React, { useRef } from 'react';
import landingBg from '/images/landing-bg-new.png'
import Bg from '/images/bg.jpeg'
import BarbellModel from './Barbell3D';
import { Canvas } from "@react-three/fiber";


const HeroSection = () => {
    const containerRef = useRef(null);

    return (
        <div
            className='flex flex-col md:flex-row justify-between items-center px-6 md:px-12 w-[95%] min-h-[85vh] py-12 md:py-0 bg-[#1a1a1ab0] rounded-4xl mb-6 mt-6 opacity-90'
            style={{
                backgroundImage: `url(${landingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'hue-rotate(-45deg) contrast(1.2) brightness(1.0)'
            }}
            ref={containerRef}
        >
            {/* LEFT SIDE — Text */}
            <div className="flex flex-col text-center md:text-left mb-10 md:mb-0 z-10">
                <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter uppercase leading-tight md:leading-8'>
                    Unleash Your<br />
                    <span className='text-6xl md:text-9xl gradient-text'>Beast!</span>
                </h1>

                <span className='poiret text-lg md:text-2xl text-white mt-4 md:-mt-5 leading-normal md:leading-none max-w-md md:max-w-none mx-auto md:mx-0'>
                    From beginner to beast
                    <span className='league-spartan font-bold italic'> FLAME</span>
                    <br className="hidden md:block" /> empowers every step of your fitness journey.
                </span>
            </div>

            {/* RIGHT SIDE — 3D Model */}
            <div className="h-[300px] w-full md:h-[400px] md:w-[400px]">
                <Canvas camera={{ position: [0, 1, 5], fov: 55 }} className='w-full h-full flex items-center justify-center'>
                    <ambientLight intensity={4} />
                    <directionalLight position={[5, 5, 5]} intensity={3} />
                    <BarbellModel />
                </Canvas>
            </div>
        </div>
    )
}

export default HeroSection
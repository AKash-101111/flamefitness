import React, { useRef } from 'react';
import CustomCarousel from './Carousel'
import Navbar from './Navbar'
import DarkVeil from './DarkVeil'
import VariableProximity from './heroTextAnimation'
import BarbellModel from './Barbell3D';
import { Canvas } from "@react-three/fiber";
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import PricingSection from './PricingSection';
import Footer from './Footer';


const LandingPage = () => {

    return (
        <div className='relative flex flex-col items-center w-full overflow-x-hidden'>
            <div className="fixed w-full h-screen overflow-hidden -z-20">
                <DarkVeil />
            </div>

            <Navbar />
            <HeroSection />
            <CustomCarousel />
            <ServicesSection />
            <PricingSection />
            <Footer />
        </div>
    )
}

export default LandingPage

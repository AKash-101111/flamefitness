import React from 'react';
import CustomCarousel from '../Components/Carousel'
import HeroSection from '../Components/HeroSection';
import ServicesSection from '../Components/ServicesSection';
import PricingSection from '../Components/PricingSection';

const Home = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <HeroSection />
            <CustomCarousel />
            <ServicesSection />
            <PricingSection />
        </div>
    )
}

export default Home;

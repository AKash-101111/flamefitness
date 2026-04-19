import React from 'react';
import CustomCarousel from '../Components/Carousel'
import HeroSection from '../Components/HeroSection';
import ServicesSection from '../Components/ServicesSection';
import PricingSection from '../Components/PricingSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import FeedbackSection from '../Components/FeedbackSection';

const Home = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <HeroSection />
            <CustomCarousel />
            <ServicesSection />
            <PricingSection />
            <TestimonialsSection />
            <FeedbackSection />
        </div>
    )
}

export default Home;

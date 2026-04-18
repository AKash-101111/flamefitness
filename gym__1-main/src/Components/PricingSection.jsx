import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import JoinForm from "./JoinForm";

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
    const toggleRef = useRef(null);
    const sliderRef = useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);


    useEffect(() => {
        if (!sliderRef.current || !toggleRef.current) return;
        const toggleWidth = toggleRef.current.offsetWidth / 2;
        gsap.to(sliderRef.current, {
            x: billingCycle === 'yearly' ? toggleWidth : 0,
            duration: 0.4,
            ease: "power2.out"
        });
    }, [billingCycle]);



    return (
        <section className="relative z-10 overflow-hidden pb-16 pt-20 lg:pb-[120px] lg:pt-[140px] bg-transparent">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="mb-2 block text-lg font-bold text-[#D82639] uppercase tracking-wider league-spartan">
                        Membership Plans
                    </span>
                    <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white leading-tight montserrat">
                        Unleash Your Ultimate Power
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto poiret px-4">
                        Choose the perfect plan to fuel your fitness journey and dominate your goals.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-8 flex justify-center">
                        <div
                            ref={toggleRef}
                            className="relative bg-white/10 backdrop-blur-md rounded-full px-2 py-2 w-[280px] flex items-center cursor-pointer"
                        >
                            {/* Sliding background */}
                            <div
                                ref={sliderRef}
                                className="absolute top-1 left-1 w-1/2 h-[calc(100%-0.5rem)] bg-[#D82639] rounded-full z-0"
                            />

                            {/* Monthly Button */}
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`relative w-1/2 text-center py-2 font-semibold transition-all duration-300 z-10 ${billingCycle === 'monthly' ? 'text-white' : 'text-white/70'
                                    }`}
                            >
                                Monthly
                            </button>

                            {/* Yearly Button */}
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`relative w-1/2 text-center py-2 font-semibold transition-all duration-300 z-10 ${billingCycle === 'yearly' ? 'text-white' : 'text-white/70'
                                    }`}
                            >
                                Yearly <span className="text-green-400 text-sm ml-1">Save 20%</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    <PricingCard
                        type="Basic"
                        price={billingCycle === 'monthly' ? "₹4,999" : "₹3,999"}
                        originalPrice={billingCycle === 'monthly' ? null : "₹4,999"}
                        subscription={billingCycle === 'monthly' ? "month" : "month"}
                        billingCycle={billingCycle}
                        description="Start your fitness journey with essential access."
                        buttonText="Get Started"
                        onJoinClick={() => setIsFormOpen(true)} // Open modal
                    >


                        <List>Access to gym floor</List>
                        <List>Basic equipment usage</List>
                        <List>Locker room access</List>
                        <List>Free Wi-Fi</List>
                    </PricingCard>

                    <PricingCard
                        type="Standard"
                        price={billingCycle === 'monthly' ? "₹8,999" : "₹7,199"}
                        originalPrice={billingCycle === 'monthly' ? null : "₹8,999"}
                        subscription={billingCycle === 'monthly' ? "month" : "month"}
                        billingCycle={billingCycle}
                        description="For serious athletes seeking more features."
                        buttonText="Join Now"
                        active
                        onJoinClick={() => setIsFormOpen(true)} // Open modal

                    >
                        <List>All Basic features</List>
                        <List>Group fitness classes</List>
                        <List>Cardio theater</List>
                        <List>Premium equipment</List>
                        <List>1 Free personal training session</List>
                        <List>24/7 access</List>
                    </PricingCard>

                    <PricingCard
                        type="Premium"
                        price={billingCycle === 'monthly' ? "₹14,999" : "₹11,999"}
                        originalPrice={billingCycle === 'monthly' ? null : "₹14,999"}
                        subscription={billingCycle === 'monthly' ? "month" : "month"}
                        billingCycle={billingCycle}
                        description="Ultimate experience with all premium amenities."
                        buttonText="Go Premium"
                        onJoinClick={() => setIsFormOpen(true)} // Open modal

                    >
                        <List>All Standard features</List>
                        <List>Unlimited personal training</List>
                        <List>Priority class booking</List>
                        <List>Nutrition planning</List>
                        <List>Spa & recovery area</List>
                        <List>Supplement discounts</List>
                        <List>Dedicated locker</List>
                    </PricingCard>
                    <JoinForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />


                </div>
            </div>
        </section>
    );
};

export default PricingSection;

const PricingCard = ({
    children,
    description,
    price,
    originalPrice,
    type,
    subscription,
    buttonText,
    active,
    billingCycle,
    onJoinClick
}) => {
    return (
        <div className="w-full sm:w-80 md:w-96 px-2">
            <div className={`relative z-10 mb-10 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-6 py-8 sm:p-8 transition-transform duration-300 hover:scale-105 ${active ? 'border-[#D82639] shadow-2xl' : ''}`}>
                {active && (
                    <div className="absolute top-0 right-0 bg-[#D82639] text-white px-4 py-1 text-sm font-bold rounded-bl-lg league-spartan">
                        MOST POPULAR
                    </div>
                )}

                <span className="mb-3 block text-lg font-bold text-[#D82639] uppercase league-spartan">{type}</span>

                <div className="mb-5">
                    <h2 className="text-3xl font-extrabold text-white montserrat">
                        {price}
                        <span className="text-base font-medium text-white/70"> / {subscription}</span>
                    </h2>
                    {originalPrice && billingCycle === 'yearly' && (
                        <p className="text-sm text-white/50 line-through mt-1 poiret">
                            ₹{Math.round(parseInt(originalPrice.replace(/[^0-9]/g, '')) * 12 * 0.8).toLocaleString('en-IN')} billed annually
                        </p>
                    )}
                </div>

                <p className="mb-6 text-white/70 poiret">{description}</p>

                <div className="mb-6 flex flex-col gap-3">{children}</div>

                <button className={`w-full rounded-full py-3 text-lg font-bold transition-all duration-300 ${active ? "bg-[#D82639] text-white hover:opacity-90" : "border border-white/30 text-[#D82639] hover:bg-[#D82639] hover:text-white"}`}
                    onClick={onJoinClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

const List = ({ children }) => (
    <div className="flex items-center gap-3">
        <svg className="h-5 w-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <p className="text-white/70 poiret">{children}</p>
    </div>
);

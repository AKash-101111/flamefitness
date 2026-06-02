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
        <section id="membership-plans" className="relative z-10 overflow-hidden pb-16 pt-20 lg:pb-[120px] lg:pt-[140px] bg-transparent">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="mb-2 block text-lg font-bold text-[var(--primary)] uppercase tracking-widest league-spartan">
                        Membership Plans
                    </span>
                    <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-white leading-tight league-spartan uppercase tracking-tighter">
                        Unleash Your <span className="gradient-text">Ultimate Power</span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-white/50 max-w-2xl mx-auto poiret px-4 italic">
                        Choose the perfect plan to fuel your fitness journey and dominate your goals.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-10 flex justify-center">
                        <div
                            ref={toggleRef}
                            className="relative bg-white/5 backdrop-blur-md rounded-full p-1.5 w-[300px] flex items-center cursor-pointer border border-[var(--primary)]/10"
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        >
                            {/* Sliding background */}
                            <div
                                ref={sliderRef}
                                className="absolute top-1.5 left-1.5 w-[calc(50%-0.375rem)] h-[calc(100%-0.75rem)] bg-[var(--primary)] rounded-full z-0 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                            />

                            {/* Monthly Button */}
                            <button
                                className={`relative w-1/2 text-center py-2.5 font-bold transition-all duration-300 z-10 league-spartan uppercase tracking-wider ${billingCycle === 'monthly' ? 'text-[#050505]' : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                Monthly
                            </button>

                            {/* Yearly Button */}
                            <button
                                className={`relative w-1/2 text-center py-2.5 font-bold transition-all duration-300 z-10 league-spartan uppercase tracking-wider ${billingCycle === 'yearly' ? 'text-[#050505]' : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                Yearly <span className={`text-[10px] ml-1 px-1.5 py-0.5 rounded-full ${billingCycle === 'yearly' ? 'bg-black/10' : 'bg-[var(--primary)]/20 text-[var(--primary)]'}`}>-20%</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap justify-center gap-10">
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
                        buttonText="Join ELITE"
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
    type,
    subscription,
    buttonText,
    active,
    onJoinClick
}) => {
    return (
        <div className={`w-full max-w-[290px] min-[360px]:max-w-[320px] min-[390px]:max-w-[350px] sm:w-[350px] px-2 transition-all duration-700 group ${active ? 'z-20 scale-105 md:scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}`}>
            <div className={`relative z-10 overflow-hidden rounded-[32px] border px-8 py-10 transition-all duration-700 glass-card h-full flex flex-col
                ${active ? 'border-[var(--primary)] shadow-[0_0_80px_rgba(255,0,0,0.25)] primary-shimmer-border' : 'border-white/10 hover:border-[var(--primary)]/40'}`}>
                
                {active && (
                    <div className="absolute top-0 right-0 bg-[var(--primary)] text-[#050505] px-6 py-1.5 text-xs font-black rounded-bl-2xl league-spartan uppercase tracking-tighter primary-pulse">
                        Most Popular
                    </div>
                )}

                <span className="mb-4 block text-lg font-bold text-[var(--primary)] uppercase tracking-widest league-spartan">{type}</span>

                <div className="mb-6">
                    <h2 className={`text-5xl font-black league-spartan ${active ? 'text-white' : 'text-white/90'}`}>
                        {price}
                        <span className="text-lg font-medium text-white/40 poiret italic"> / {subscription}</span>
                    </h2>
                </div>

                <p className="mb-8 text-white/50 poiret text-lg h-12 leading-tight">{description}</p>

                <div className="mb-10 flex flex-col gap-4 flex-grow">{children}</div>

                <button 
                    onClick={onJoinClick}
                    className={`w-full rounded-2xl py-5 text-xl font-black league-spartan uppercase tracking-widest transition-all duration-500 cursor-pointer
                        ${active 
                            ? "bg-[var(--primary)] text-[#050505] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)]" 
                            : "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[#050505]"}`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

const List = ({ children }) => (
    <div className="flex items-center gap-4 group/item">
        <svg className="h-6 w-6 text-[var(--primary)] flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <p className="text-white/70 poiret text-lg group-hover/item:text-white transition-colors">{children}</p>
    </div>
);

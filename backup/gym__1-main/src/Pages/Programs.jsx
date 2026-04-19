import React from 'react';

const Programs = () => {
    const programsList = [
        {
            title: "Gymnasium",
            description: "3000 sq ft of gymnasium housing world-class equipment ranging from cardio to strength training machines.",
            icon: "💪",
            color: "#D82639"
        },
        {
            title: "Aerobics & Dance",
            description: "Dedicated 1500 sq ft section for high-energy aerobics and dance classes.",
            icon: "💃",
            color: "#D82639"
        },
        {
            title: "Zumba",
            description: "Rocking environment to sweat out your stress with fun and effective Zumba routines.",
            icon: "🕺",
            color: "#D82639"
        },
        {
            title: "Boxing",
            description: "Customized training sessions including specialized boxing classes for all skill levels.",
            icon: "🥊",
            color: "#D82639"
        },
        {
            title: "Yoga",
            description: "Mind-body wellness classes to improve flexibility and reduce stress.",
            icon: "🧘",
            color: "#D82639"
        },
        {
            title: "Sports Conditioning",
            description: "Specialized training for athletes and sports professionals.",
            icon: "🏃",
            color: "#D82639"
        }
    ];

    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold league-spartan text-white mb-6 tracking-tighter text-center uppercase">
                Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 poiret mb-16 text-center max-w-2xl mx-auto italic">
                Customizing workouts as per the needs of our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {programsList.map((prog, index) => (
                    <div 
                        key={index}
                        className="group p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-[#D82639]/10 hover:border-[#D82639]/50 transition-all duration-500 cursor-pointer backdrop-blur-md"
                    >
                        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                            {prog.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white league-spartan mb-4 tracking-tight group-hover:text-[#D82639] transition-colors">
                            {prog.title}
                        </h3>
                        <p className="text-white/60 montserrat leading-relaxed group-hover:text-white/80 transition-colors">
                            {prog.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-24 p-12 bg-gradient-to-br from-[#3F0E13] to-[#111] border border-white/10 rounded-[50px] w-full text-center shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-[#D82639]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h2 className="text-4xl md:text-6xl font-bold text-white league-spartan mb-8 tracking-tighter relative z-10">
                    Ready to <span className="text-[#D82639]">Transform?</span>
                </h2>
                <button className="px-12 py-5 bg-[#D82639] text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(216,38,57,0.4)] relative z-10">
                    Join A Program
                </button>
            </div>
        </div>
    );
};

export default Programs;

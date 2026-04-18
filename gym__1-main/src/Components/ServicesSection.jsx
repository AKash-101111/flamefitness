import React from 'react'
import CircularGallery from './CircularGallery'
import { MorphingText } from './MorphingText'
import ChromaGrid from './ChromaGrid'

const ServicesSection = () => {
    const texts = [
        "Air Conditioning",
        "Changing Room",
        "Bathing Area",
        "Parking Area",
        "Personal Racks",
        "Drinks & Snacks",
    ]

    const team = [
        // Trainers
        {
            image: "https://i.pravatar.cc/300?img=5",
            title: "John Carter",
            subtitle: "Trainer",
            handle: "@johncarter",
            borderColor: "#D82639",
            gradient: "linear-gradient(145deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/johncarter"
        },
        {
            image: "https://i.pravatar.cc/300?img=6",
            title: "Emma Watson",
            subtitle: "Trainer",
            handle: "@emmawatson",
            borderColor: "#D82639",
            gradient: "linear-gradient(180deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/emmawatson"
        },
        {
            image: "https://i.pravatar.cc/300?img=7",
            title: "Liam Smith",
            subtitle: "Trainer",
            handle: "@liamsmith",
            borderColor: "#D82639",
            gradient: "linear-gradient(165deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/liamsmith"
        },

        // Physiotherapists
        {
            image: "https://i.pravatar.cc/300?img=8",
            title: "Sophia Lee",
            subtitle: "Physiotherapist",
            handle: "@sophialee",
            borderColor: "#D82639",
            gradient: "linear-gradient(135deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/sophialee"
        },
        {
            image: "https://i.pravatar.cc/300?img=9",
            title: "James Wilson",
            subtitle: "Physiotherapist",
            handle: "@jameswilson",
            borderColor: "#D82639",
            gradient: "linear-gradient(195deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/jameswilson"
        },

        // Cardio Trainers
        {
            image: "https://i.pravatar.cc/300?img=10",
            title: "Olivia Brown",
            subtitle: "Cardio Trainer",
            handle: "@oliviabrown",
            borderColor: "#D82639",
            gradient: "linear-gradient(225deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/oliviabrown"
        },

        // Nutritionist
        {
            image: "https://i.pravatar.cc/300?img=12",
            title: "Mia Thompson",
            subtitle: "Nutritionist",
            handle: "@miathompson",
            borderColor: "#D82639",
            gradient: "linear-gradient(145deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/miathompson"
        },

        // Heavy Weight Trainer
        {
            image: "https://i.pravatar.cc/300?img=13",
            title: "Max Johnson",
            subtitle: "Heavy Weight Trainer",
            handle: "@maxjohnson",
            borderColor: "#D82639",
            gradient: "linear-gradient(180deg, #D82639, #3F0E13)",
            url: "https://linkedin.com/in/maxjohnson"
        }
    ];

    return (
        <div className='w-full flex flex-col items-center py-8 my-10 overflow-hidden'>
            <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter mb-8 md:mb-0'>
                Equipment
            </h1>
            <div className='w-full h-[50vh] md:h-[65vh]'>
                <CircularGallery />
            </div>
            <div className='w-full min-h-[50vh] md:h-[65vh] flex flex-col gap-8 items-center mt-20 mb-10'>
                <h1 className='text-4xl md:text-6xl text-white league-spartan font-extrabold tracking-tighter'>
                    Facilities
                </h1>
                <div className="w-[90%] md:w-[32vw] h-[35vh] py-6 justify-center items-center border-white border-t-2 border-b-2">
                    <MorphingText texts={texts} />
                </div>
            </div>
            <div className='w-full flex flex-col items-center'>

                <div className='w-[95%] md:w-[85vw] rounded-4xl'>

                    <ChromaGrid
                        items={team}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
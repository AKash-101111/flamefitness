import React, { useState } from "react";

const JoinForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!"); // Replace with real submission logic
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Blurred background overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Form card */}
            <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl text-white font-poiret">
                <h2 className="text-2xl font-bold text-[#D82639] font-league-spartan mb-6 text-center">
                    Join Flame Fitness Studio
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/50 text-white border border-white/20 focus:border-[#D82639] focus:outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/50 text-white border border-white/20 focus:border-[#D82639] focus:outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Phone Number</label>
                        <input
                            type="tel"
                            required
                            className="w-full p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/50 text-white border border-white/20 focus:border-[#D82639] focus:outline-none transition-all"
                            placeholder="+92 300 1234567"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Select Plan</label>
                        <select
                            required
                            className="w-full p-3 rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/20 focus:border-[#D82639] focus:outline-none transition-all"
                        >
                            <option>Basic</option>
                            <option>Standard</option>
                            <option>Premium</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Preferred Start Date</label>
                        <input
                            type="date"
                            required
                            className="w-full p-3 rounded-md bg-white/20 backdrop-blur-sm placeholder-white/50 text-white border border-white/20 focus:border-[#D82639] focus:outline-none transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#D82639] text-white font-semibold py-3 rounded-md mt-2 hover:bg-opacity-90 transition-all"
                    >
                        Submit
                    </button>
                </form>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-xl hover:text-[#D82639] transition-all"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default JoinForm;

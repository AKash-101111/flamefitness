import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJf-flame-fitness-studio";

const ratingLabels = {
    1: { label: "Poor", emoji: "⭐" },
    2: { label: "Fair", emoji: "⭐⭐" },
    3: { label: "Good", emoji: "⭐⭐⭐" },
    4: { label: "Very Good", emoji: "⭐⭐⭐⭐" },
    5: { label: "Excellent", emoji: "⭐⭐⭐⭐⭐" }
};

const optionalTags = [
    "🔥 Excellent Workout",
    "💪 Great Trainers",
    "🏋️ Best Equipment",
    "❤️ Friendly Environment",
    "⚡ Highly Recommended"
];

const FeedbackSection = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // idle, error, success
    const [errorMessage, setErrorMessage] = useState('');

    const toggleTag = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag) 
                : [...prev, tag]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 1. Validate name
        if (!name.trim()) {
            setErrorMessage("Please enter your name! 👤");
            setStatus('error');
            return;
        }

        // 2. Validate rating
        if (rating === 0) {
            setErrorMessage("Please select a star rating first! ⭐");
            setStatus('error');
            return;
        }

        // 3. Validate review text
        if (!message.trim()) {
            setErrorMessage("Please enter your review text! 📝");
            setStatus('error');
            return;
        }

        setErrorMessage('');
        
        // 4. Construct review text and copy to clipboard
        let finalReviewText = `Name: ${name.trim()}\nRating: ${'⭐'.repeat(rating)}\n`;
        if (selectedTags.length > 0) {
            finalReviewText += `Tags: ${selectedTags.join(' | ')}\n`;
        }
        finalReviewText += `Review: ${message.trim()}`;

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(finalReviewText);
            } else {
                // Fallback for non-secure contexts or older/in-app mobile browsers
                const textArea = document.createElement("textarea");
                textArea.value = finalReviewText;
                textArea.style.position = "fixed";  // Avoid scrolling
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                } catch (err) {
                    console.error('Fallback copy failed', err);
                }
                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error("Clipboard copy failed:", err);
        }

        // 5. Set status to success
        setStatus('success');

        // 6. Automatically open the Google Review URL in a new tab
        window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
    };

    const activeRating = hoverRating || rating;

    return (
        <section className="w-full py-12 md:py-24 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-extrabold league-spartan text-white tracking-tighter uppercase mb-4">
                        We Value Your <span className="gradient-text">Feedback</span>
                    </h2>
                    <p className="poiret text-xl text-white/50">Help us maintain the elite standard of fitness.</p>
                </div>

                <div className="glass-card p-5 sm:p-8 md:p-12 primary-border shadow-[0_0_50px_rgba(255,0,0,0.05)] rounded-3xl">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center py-8 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6 primary-pulse">
                                    <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold league-spartan text-[var(--primary)] mb-4 uppercase tracking-wider text-center">
                                    ⭐ Thank you for your feedback!
                                </h3>
                                <p className="poiret text-white/90 text-xl max-w-xl leading-relaxed mb-6 text-center">
                                    Your review has been copied. <br />
                                    Please paste it on Google Reviews.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                                    <a 
                                        href={GOOGLE_REVIEW_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-[var(--primary)] text-[#050505] font-black rounded-full league-spartan text-lg uppercase tracking-wider hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all cursor-pointer text-center"
                                    >
                                        Go to Google Reviews
                                    </a>
                                    <button 
                                        onClick={() => {
                                            setStatus('idle');
                                            setRating(0);
                                            setSelectedTags([]);
                                            setMessage('');
                                            setName('');
                                        }}
                                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full league-spartan text-lg uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                                    >
                                        Write Another Review
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-8"
                            >
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label className="block poiret text-white/85 text-lg ml-1">Your Name</label>
                                    <input 
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (status === 'error' && errorMessage.includes('name')) {
                                                setStatus('idle');
                                            }
                                        }}
                                        placeholder="Enter your name..."
                                        className="w-full p-4 rounded-xl input-primary montserrat focus:outline-none"
                                    />
                                </div>

                                {/* 1. INTERACTIVE STAR SELECTION */}
                                <div className="flex flex-col items-center justify-center space-y-3">
                                    <span className="block poiret text-white/80 text-xl">How was your experience?</span>
                                    
                                    <div className="flex items-center gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => {
                                                    setRating(star);
                                                    if (status === 'error' && errorMessage.includes('rating')) {
                                                        setStatus('idle');
                                                    }
                                                }}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                className="p-1 cursor-pointer transition-transform active:scale-95"
                                                aria-label={`Rate ${star} stars out of 5`}
                                            >
                                                <svg 
                                                    className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-200 ${
                                                        star <= activeRating
                                                            ? 'text-[var(--primary)] drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] fill-current'
                                                            : 'text-white/20 fill-none stroke-current stroke-2'
                                                    }`}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                    
                                    {/* Star label display */}
                                    <div className="h-6 flex items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            {activeRating > 0 ? (
                                                <motion.span
                                                    key={activeRating}
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    className="league-spartan font-bold text-lg text-[var(--primary)] uppercase tracking-widest animate-pulse"
                                                >
                                                    {ratingLabels[activeRating].label} {ratingLabels[activeRating].emoji}
                                                </motion.span>
                                            ) : (
                                                <span className="poiret text-white/40 text-sm italic">Tap stars to rate</span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* 2. OPTIONAL REVIEW TAGS */}
                                <div className="space-y-3">
                                    <span className="block poiret text-white/85 text-lg">Add tags to your review (optional)</span>
                                    <div className="flex flex-wrap gap-3 justify-start">
                                        {optionalTags.map((tag) => {
                                            const isSelected = selectedTags.includes(tag);
                                            return (
                                                <button
                                                    key={tag}
                                                    type="button"
                                                    onClick={() => toggleTag(tag)}
                                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm poiret font-semibold transition-all duration-300 border cursor-pointer ${
                                                        isSelected
                                                            ? 'bg-[var(--primary)]/15 border-[var(--primary)] text-white shadow-[0_0_15px_rgba(255,0,0,0.2)]'
                                                            : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:bg-white/10'
                                                    }`}
                                                >
                                                    {tag}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* 3. REVIEW MESSAGE TEXTBOX */}
                                <div className="space-y-2">
                                    <label className="block poiret text-white/85 text-lg ml-1">Write Your Review</label>
                                    <textarea 
                                        required
                                        rows="4"
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            if (status === 'error' && errorMessage.includes('text')) {
                                                setStatus('idle');
                                            }
                                        }}
                                        placeholder="Tell us about your experience..."
                                        className="w-full p-4 rounded-xl input-primary montserrat resize-none focus:outline-none"
                                    />
                                </div>

                                {/* Validation error display */}
                                {status === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-[var(--primary)]/10 border border-[var(--primary)] rounded-xl text-center"
                                    >
                                        <span className="league-spartan font-bold text-sm tracking-wider uppercase text-white">
                                            {errorMessage}
                                        </span>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-[var(--primary)] text-[#050505] font-black rounded-xl league-spartan text-xl uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    Submit Feedback
                                    <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;


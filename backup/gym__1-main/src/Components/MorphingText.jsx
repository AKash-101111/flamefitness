import { useCallback, useEffect, useRef } from "react";

// Simple fallback for className merging
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const morphTime = 1.5;
const cooldownTime = 0.5;

/* ----------------- LOGIC HOOK ----------------- */
const useMorphingText = (texts) => {
    const textIndexRef = useRef(0);
    const morphRef = useRef(0);
    const cooldownRef = useRef(0);
    const timeRef = useRef(new Date());

    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    const setStyles = useCallback(
        (fraction) => {
            const t1 = text1Ref.current;
            const t2 = text2Ref.current;

            if (!t1 || !t2) return;

            t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            const inverted = 1 - fraction;
            t1.style.filter = `blur(${Math.min(8 / inverted - 8, 100)}px)`;
            t1.style.opacity = `${Math.pow(inverted, 0.4) * 100}%`;

            t1.textContent = texts[textIndexRef.current % texts.length];
            t2.textContent = texts[(textIndexRef.current + 1) % texts.length];
        },
        [texts]
    );

    const doMorph = useCallback(() => {
        morphRef.current -= cooldownRef.current;
        cooldownRef.current = 0;

        let fraction = morphRef.current / morphTime;

        if (fraction > 1) {
            cooldownRef.current = cooldownTime;
            fraction = 1;
        }

        setStyles(fraction);

        if (fraction === 1) {
            textIndexRef.current++;
        }
    }, [setStyles]);

    const doCooldown = useCallback(() => {
        morphRef.current = 0;

        const t1 = text1Ref.current;
        const t2 = text2Ref.current;

        if (!t1 || !t2) return;

        t2.style.filter = "none";
        t2.style.opacity = "100%";

        t1.style.filter = "none";
        t1.style.opacity = "0%";
    }, []);

    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const newTime = new Date();
            const dt =
                (newTime.getTime() - timeRef.current.getTime()) / 1000;

            timeRef.current = newTime;

            cooldownRef.current -= dt;

            cooldownRef.current <= 0 ? doMorph() : doCooldown();
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [doMorph, doCooldown]);

    return { text1Ref, text2Ref };
};

/* ----------------- PRESENTATION LAYERS ----------------- */

const TextLayers = ({ texts }) => {
    const { text1Ref, text2Ref } = useMorphingText(texts);
    return (
        <>
            <span
                ref={text1Ref}
                className="absolute inset-x-0 top-0 m-auto w-full"
            />
            <span
                ref={text2Ref}
                className="absolute inset-x-0 top-0 m-auto w-full"
            />
        </>
    );
};

const SvgFilters = () => (
    <svg className="fixed h-0 w-0">
        <defs>
            <filter id="threshold">
                <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 255 -140
          "
                />
            </filter>
        </defs>
    </svg>
);

/* ----------------- EXPORT COMPONENT ----------------- */

export const MorphingText = ({ texts, className }) => {
    return (
        <div
            className={cn(
                "relative mx-auto h-16 w-full max-w-screen-md league-spartan text-black text-center font-bold text-[40px] leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[5rem]",
                className
            )}

        >
            <TextLayers texts={texts} />
            <SvgFilters />
        </div>
    );
};

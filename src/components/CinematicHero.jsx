import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CinematicHero({ title, subtitle, image, alt, imagePosition = 'object-center' }) {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });

        tl.fromTo(titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.5 }
        );

        tl.fromTo(subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1 },
            '-=1.2'
        );

        tl.fromTo(imageRef.current,
            { scale: 1.2, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2 },
            0
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center pt-24">
            {/* Background Image */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <img
                        ref={imageRef}
                        src={image}
                        alt={alt || title}
                        fetchPriority="high"
                        loading="eager"
                        className={`w-full h-full object-cover ${imagePosition}`}
                    />
                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)]" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h1
                    ref={titleRef}
                    className="font-hatton text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-tight"
                >
                    {title}
                </h1>
                {subtitle && (
                    <p
                        ref={subtitleRef}
                        className="mt-8 text-lg md:text-xl text-white font-medium tracking-[0.25em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    >
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-background rounded-t-[4rem] z-20" />
        </div>
    );
}

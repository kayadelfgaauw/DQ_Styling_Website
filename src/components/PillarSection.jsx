import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Store, Gem, Heart, Sparkles } from 'lucide-react';

const pillars = [
    { id: 1, title: 'Eigen winkel', icon: Store, description: 'Een sfeervolle plek in het hart van Burgh-Haamstede.' },
    { id: 2, title: 'Exclusieve producten', icon: Gem, description: 'Alleen de mooiste merken zoals Silk-ka en Des Pots.' },
    { id: 3, title: 'Persoonlijk advies', icon: Heart, description: 'Maatwerk boeketten en styling die bij u past.' },
    { id: 4, title: 'Uniek aanbod', icon: Sparkles, description: 'Handgemaakte vazen en zijden bloemen van topkwaliteit.' },
];

export default function PillarSection() {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        // Horizontal scroll animation
        const scrollWidth = scrollRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const xTranslate = -(scrollWidth - windowWidth + 200);

        gsap.to(scrollRef.current, {
            x: xTranslate,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${scrollWidth}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            },
        });

        // Individual cards floating animation
        gsap.utils.toArray('.pillar-card').forEach((card, i) => {
            gsap.to(card, {
                y: i % 2 === 0 ? -20 : 20,
                duration: 2 + i,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen bg-primary overflow-hidden flex items-center rounded-[4rem] mx-6">
            <div className="absolute top-12 left-12 md:left-24 z-10">
                <h2 className="font-hatton text-4xl md:text-6xl font-bold text-background opacity-30">Our Essence</h2>
            </div>

            <div ref={scrollRef} className="flex gap-12 md:gap-24 pl-12 md:pl-24 pr-48 items-center h-full">
                {pillars.map((pillar) => (
                    <div
                        key={pillar.id}
                        className="pillar-card shrink-0 w-[300px] md:w-[450px] aspect-[4/5] bg-background rounded-[4xl] p-12 flex flex-col justify-between clay-shadow group hover:bg-accent transition-colors duration-500"
                    >
                        <pillar.icon className="w-16 h-16 text-accent group-hover:text-background transition-colors duration-500" aria-hidden="true" />
                        <div className="space-y-6">
                            <h3 className="font-hatton text-3xl md:text-5xl font-bold text-primary group-hover:text-background transition-colors duration-500">
                                {pillar.title}
                            </h3>
                            <p className="text-lg opacity-70 group-hover:text-background group-hover:opacity-90 transition-colors duration-500">
                                {pillar.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useEffect } from 'react';

const heroImages = [
    { url: '/Images/Home Page/image00001.webp', alt: 'Interieur van DQ Styling met handgemaakte vazen op artistieke wandplanken.' },
    { url: '/Images/Home Page/image00002.webp', alt: 'Kleurrijke zijden bloemen en unieke vazen gepresenteerd in de sfeervolle DQ Store.' },
    { url: '/Images/Home Page/image00003.webp', alt: 'Overzicht van de winkel met een focus op luxe bloemcreaties en keramiek.' },
    { url: '/Images/Home Page/image00004.webp', alt: 'Detailopname van exclusieve blauw-witte vazen en zijden boeketten.' },
    { url: '/Images/Home Page/image00005.webp', alt: 'Close-up van de textuur en kleuren van Real Touch zijden bloemen in de winkel.' },
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);
    const introRef = useRef(null);
    const quoteRef = useRef(null);
    const leadInRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useGSAP(() => {
        // Hero section intro animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });

        tl.fromTo('.hero-title',
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.5 }
        );

        tl.fromTo('.hero-subtitle',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1 },
            '-=1.2'
        );

        tl.fromTo('.hero-cta',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1 },
            '-=1'
        );

        // Intro section animations
        gsap.from('.intro-text', {
            scrollTrigger: {
                trigger: introRef.current,
                start: 'top 80%',
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
        });

        gsap.from('.intro-image', {
            scrollTrigger: {
                trigger: introRef.current,
                start: 'top 70%',
            },
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
        });

        // Lead-in card animation
        gsap.from(leadInRef.current, {
            scrollTrigger: {
                trigger: leadInRef.current,
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="overflow-x-hidden">
            <SEO
                title="Luxe Zijden Bloemen & Keramiek"
                description="Ontdek de wereld van DQ Styling in Burgh-Haamstede. Exclusieve zijden bloemen van Silk-ka en handgemaakt keramiek van Des Pots voor een uniek interieur. ✨"
                url="/"
            />
            {/* Hero Slider Section */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img.url}
                            alt={img.alt}
                            className="w-full h-full object-cover scale-105 animate-[kenburns_10s_ease-in-out_infinite]"
                        />
                        {/* Gradient Overlays for Readability */}
                        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                    </div>
                ))}

                <div className="relative z-10 text-center px-6">
                    <h1 className="hero-title font-hatton text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6 tracking-tight">
                        DQ STYLING
                    </h1>
                    <p className="hero-subtitle text-white text-lg md:text-2xl font-light tracking-wide drop-shadow-lg max-w-2xl mx-auto">
                        Exclusieve zijden bloemen en handgemaakte vazen voor elk interieur.
                    </p>
                    <div className="hero-cta mt-12">
                        <Link
                            to="/de-winkel"
                            className="group inline-flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 clay-shadow"
                        >
                            Ontdek de Boutique
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-12 h-1 bg-background transition-all duration-500 ${idx === currentSlide ? 'opacity-100' : 'opacity-30'
                                }`}
                        />
                    ))}
                </div>

                {/* Bottom Curve */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-background rounded-t-[4rem] z-20" />
            </section>

            {/* Intro Section: Daphne */}
            <section ref={introRef} className="relative py-32 px-6 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] group-hover:bg-primary/10 transition-colors duration-500" />
                        <img
                            src="/Images/Home Page/Daphne_voor_winkel.webp"
                            alt="Daphne - De Stylist achter DQ Styling"
                            className="intro-image relative w-full h-[600px] object-cover rounded-[3rem] clay-shadow"
                        />
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-full p-8 flex flex-col items-center justify-center text-background rotate-12 clay-shadow">
                            <span className="font-hatton font-bold text-2xl">Daphne</span>
                            <span className="text-sm font-light uppercase tracking-widest text-center mt-2">Stylist & Founder</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="intro-text font-hatton text-5xl md:text-6xl font-bold">
                            Passie voor <span className="text-accent italic">Sfeer</span> & Vakmanschap
                        </h2>
                        <div className="intro-text space-y-6 text-lg md:text-xl font-light leading-relaxed">
                            <p>
                                Met DQ Styling breng ik mijn liefde voor interieur, kleur en textuur samen. In het hart van Burgh-Haamstede creëren we een plek waar gastvrijheid en esthetiek elkaar ontmoeten.
                            </p>
                            <p>
                                Specialist in luxe zijden bloemen van Silk-ka en het unieke karakter van Des Pots keramiek. Wij geloven dat elk interieur een ziel nodig heeft – een persoonlijk statement dat jarenlang meegaat.
                            </p>
                        </div>
                        <div className="intro-text flex gap-8 pt-4">
                            <div className="flex flex-col gap-2">
                                <Sparkles className="text-accent" aria-hidden="true" />
                                <span className="text-sm font-bold uppercase tracking-widest">Uniek Aanbod</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Heart className="text-accent" aria-hidden="true" />
                                <span className="text-sm font-bold uppercase tracking-widest">Persoonlijk Advies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Store Lead-in Section */}
            <section className="py-32 px-6 bg-primary text-background rounded-[4rem] mx-6 mb-20">
                <div ref={leadInRef} className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="font-hatton text-5xl md:text-7xl font-bold">
                        Bezoek de <span className="italic text-accent">DQ Store</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed">
                        Laat je onderdompelen in een wereld van kleur en kwaliteit. Van handgemaakte oestervazen tot zijden boeketten die niet van echt te onderscheiden zijn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/de-winkel"
                            className="bg-accent text-background px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
                        >
                            Ontdek de Winkel
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-background/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-background hover:text-primary transition-all duration-300"
                        >
                            Plan een Bezoek
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

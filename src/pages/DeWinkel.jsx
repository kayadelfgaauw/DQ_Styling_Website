import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift, Sparkles, Heart, Clock } from 'lucide-react';
import CinematicHero from '../components/CinematicHero';
import SEO from '../components/SEO';
import JSONLD from '../components/JSONLD';

export default function DeWinkel() {
    const contentRef = useRef(null);

    const breadcrumbData = [
        { name: 'Home', url: '/' },
        { name: 'De Winkel', url: '/de-winkel' }
    ];

    useGSAP(() => {
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
        });

        gsap.from('.text-block', {
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 70%',
            },
            x: -30,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
        });
    }, { scope: contentRef });

    return (
        <div className="bg-background min-h-screen">
            <JSONLD type="BreadcrumbList" data={breadcrumbData} />
            <SEO
                title="Bezoek onze Boutique in Burgh-Haamstede"
                description="Stap binnen in de DQ Store. Laat u verrassen door onze collectie 'Real Touch' zijden boeketten, oestervazen en luxe woonaccessoires. Ontdek sfeer & vakmanschap."
                url="/de-winkel"
            />
            <CinematicHero
                title="DQ Store"
                subtitle="Beleef de Sfeer"
                image="/Images/Home Page/image00002.webp"
                alt="Sfeervolle DQ Store met bloemen en vazen"
            />

            <section ref={contentRef} className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Main Content Text */}
                    <div className="text-block space-y-8">
                        <h2 className="font-hatton text-4xl md:text-6xl font-bold leading-tight">
                            Gastvrijheid & <br /> <span className="text-accent italic">Stijlvol</span> Design
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-primary/90">
                            <p>
                                Bij ons draait alles om sfeer die je moet beleven, de gastvrijheid en natuurlijk onze grote collectie zijdenbloemen, unieke handgemaakte vazen van Des pots, de ‘zeeuwse’ oestervaas en woonaccessoires.
                            </p>
                            <p>
                                We werken met topkwaliteit merken zoals Silk-ka, waarvan de zijdebloemen bijna niet van echt te onderscheiden zijn dankzij de Real Touch-techniek. Super duurzaam én stijlvol.
                            </p>
                            <p>
                                Alles wordt bij ons met zorg op maat gemaakt, helemaal naar jouw wensen. Heb je zelf een mooie vaas? Neem ’m mee en wij zorgen voor een boeket dat perfect past en jarenlang meegaat.
                            </p>
                            <p className="font-medium">
                                Op zoek naar een origineel cadeau? We hebben ook cadeaubonnen en maken prachtige geschenken op maat.
                            </p>
                        </div>
                        <div className="pt-6">
                            <p className="font-hatton text-2xl font-bold text-accent">
                                Kom vooral langs in de DQ Store. We kijken ernaar uit om jullie daar (weer) te mogen ontvangen.
                            </p>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="feature-card p-10 bg-primary/5 rounded-[3rem] space-y-4 hover:bg-primary/10 transition-colors duration-500">
                            <Sparkles className="text-accent w-10 h-10" aria-hidden="true" />
                            <h3 className="font-hatton text-xl font-bold">Topkwaliteit</h3>
                            <p className="text-sm opacity-80">Zijden bloemen die bijna niet van echt te onderscheiden zijn.</p>
                        </div>
                        <div className="feature-card p-10 bg-accent/5 rounded-[3rem] space-y-4 hover:bg-accent/10 transition-colors duration-500">
                            <Heart className="text-accent w-10 h-10" aria-hidden="true" />
                            <h3 className="font-hatton text-xl font-bold">Maatwerk</h3>
                            <p className="text-sm opacity-80">Wij maken boeketten die perfect passen bij jouw interieur.</p>
                        </div>
                        <div className="feature-card p-10 bg-accent/5 rounded-[3rem] space-y-4 hover:bg-accent/10 transition-colors duration-500">
                            <Gift className="text-accent w-10 h-10" aria-hidden="true" />
                            <h3 className="font-hatton text-xl font-bold">Cadeaus</h3>
                            <p className="text-sm opacity-80">Cadeaubonnen en prachtige gepersonaliseerde geschenken.</p>
                        </div>
                        <div className="feature-card p-10 bg-primary/5 rounded-[3rem] space-y-4 hover:bg-primary/10 transition-colors duration-500">
                            <Clock className="text-accent w-10 h-10" aria-hidden="true" />
                            <h3 className="font-hatton text-xl font-bold">Duurzaam</h3>
                            <p className="text-sm opacity-80">Stijlvolle creaties die jarenlang mooi blijven zonder onderhoud.</p>
                        </div>
                    </div>
                </div>

                {/* Full Width Image Section */}
                <div className="mt-32 relative h-[600px] overflow-hidden rounded-[4rem] clay-shadow">
                    <img
                        src="/Images/Home Page/image00001.webp"
                        alt="Interieur DQ Store"
                        className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                        <h3 className="font-hatton text-4xl md:text-6xl text-white font-bold drop-shadow-2xl">Inspiratie voor je interieur</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}

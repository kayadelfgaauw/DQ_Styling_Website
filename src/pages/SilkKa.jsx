import CinematicHero from '../components/CinematicHero';
import PillarSection from '../components/PillarSection';
import GallerySection from '../components/GallerySection';
import { silkKaData } from '../data/galleryData';
import { Mail } from 'lucide-react';
import SEO from '../components/SEO';
import JSONLD from '../components/JSONLD';

export default function SilkKa() {
    const breadcrumbData = [
        { name: 'Home', url: '/' },
        { name: 'Silk-ka', url: '/silk-ka' }
    ];

    return (
        <div className="bg-background min-h-screen">
            <JSONLD type="BreadcrumbList" data={breadcrumbData} />
            <SEO
                title="Silk-ka Zijden Bloemen"
                description="Hoogwaardige zijden bloemen van Silk-ka. Dankzij de 'Real Touch' techniek niet van echt te onderscheiden. Duurzame luxe en tijdloos design voor uw interieur."
                url="/silk-ka"
            />
            <CinematicHero
                title="Silk-ka"
                subtitle="Luxe zijden bloemen van ongekende kwaliteit"
                image="/Images/Silkka_hero.webp"
                alt="Luxe zijden bloemen van Silk-ka"
                imagePosition="object-[center_30%]"
            />

            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative order-2 lg:order-1">
                    <img
                        src="/Images/Home Page/image00005.webp"
                        alt="Silk-ka Bloemen"
                        className="rounded-[4rem] clay-shadow aspect-[4/5] object-cover"
                    />
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                    <h2 className="font-hatton text-4xl md:text-6xl font-bold">
                        Real <span className="text-accent italic">Touch</span> Techniek
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            Silk-ka staat wereldwijd bekend om haar hoogwaardige zijden bloemen en kunstplanten van ongekende kwaliteit. Elk ontwerp wordt met oog voor detail ontwikkeld, waardoor de bloemen bijna niet van echt te onderscheiden zijn.
                        </p>
                        <div className="bg-primary/5 p-8 rounded-[3rem] space-y-4">
                            <h3 className="font-hatton text-2xl font-bold">Het geheim van Silk-ka:</h3>
                            <ul className="space-y-2 opacity-80">
                                <li>– Natuurgetrouwe kleuren en structuren</li>
                                <li>– Luxe materialen en verfijnde afwerking</li>
                                <li>– Seizoenscollecties volgens de laatste trends</li>
                                <li>– Tijdloze kwaliteit die jarenlang mooi blijft</li>
                            </ul>
                        </div>
                        <p>
                            Met Silk-ka creëer je een blijvende, stijlvolle uitstraling zonder onderhoud – perfect voor wie houdt van luxe, sfeer en gemak.
                        </p>
                        <div className="bg-accent/10 p-8 rounded-[3rem] flex flex-col gap-4 border border-accent/20">
                            <p className="opacity-80">
                                Benieuwd naar de mogelijkheden of een specifiek item?
                            </p>
                            <a href="mailto:dqstyling@gmail.com" className="flex items-center gap-3 text-secondary font-bold hover:text-accent transition-colors">
                                <Mail aria-hidden="true" /> dqstyling@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="space-y-0">
                {silkKaData.map((section) => (
                    <GallerySection
                        key={section.section}
                        images={section.images}
                        sectionNumber={section.section}
                    />
                ))}
            </div>

            <PillarSection />
        </div>
    );
}

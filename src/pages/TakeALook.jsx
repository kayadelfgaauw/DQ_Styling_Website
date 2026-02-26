import CinematicHero from '../components/CinematicHero';
import PillarSection from '../components/PillarSection';
import GallerySection from '../components/GallerySection';
import { takeALookData } from '../data/galleryData';
import SEO from '../components/SEO';
import JSONLD from '../components/JSONLD';

export default function TakeALook() {
    const breadcrumbData = [
        { name: 'Home', url: '/' },
        { name: 'Take a Look', url: '/take-a-look' }
    ];

    return (
        <div className="bg-background min-h-screen">
            <JSONLD type="BreadcrumbList" data={breadcrumbData} />
            <SEO
                title="Inspiratie & Portfolio"
                description="Bekijk onze unieke handgemaakte kunstwerken van zijde. Laat u inspireren door sfeervolle composities en hoogwaardige styling voor elk type interieur."
                url="/take-a-look"
            />
            <CinematicHero
                title="Take a Look"
                subtitle="Laat je inspireren door onze unieke bloemencreaties"
                image="/Images/Take a Look/image00119.webp"
                alt="Schitterende compositie van zijden bloemen in tinten van roze, lila en groen"
            />

            <section className="py-24 px-6 max-w-7xl mx-auto space-y-12 text-center">
                <h2 className="font-hatton text-4xl md:text-6xl font-bold">Uniek in Elk <span className="text-accent italic">Detail</span></h2>
                <p className="text-xl max-w-3xl mx-auto font-light opacity-80 leading-relaxed">
                    Stap binnen in de wereld van DQ Styling. Elke creatie is met de hand samengesteld, met oog voor balans en kleur. Ontdek hoe wij zijden bloemen transformeren tot blijvende kunstwerken voor uw interieur.
                </p>
            </section>

            <div className="space-y-0">
                {takeALookData.map((section) => (
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

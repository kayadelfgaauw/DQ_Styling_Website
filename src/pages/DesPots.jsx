import CinematicHero from '../components/CinematicHero';
import PillarSection from '../components/PillarSection';
import GallerySection from '../components/GallerySection';
import { desPotsData } from '../data/galleryData';
import { Mail } from 'lucide-react';
import SEO from '../components/SEO';
import JSONLD from '../components/JSONLD';

export default function DesPots() {
    const breadcrumbData = [
        { name: 'Home', url: '/' },
        { name: 'Des Pots', url: '/des-pots' }
    ];

    return (
        <div className="bg-background min-h-screen">
            <JSONLD type="BreadcrumbList" data={breadcrumbData} />
            <SEO
                title="Des Pots Keramiek"
                description="De grootste collectie Des Pots keramiek. Ontdek onze handgemaakte, artistieke vazen met uniek karakter. Perfect als statement piece voor uw woning of kantoor."
                url="/des-pots"
            />
            <CinematicHero
                title="Des Pots"
                subtitle="Mijn absolute favoriete merk – Handgemaakt, uniek en oog voor detail"
                image="/Images/Des Pots/Hero_despots.webp"
                alt="Daphne van DQ Styling tussen een kleurrijke collectie organische vazen van Des Pots"
            />

            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="font-hatton text-4xl md:text-6xl font-bold">
                        Kunst met <span className="text-accent italic">Karakter</span>
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            Des Pots is één van mijn favoriete merken in de collectie. Dit prachtige Nederlandse merk staat bekend om zijn handgemaakte vazen en potten, elk stuk met een eigen karakter en verfijnde afwerking.
                        </p>
                        <div className="bg-primary/5 p-8 rounded-[3rem] space-y-4">
                            <h3 className="font-hatton text-2xl font-bold">Wat maakt Des Pots bijzonder?</h3>
                            <ul className="space-y-2 opacity-80">
                                <li>– Unieke, artistieke ontwerpen</li>
                                <li>– Handgemaakte details en hoogwaardige materialen</li>
                                <li>– Bijzondere glazuren, structuren en vormen</li>
                                <li>– Tijdloze eyecatchers met karakter</li>
                            </ul>
                        </div>
                        <div className="bg-accent/10 p-8 rounded-[3rem] flex flex-col gap-4 border border-accent/20">
                            <p className="font-bold text-primary">
                                De collectie van Des Pots mag niet online aangeboden worden.
                            </p>
                            <p className="opacity-80">
                                Voor beschikbaarheid, prijzen of meer informatie kun je mailen naar:
                            </p>
                            <a href="mailto:dqstyling@gmail.com" className="flex items-center gap-3 text-secondary font-bold hover:text-accent transition-colors">
                                <Mail aria-hidden="true" /> dqstyling@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/Images/Home Page/image00001.webp"
                        alt="Des Pots Vazen"
                        className="rounded-[4rem] clay-shadow aspect-[4/5] object-cover"
                    />
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-background font-bold rotate-12">
                        FAV
                    </div>
                </div>
            </section>

            <div className="space-y-0">
                {desPotsData.map((section) => (
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

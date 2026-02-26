import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import CinematicHero from '../components/CinematicHero';
import SEO from '../components/SEO';
import JSONLD from '../components/JSONLD';

export default function Contact() {
    const formRef = useRef(null);

    const breadcrumbData = [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
    ];

    useGSAP(() => {
        gsap.from('.contact-info-item', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });

        gsap.from('.contact-form-child', {
            x: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.5,
        });
    }, { scope: formRef });

    return (
        <div ref={formRef} className="bg-background min-h-screen">
            <JSONLD type="BreadcrumbList" data={breadcrumbData} />
            <SEO
                title="Contact & Advies"
                description="Heeft u vragen of wilt u persoonlijk stylingadvies? Neem contact op met DQ Styling of bezoek onze winkel in het hart van Burgh-Haamstede. Wij helpen u graag!"
                url="/contact"
            />
            <CinematicHero
                title="Contact"
                subtitle="We kijken ernaar uit om u te ontmoeten"
                image="/Images/Home Page/image00003.webp"
                alt="Contacteer DQ Styling"
            />

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Side */}
                    <div className="space-y-12">
                        <h2 className="font-hatton text-5xl md:text-7xl font-bold">
                            Laten we iets <br /> <span className="text-accent italic">Moois</span> creëren
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="contact-info-item p-10 bg-primary/5 rounded-[3rem] space-y-4">
                                <MapPin className="text-accent w-10 h-10" aria-hidden="true" />
                                <h3 className="font-hatton text-xl font-bold">Adres</h3>
                                <p className="opacity-70">Ring 14, 4328AE<br />Burgh-Haamstede</p>
                            </div>
                            <div className="contact-info-item p-10 bg-accent/5 rounded-[3rem] space-y-4">
                                <Phone className="text-accent w-10 h-10" aria-hidden="true" />
                                <h3 className="font-hatton text-xl font-bold">Telefoon</h3>
                                <p className="opacity-70">06 21 41 45 13</p>
                            </div>
                            <div className="contact-info-item p-10 bg-accent/5 rounded-[3rem] space-y-4">
                                <Mail className="text-accent w-10 h-10" aria-hidden="true" />
                                <h3 className="font-hatton text-xl font-bold">E-mail</h3>
                                <p className="opacity-70">dqstyling@gmail.com</p>
                            </div>
                            <div className="contact-info-item p-10 bg-primary/5 rounded-[3rem] space-y-4">
                                <h3 className="font-hatton text-xl font-bold">Openingstijden</h3>
                                <p className="opacity-70">Wo t/m Za<br />10:00 – 17:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-primary text-background p-10 md:p-12 rounded-[4rem] clay-shadow border border-background/5">
                        <form className="space-y-6" action="https://formspree.io/f/xeelnvka" method="POST">
                            {/* ... labels and inputs ... */}
                            <div className="contact-form-child space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Naam</label>
                                <input
                                    type="text"
                                    name="naam"
                                    required
                                    className="w-full bg-transparent border-b border-background/20 py-4 focus:border-accent outline-none transition-all text-xl font-light placeholder:opacity-30"
                                    placeholder="Uw volledige naam"
                                />
                            </div>
                            <div className="contact-form-child space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-b border-background/20 py-4 focus:border-accent outline-none transition-all text-xl font-light placeholder:opacity-30"
                                    placeholder="uw@email.nl"
                                />
                            </div>

                            <div className="contact-form-child space-y-2">
                                <label className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Bericht</label>
                                <textarea
                                    name="bericht"
                                    required
                                    rows={3}
                                    className="w-full bg-transparent border-b border-background/20 py-4 focus:border-accent outline-none transition-all text-xl font-light resize-none placeholder:opacity-30"
                                    placeholder="Hoe kunnen we u helpen?"
                                />
                            </div>
                            <div className="pt-4 contact-form-child">
                                <button
                                    type="submit"
                                    className="group relative overflow-hidden flex items-center justify-between w-full bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-[0.98] duration-300"
                                >
                                    <span className="relative z-10">Verstuur Bericht</span>
                                    <div className="relative z-10 w-12 h-12 bg-background/20 rounded-full flex items-center justify-center group-hover:bg-background/30 transition-colors">
                                        <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} aria-hidden="true" />
                                    </div>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

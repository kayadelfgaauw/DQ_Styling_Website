import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-background pt-20 pb-10 px-6 rounded-t-[3rem] mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/Logo/Logo.png"
                            alt="DQ Styling Logo"
                            className="h-16 w-auto"
                        />
                    </Link>
                    <p className="opacity-80 leading-relaxed font-light">
                        Handgemaakte vazen, luxe zijden bloemen en unieke woonaccessoires in het hart van Burgh-Haamstede.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/dq.styling" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300" aria-label="Volg ons op Instagram">
                            <Instagram size={20} aria-hidden="true" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300" aria-label="Volg ons op Facebook">
                            <Facebook size={20} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-hatton text-xl font-bold mb-6">Navigatie</h3>
                    <ul className="space-y-4 font-light opacity-80">
                        <li><Link to="/de-winkel" className="hover:text-accent transition-colors">De Winkel</Link></li>
                        <li><Link to="/take-a-look" className="hover:text-accent transition-colors">Take a Look</Link></li>
                        <li><Link to="/des-pots" className="hover:text-accent transition-colors">Des Pots</Link></li>
                        <li><Link to="/silk-ka" className="hover:text-accent transition-colors">Silk-Ka</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-hatton text-xl font-bold mb-6">Contact</h3>
                    <ul className="space-y-4 font-light opacity-80">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="shrink-0 text-accent" aria-hidden="true" />
                            <span>Ring 14, 4328AE<br />Burgh-Haamstede</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="shrink-0 text-accent" aria-hidden="true" />
                            <a href="tel:0621414513" className="hover:text-accent transition-colors">06 21 41 45 13</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="shrink-0 text-accent" aria-hidden="true" />
                            <a href="mailto:dqstyling@gmail.com" className="hover:text-accent transition-colors">dqstyling@gmail.com</a>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="font-hatton text-xl font-bold mb-6">Openingstijden</h3>
                    <ul className="space-y-4 font-light opacity-80">
                        <li className="flex justify-between">
                            <span>Woensdag - Zaterdag</span>
                            <span>10:00 – 17:00</span>
                        </li>
                        <li className="flex justify-between opacity-50">
                            <span>Zondag - Dinsdag</span>
                            <span>Gesloten</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60 font-light">
                <p>© {currentYear} DQ Styling. Alle rechten voorbehouden.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-accent">Privacy Policy</a>
                    <a href="#" className="hover:text-accent">Algemene Voorwaarden</a>
                </div>
            </div>
        </footer>
    );
}

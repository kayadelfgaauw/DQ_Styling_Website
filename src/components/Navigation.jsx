import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'De Winkel', path: '/de-winkel' },
    { name: 'Take a Look', path: '/take-a-look' },
    { name: 'Des Pots', path: '/des-pots' },
    { name: 'Silk-Ka', path: '/silk-ka' },
    { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
                isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-md py-3' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-3">
                    <img
                        src="/Logo/Logo.png"
                        alt="DQ Styling Logo"
                        className="h-24 w-auto group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'relative font-medium text-sm lg:text-base tracking-wide py-1 transition-colors duration-300 hover:text-accent group',
                                location.pathname === link.path
                                    ? 'text-accent'
                                    : (isScrolled ? 'text-primary' : 'text-background')
                            )}
                        >
                            {link.name}
                            <span
                                className={cn(
                                    'absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
                                    location.pathname === link.path ? 'w-full' : 'w-0'
                                )}
                            />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-full transition-colors z-50",
                        isMobileMenuOpen || isScrolled ? "text-primary hover:bg-primary/10" : "text-background hover:bg-background/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 bg-background z-40 transition-transform duration-700 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 pt-24',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                            'font-hatton text-4xl font-bold transition-colors',
                            location.pathname === link.path ? 'text-accent' : 'text-primary'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

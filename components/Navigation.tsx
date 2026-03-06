import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavigationProps {
  onNavigate: (page: Page) => void;
  darkBackground?: boolean;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, darkBackground = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; sectionId: string }[] = [
    { label: 'Solutions', sectionId: 'solutions' },
    { label: 'Benefits', sectionId: 'benefits' },
    { label: 'How It Works', sectionId: 'how-it-works' },
    { label: 'Testimonials', sectionId: 'testimonials' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => scrollToSection(sectionId), 50);
    setMobileMenuOpen(false);
  };

  const handleBookCall = () => {
    onNavigate('home');
    setTimeout(() => scrollToSection('connect'), 50);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen
        ? darkBackground
          ? 'bg-brand-navy/90 backdrop-blur-md py-4'
          : 'glass-nav py-4 shadow-sm'
        : darkBackground
          ? 'bg-brand-navy/40 backdrop-blur-md py-8'
          : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          <img
            src={`${import.meta.env.BASE_URL}img/Brand-Logo-With-title.svg`}
            alt="Architech Ascension"
            className={`h-[3.5rem] md:h-[4.5rem] w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${darkBackground ? 'brightness-0 invert' : ''}`}
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleNavClick(link.sectionId)}
              className={`nav-link-underline text-sm font-medium transition-colors focus:outline-none ${darkBackground ? 'text-white/80 hover:text-white' : 'text-brand-navy/70 hover:text-brand-navy'}`}
            >
              {link.label}
            </button>
          ))}
          {/* Webinar page link */}
          <button
            onClick={() => { onNavigate('webinar'); setMobileMenuOpen(false); }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${darkBackground ? 'bg-brand-gold/15 border-brand-gold/40 text-white hover:bg-brand-gold/25' : 'bg-brand-gold/15 border-brand-gold/40 text-brand-navy hover:bg-brand-gold/25'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Free Webinar
          </button>
          <button
            onClick={handleBookCall}
            className={`px-5 py-2.5 text-white text-xs font-semibold tracking-wide rounded-full transition-all focus:outline-none ${darkBackground ? 'bg-white/15 border border-white/30 hover:bg-white/25' : 'bg-brand-navy shadow-md hover:shadow-lg hover:bg-opacity-90'}`}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`focus:outline-none ${darkBackground ? 'text-white' : 'text-brand-navy'}`}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-slide-down absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col space-y-6 border-b border-gray-100 h-screen">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleNavClick(link.sectionId)}
              className="text-base font-medium text-left text-brand-navy/70 hover:text-brand-navy"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('webinar'); setMobileMenuOpen(false); }}
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-gold text-left cursor-pointer focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            Free Webinar — Mar 18
          </button>
          <button
            onClick={handleBookCall}
            className="text-base font-medium text-brand-gold text-left"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

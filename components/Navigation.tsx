import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavigationProps {
  onNavigate: (page: Page) => void;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          <img
            src={`${import.meta.env.BASE_URL}img/Brand-Logo-With-title.svg`}
            alt="Architech Ascension"
            className="h-[3.5rem] md:h-[4.5rem] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleNavClick(link.sectionId)}
              className="nav-link-underline text-sm font-medium text-brand-navy/70 hover:text-brand-navy transition-colors focus:outline-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleBookCall}
            className="px-5 py-2.5 bg-brand-navy text-white text-xs font-semibold tracking-wide rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg focus:outline-none"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-navy focus:outline-none">
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

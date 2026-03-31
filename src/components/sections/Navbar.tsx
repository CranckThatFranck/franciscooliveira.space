import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../LanguageSelector';
import logo from '../../assets/logoFO.png';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#05050A]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <button onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer group">
          <img src={logo} alt="Francisco Oliveira" className="w-8 h-8 object-contain animate-[pulse_4s_ease-in-out_infinite] group-hover:scale-110 transition-transform" />
          <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
            Francisco Oliveira
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">{t('nav.about')}</a>
          <a href="#ecosystem" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">{t('nav.ecosystem')}</a>
          <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">{t('nav.experience')}</a>
          <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

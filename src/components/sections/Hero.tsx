import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GlowingButton } from '../ui/GlowingButton';
import logoSemFundo from '../../assets/LogoFOsemfundo.png';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8"
      >
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs tracking-widest uppercase font-semibold backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>{t('hero.status')}</span>
          </div>
        </div>

        <div className="mb-6 flex justify-center mt-[-10px] sm:mt-0 relative group">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
          <img 
            src={logoSemFundo} 
            alt="Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
          <span className="text-gradient hover:scale-105 transition-transform duration-500 inline-block">
            {t('hero.title')}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-8"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl font-light leading-relaxed text-gray-300 max-w-3xl mx-auto mb-12"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <GlowingButton href="#ecosystem">
            {t('hero.ctaEcosystem')}
          </GlowingButton>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            {t('hero.ctaContact')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

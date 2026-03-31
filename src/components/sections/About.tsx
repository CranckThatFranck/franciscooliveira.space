import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import euPerfil from '../../assets/euperfil.png';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    t('skills.java'), t('skills.spring'), t('skills.react'),
    t('skills.kotlin'), t('skills.postgres'), t('skills.aws'), t('skills.docker')
  ];

  return (
    <section id="about" className="py-32 relative z-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4 text-center md:text-left"
        >
          {t('about.eyebrow')}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-20 text-center md:text-left"
        >
          {t('about.title')}
        </motion.h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-sm lg:max-w-md relative group"
          >
            {/* Halo background */}
            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-[80px] opacity-20 transform rotate-6 translate-y-8 group-hover:bg-blue-500 transition-colors duration-700" />
            
            <GlassCard className="p-2 md:p-3 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl relative z-20">
              <div className="relative overflow-hidden rounded-[2rem] aspect-square flex items-center justify-center bg-[#05050A]">
                <img 
                  src={euPerfil} 
                  alt="Francisco Oliveira" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-300 mb-10 text-center md:text-left">
              {t('about.description')}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-900/10 text-blue-300 text-sm tracking-wider font-semibold backdrop-blur-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

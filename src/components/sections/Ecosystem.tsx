import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';

import bannerNegocio from '../../assets/bannernegociodebolso.png';
import bannerSuporte from '../../assets/bannersuportedebolso.png';
import gaiaWorksIcon from '../../assets/gaiacomfundo.png';

export const Ecosystem: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'negocio',
      img: bannerNegocio,
      title: t('ecosystem.negocioPocket'),
      desc: t('ecosystem.negocioDesc'),
      contain: false,
      delay: 0.1,
    },
    {
      id: 'suporte',
      img: bannerSuporte,
      title: t('ecosystem.suportePocket'),
      desc: t('ecosystem.suporteDesc'),
      contain: false,
      delay: 0.3,
    },
    {
      id: 'gaia',
      img: gaiaWorksIcon,
      title: t('ecosystem.gaiaWorks'),
      desc: t('ecosystem.gaiaDesc'),
      contain: true,
      delay: 0.5,
    }
  ];

  return (
    <section id="ecosystem" className="py-32 relative z-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4 text-center"
        >
          {t('ecosystem.eyebrow')}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
        >
          {t('ecosystem.title')}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: project.delay }}
              className="group h-full"
            >
              <GlassCard className="h-full min-h-[460px] flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-xl bg-[#0a0f1a] mb-6 aspect-video flex-shrink-0">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className={`w-full h-full ${project.contain ? 'object-contain' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700 ease-out`} 
                  />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 text-center w-full">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center w-full flex-grow">
                  {project.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

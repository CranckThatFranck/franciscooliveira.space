import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  role: string;
  date: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, role, date, children, isOpen, onToggle }) => {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-4 bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-white/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <h4 className="text-xl md:text-2xl font-bold text-white">{title}</h4>
          <span className="text-blue-400 font-medium md:text-lg">{role}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-500 text-sm tracking-wider">{date}</span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} 
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 pt-2 text-gray-300 border-t border-white/5">
              <span className="md:hidden block text-gray-500 text-sm tracking-wider mb-6">{date}</span>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const experiences = [
    {
      company: t('experience.wex'),
      role: t('experience.wexRole'),
      date: t('experience.wexDate'),
      desc: t('experience.wexDesc', { returnObjects: true }) as string[],
    },
    {
      company: t('experience.jtech'),
      role: t('experience.jtechRole'),
      date: t('experience.jtechDate'),
      desc: t('experience.jtechDesc', { returnObjects: true }) as string[],
    },
    {
      company: t('experience.serverdoin'),
      role: t('experience.serverRole'),
      date: t('experience.serverDate'),
      desc: t('experience.serverDesc', { returnObjects: true }) as string[],
    },
    {
      company: t('experience.softplan'),
      role: t('experience.softplanRole'),
      date: t('experience.softplanDate'),
      desc: t('experience.softplanDesc', { returnObjects: true }) as string[],
    }
  ];

  const academic = [
    t('experience.estacio'),
    t('experience.unopar'),
    t('experience.focus'),
    t('experience.anhembi'),
  ];

  return (
    <section id="experience" className="py-32 relative z-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4 text-center"
        >
          {t('experience.eyebrow')}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          {t('experience.title')}
        </motion.h3>

        <div className="mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem
                title={exp.company}
                role={exp.role}
                date={exp.date}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <ul className="list-disc pl-5 space-y-3 text-gray-300 leading-relaxed text-base md:text-lg marker:text-blue-500">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </AccordionItem>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16"
        >
          <div>
            <h4 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 block w-fit">
              {t('experience.otherHeader')}
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed">{t('experience.otherDesc')}</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 block w-fit">
              {t('experience.academic')}
            </h4>
            <ul className="space-y-4">
              {academic.map((school, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  <span className="text-gray-300">{school}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

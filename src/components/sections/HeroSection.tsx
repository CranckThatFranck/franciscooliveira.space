import { motion } from 'framer-motion';
import { GlowingButton } from '../ui/GlowingButton';
import logoFO from '../../assets/logoFO.svg';

export function HeroSection() {
  return (
    <section className="grid items-center gap-10 pt-12 md:grid-cols-[1.4fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-eyebrow">Comando Central</p>
        <h1 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Olá, eu sou Francisco Oliveira
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-platina-300 md:text-4xl">
          Engenheiro de Software & Arquiteto de Soluções
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-platina-300">
          Da infraestrutura de servidores ao desenvolvimento Full-Stack, forjando ecossistemas digitais com elegância
          e precisão.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <GlowingButton href="#ecosystem">Ver Ecossistema</GlowingButton>
          <GlowingButton href="/Profile.pdf" variant="ghost" download>
            Download CV
          </GlowingButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />
        <img src={logoFO} alt="FO Orbital logo" className="relative mx-auto w-72 max-w-full" />
      </motion.div>
    </section>
  );
}

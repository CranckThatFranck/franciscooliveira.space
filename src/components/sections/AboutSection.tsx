import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import gaiaIcon from '../../assets/GaiaWorksIcon.svg';
import profileImage from '../../assets/euperfil.svg';

export function AboutSection() {
  return (
    <section className="space-y-8">
      <div>
        <p className="section-eyebrow">Sobre a Musa & o Criador</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">Gaia Works: luxo, precisão e espaço profundo.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard eyebrow="A Musa" title="Gaia — Chief Happiness Officer">
            <img src={gaiaIcon} alt="Gaia Works Icon" className="mb-5 w-24 rounded-2xl" />
            <p className="text-platina-300">
              Gaia é a energia afetiva da empresa: acompanha madrugadas de arquitetura, exige pausas inteligentes e
              lembra que grandes sistemas também precisam de calor humano.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          <GlassCard eyebrow="O Criador" title="Francisco Oliveira">
            <img src={profileImage} alt="Francisco Oliveira" className="mb-5 w-28 rounded-2xl border border-white/10" />
            <p className="text-platina-300">
              Tech Lead Full-Stack com DNA em backend, apps mobile e infraestrutura Linux. Comunicação técnica 100% em
              inglês, foco em clareza arquitetural e execução pragmática.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

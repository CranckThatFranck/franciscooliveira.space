import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const stack = ['Java', 'Kotlin', 'React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker'];

export function EducationSection() {
  return (
    <section className="pb-16">
      <p className="section-eyebrow">Formação Acadêmica & Stack Técnica</p>
      <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">Base acadêmica sólida, execução de alto nível</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <GlassCard title="Stack Principal">
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-platina-300">
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard title="Educação">
            <ul className="space-y-2 text-platina-300">
              <li>Bacharelado em Engenharia de Software — Estácio</li>
              <li>Pós-graduação em UI/UX — UNOPAR</li>
              <li>Pós-graduação em Desenvolvimento Web — Focus</li>
              <li>Graduação em Análise de Sistemas — Anhembi Morumbi</li>
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

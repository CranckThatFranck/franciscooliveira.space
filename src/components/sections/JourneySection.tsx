import { motion } from 'framer-motion';

const timeline = [
  'WEX — Engenheiro de Software Júnior (Atual): Java Spring Boot, React, Python, AWS (EC2/S3), Jira, GitHub.',
  'Jtech — Analista de TI: PostgreSQL avançado (CTEs/subconsultas), logs tracking e diagnósticos via DevTools.',
  'ServerDo.in — Analista de Infraestrutura: Linux, cPanel/WHM, Cloudflare, AWS EC2, Docker.',
  'Softplan — Analista de TI N2: Suporte ao Sistema de Automatização da Justiça (SAJ).',
  'SCC4 — Analista de Suporte Técnico: liderança em testes e QA para medição ultrassônica.',
  'WeDo Technologies / NEXTAR — Analista de BD e TI: Oracle, MySQL e ambientes RedHat.',
];

export function JourneySection() {
  return (
    <section>
      <p className="section-eyebrow">Jornada Profissional</p>
      <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">Linha do tempo futurista</h2>
      <div className="relative mt-10 space-y-8 border-l border-blue-500/30 pl-8">
        {timeline.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-[2.25rem] top-1 h-4 w-4 rounded-full border border-blue-300 bg-blue-500/50" />
            <p className="text-platina-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

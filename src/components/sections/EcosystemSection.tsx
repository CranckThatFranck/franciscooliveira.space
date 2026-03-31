import { motion } from 'framer-motion';
import { AppWindowMac, Boxes, Cable, Database, Mail, Server } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import bannerNegocio from '../../assets/banner-negocio.svg';
import bannerSuporte from '../../assets/banner-suporte.svg';

const architectureCards = [
  {
    title: 'Backend & Infra',
    icon: Server,
    text: 'API RESTful em Java Spring Boot + PostgreSQL, VPS Linux provisionada do zero com Docker, Nginx, proxy reverso, SSL e gestão autônoma de webmail (cPanel/Zimbra + IMAP IDLE).',
  },
  {
    title: 'Tempo Real',
    icon: Cable,
    text: 'Mensageria WebSocket com STOMP/SockJS e fallback arquitetado para manter fluidez operacional em cenários críticos.',
  },
  {
    title: 'Negócio de Bolso',
    icon: AppWindowMac,
    text: 'App Android nativo em Kotlin + Jetpack Compose para gestão de vendas e operação em campo.',
  },
  {
    title: 'Suporte de Bolso',
    icon: Mail,
    text: 'App Android de helpdesk em tempo real conectado ao ecossistema interno, sincronizando provedores de e-mail ao banco próprio.',
  },
  {
    title: 'Web & Deploy',
    icon: Boxes,
    text: 'Landing pages modernas em negociodebolso.com e app.negociodebolso.com via GitHub Pages, CI/CD e DNS customizado.',
  },
  {
    title: 'Dados & Resiliência',
    icon: Database,
    text: 'Modelo relacional e observabilidade orientados à consistência de dados, rastreabilidade e manutenção evolutiva.',
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="space-y-8">
      <div>
        <p className="section-eyebrow">A Joia da Coroa</p>
        <h2 className="mt-3 font-display text-3xl font-black md:text-5xl">GAIA 2.0 — Ecossistema Enterprise Solo-Built</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <img src={bannerNegocio} alt="Banner Negócio de Bolso" className="glass rounded-2xl" />
        <img src={bannerSuporte} alt="Banner Suporte de Bolso" className="glass rounded-2xl" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {architectureCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard title={card.title}>
              <card.icon className="mb-4 h-6 w-6 text-blue-400" />
              <p className="text-platina-300">{card.text}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

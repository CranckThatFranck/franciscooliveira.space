import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Send } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GlowingButton } from '../ui/GlowingButton';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contato@franciscooliveira.space?subject=Contato via Site&body=Nome: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0A%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="contact" className="py-32 relative z-10 px-4 md:px-8 bg-gradient-to-b from-transparent to-[#0a0f1a] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
              {t('contact.title')}
            </span>
          </h2>
          
          <div className="mb-12">
            <a
              href="mailto:contato@franciscooliveira.space"
              className="inline-flex items-center justify-center lg:justify-start gap-4 text-2xl md:text-3xl font-light text-blue-300 hover:text-white transition-colors group"
            >
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all transform group-hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                <Mail className="w-8 h-8" />
              </div>
              <span className="tracking-wide">contato@franciscooliveira.space</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <a 
              href="https://linkedin.com/in/joaofranciscodeoliveiraneto" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <LinkedinIcon className="w-6 h-6 text-[#0A66C2] group-hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)]" />
              <span className="font-semibold uppercase tracking-wider text-gray-300 group-hover:text-white">{t('contact.linkedin')}</span>
            </a>

            <a 
              href="https://github.com/CranckThatFranck" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gray-400/50 transition-all group"
            >
              <GithubIcon className="w-6 h-6 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="font-semibold uppercase tracking-wider text-gray-300 group-hover:text-white">{t('contact.github')}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <GlassCard className="p-8 md:p-10 border border-blue-500/20 shadow-[0_0_50px_rgba(29,78,216,0.1)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase tracking-widest text-gray-400 font-semibold">{t('contact.formName')}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase tracking-widest text-gray-400 font-semibold">{t('contact.formEmail')}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm uppercase tracking-widest text-gray-400 font-semibold">{t('contact.formMessage')}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-white outline-none transition-all resize-none placeholder:text-gray-600"
                  placeholder="Hello Francisco..."
                ></textarea>
              </div>
              <div className="mt-4">
                <GlowingButton type="submit" className="w-full">
                  <span className="flex items-center justify-center gap-3 w-full">
                    <span>{t('contact.formSend')}</span>
                    <Send className="w-5 h-5" />
                  </span>
                </GlowingButton>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col items-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Francisco Oliveira. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

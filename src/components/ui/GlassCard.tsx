import type { ReactNode } from 'react';

interface GlassCardProps {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function GlassCard({ title, eyebrow, children, className = '' }: GlassCardProps) {
  return (
    <article className={`glass rounded-2xl p-6 shadow-[0_0_50px_rgba(59,130,246,0.12)] ${className}`}>
      {eyebrow ? <p className="section-eyebrow mb-2">{eyebrow}</p> : null}
      {title ? <h3 className="mb-4 font-display text-2xl font-extrabold text-white">{title}</h3> : null}
      {children}
    </article>
  );
}

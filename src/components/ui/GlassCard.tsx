import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, glowOnHover = true }) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300",
        glowOnHover && "hover:shadow-[0_0_30px_rgba(29,78,216,0.15)] hover:border-white/10 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

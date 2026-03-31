import type { AnchorHTMLAttributes } from 'react';

interface GlowingButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost';
}

export function GlowingButton({ variant = 'primary', className = '', children, ...props }: GlowingButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-electric-500 text-white glow hover:bg-electric-700 hover:shadow-[0_0_48px_rgba(59,130,246,0.55)]',
    ghost: 'border border-white/20 bg-white/5 text-platina-300 hover:border-blue-400 hover:text-white',
  };

  return (
    <a className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

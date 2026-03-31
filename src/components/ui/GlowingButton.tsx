import React from 'react';
import { cn } from '../../utils/cn';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({ children, href, className, ...props }) => {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center px-8 py-4",
    "font-semibold text-white",
    "transition-all duration-300 rounded-full",
    "bg-gradient-to-r from-blue-700 to-blue-500",
    "shadow-[0_0_20px_rgba(29,78,216,0.5)]",
    "hover:shadow-[0_0_40px_rgba(29,78,216,0.8)]",
    "hover:-translate-y-1 overflow-hidden group",
    className
  );

  const InnerGlow = (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full pointer-events-none" />
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} target={props.target} rel={props.rel}>
        {InnerGlow}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {InnerGlow}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

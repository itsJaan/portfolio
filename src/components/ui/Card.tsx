import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export const Card = ({ children, className = '', interactive = false }: CardProps) => (
  <div
    className={`rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8 ${
      interactive ? 'transition hover:border-sky-400/30 hover:bg-white/[0.07]' : ''
    } ${className}`}
  >
    {children}
  </div>
);

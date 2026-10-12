import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'light';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  download?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-sky-500 text-white hover:bg-sky-400',
  secondary: 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
  light: 'bg-white text-slate-950 hover:bg-slate-200',
};

export const Button = ({ href, children, variant = 'secondary', external = false, download = false }: ButtonProps) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    download={download || undefined}
    className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition ${variants[variant]}`}
  >
    {children}
  </a>
);

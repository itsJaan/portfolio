import type { Lang, LinkItem } from '../types';

// Datos que no cambian con el idioma
export const profile = {
  name: 'Javier Nuñez',
  email: 'nunez0467@gmail.com',
  whatsapp: '50499490507',
  siteUrl: 'https://javier-nunez.dev',
};

export const socialLinks: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/itsJaan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-nunez-709318162/' },
];

export const cvLinks: Record<Lang, string> = {
  en: '/cv/Javier_Nunez_CV_EN.pdf',
  es: '/cv/Javier_Nunez_CV_ES.pdf',
};

export const langPaths: Record<Lang, string> = {
  en: '/',
  es: '/es/',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;

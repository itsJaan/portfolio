import type { LinkItem } from '../types';

export const profile = {
  name: 'Javier Nuñez',
  role: 'Full Stack Developer',
  tagline: 'SaaS & Mobile · React · React Native · NestJS',
  intro:
    'Full Stack Developer and Mobile Lead with 4+ years building production web and mobile applications. I specialize in real-time GPS tracking platforms and build SaaS products for SMBs under my personal brand, CodingIQ.',
  location: 'Honduras · Remote',
  email: 'nunez0467@gmail.com',
  availability: 'Open to full-time remote opportunities with teams in LATAM or North America.',
};

export const socialLinks: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/itsJaan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-nunez-709318162/' },
];

export const cvLinks: LinkItem[] = [
  { label: 'CV (EN)', href: '/cv/Javier_Nunez_CV_EN.pdf' },
  { label: 'CV (ES)', href: '/cv/Javier_Nunez_CV_ES.pdf' },
];

export const stats = [
  { value: '4+', label: 'Years building in production' },
  { value: '2', label: 'Apps on App Store & Google Play' },
  { value: '3', label: 'SaaS products built' },
  { value: '100%', label: 'Remote, U.S. & LATAM clients' },
];

export const about = [
  'I build products end to end: database and REST APIs with NestJS and Supabase, web apps with React, and mobile apps with React Native, through release on the App Store and Google Play.',
  'Most of my work lives where software meets operations: live GPS tracking, route history, field teams, payroll hours, invoicing and dashboards that businesses rely on every day.',
];

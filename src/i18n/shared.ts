import type { ProjectImage, SideProject } from '../types';

export const gallery = (slug: string, items: [string, string][]): ProjectImage[] =>
  items.map(([file, caption]) => ({ src: `/projects/${slug}/${file}.webp`, caption }));

export const stacks = {
  brightcoat: ['React', 'TypeScript', 'Vite', 'Tailwind', 'React Native CLI', 'Supabase'],
  assistiq: ['NestJS', 'Prisma', 'React', 'TypeScript', 'Supabase', 'Vercel'],
  contaiq: ['NestJS 11', 'Prisma', 'React 19', 'Zustand', 'TanStack Query', 'Supabase', 'Railway'],
  optimus: ['React Native', 'TypeScript', 'TransistorSoft', 'Maps'],
  inventiq: ['React 19', 'TypeScript', 'Tailwind v4', 'Recharts', 'Vite'],
};

type SideProjectBase = Omit<SideProject, 'description'>;

export const sideProjectBase: SideProjectBase[] = [
  {
    title: 'React Native Tracking Demo',
    stack: ['React Native', 'TypeScript', 'Maps'],
    github: 'https://github.com/itsJaan/ReactNativeTrackingDemo',
  },
  {
    title: 'Realtime Dashboard',
    stack: ['React', 'TypeScript', 'Recharts'],
    github: 'https://github.com/itsJaan/RealTimeDashboard',
  },
  {
    title: 'Check-in Monitoring Dashboard',
    stack: ['React', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/itsJaan/ChekkuTest-Dashboard',
  },
];

export const withDescriptions = (descriptions: string[]): SideProject[] =>
  sideProjectBase.map((project, index) => ({ ...project, description: descriptions[index] }));

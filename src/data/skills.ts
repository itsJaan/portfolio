import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Styled Components', 'Vite'] },
  { label: 'Mobile', items: ['React Native CLI', 'Expo', 'Background geolocation', 'Maps', 'App Store / Google Play'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'Prisma', 'REST APIs', 'Loopback'] },
  { label: 'Data & Cloud', items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Vercel', 'Railway', 'DigitalOcean'] },
  { label: 'State & Tooling', items: ['Zustand', 'TanStack Query', 'Context API', 'Git', 'Xcode', 'Android Studio'] },
];

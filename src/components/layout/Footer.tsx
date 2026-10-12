import { profile } from '../../data/profile';

export const Footer = () => (
  <footer className="mt-16 border-t border-white/5 py-8 text-center text-xs text-slate-500">
    © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript and Tailwind CSS
  </footer>
);

import { profile } from '../../data/profile';
import { useContent } from '../../i18n';

export const Footer = () => {
  const { footer } = useContent();
  return (
    <footer className="mt-16 border-t border-white/5 py-8 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} {profile.name} · {footer}
    </footer>
  );
};

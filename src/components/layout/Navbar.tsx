import { langPaths, profile } from '../../data/profile';
import { useContent } from '../../i18n';

export const Navbar = () => {
  const { lang, nav } = useContent();
  const otherLang = lang === 'en' ? 'es' : 'en';

  const navItems = [
    { label: nav.projects, href: '#projects' },
    { label: nav.services, href: '#services' },
    { label: nav.experience, href: '#experience' },
    { label: nav.about, href: '#about' },
  ];

  return (
    <nav className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8 lg:px-10">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {profile.name}
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={langPaths[otherLang]}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={nav.switchLabel}
            title={nav.switchLabel}
            className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-white/25 hover:text-white"
          >
            {nav.switchTo}
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-400"
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
};

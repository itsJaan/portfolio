import { cvLinks, profile } from '../../data/profile';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => (
  <nav className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8 lg:px-10">
      <a href="#top" className="text-sm font-semibold tracking-tight text-white">
        {profile.name}
      </a>
      <div className="flex items-center gap-6">
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
          href={cvLinks[0].href}
          download
          className="rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-400"
        >
          Download CV
        </a>
      </div>
    </div>
  </nav>
);

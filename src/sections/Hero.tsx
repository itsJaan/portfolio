import { cvLinks, profile, socialLinks } from '../data/profile';
import { useContent } from '../i18n';
import { Button, StatCard } from '../components/ui';
import { DownloadIcon } from '../components/ui/icons';

export const Hero = () => {
  const { lang, hero, stats } = useContent();

  return (
    <header id="top" className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{hero.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-4 text-base font-medium text-slate-400 md:text-lg">
            {profile.name} · {hero.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">{hero.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#services" variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href={cvLinks[lang]} download>
              <DownloadIcon />
              {hero.hiringCta}
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-400 underline-offset-4 transition hover:text-white hover:underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:w-[340px] lg:shrink-0">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </header>
  );
};

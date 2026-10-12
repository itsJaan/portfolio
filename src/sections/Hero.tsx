import { cvLinks, profile, socialLinks, stats } from '../data/profile';
import { Button, StatCard } from '../components/ui';

export const Hero = () => (
  <header id="top" className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
    <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{profile.role}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-base font-medium text-slate-400 md:text-lg">{profile.tagline}</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">{profile.intro}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`} variant="primary">
            Contact Me
          </Button>
          {cvLinks.map((cv) => (
            <Button key={cv.href} href={cv.href} download>
              {cv.label}
            </Button>
          ))}
          {socialLinks.map((link) => (
            <Button key={link.href} href={link.href} external>
              {link.label}
            </Button>
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

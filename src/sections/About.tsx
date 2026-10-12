import { about } from '../data/profile';
import { skillGroups } from '../data/skills';
import { Card, SectionTitle, TagList } from '../components/ui';

export const About = () => (
  <section id="about" className="mt-16 grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1fr]">
    <Card>
      <SectionTitle eyebrow="About" title="What I work on" />
      {about.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
          {paragraph}
        </p>
      ))}
    </Card>

    <Card>
      <SectionTitle eyebrow="Core Skills" title="Technical stack" />
      <div className="mt-5 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{group.label}</p>
            <TagList items={group.items} />
          </div>
        ))}
      </div>
    </Card>
  </section>
);

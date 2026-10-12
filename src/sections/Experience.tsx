import { experience } from '../data/experience';
import { ExperienceItem } from '../components/ExperienceItem';
import { Card, SectionTitle } from '../components/ui';

export const Experience = () => (
  <section id="experience" className="mt-16 scroll-mt-24">
    <Card>
      <SectionTitle eyebrow="Experience" title="Where I’ve worked" />
      <ol className="relative mt-8 space-y-10 before:absolute before:left-[5px] before:top-3 before:bottom-3 before:w-px before:bg-white/10">
        {experience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
        ))}
      </ol>
    </Card>
  </section>
);

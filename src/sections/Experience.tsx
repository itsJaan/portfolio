import { useContent } from '../i18n';
import { ExperienceItem } from '../components/ExperienceItem';
import { Card, SectionTitle } from '../components/ui';

export const Experience = () => {
  const { experience } = useContent();

  return (
    <section id="experience" className="mt-16 scroll-mt-24">
      <Card>
        <SectionTitle eyebrow={experience.eyebrow} title={experience.title} />
        <ol className="relative mt-8 space-y-10 before:absolute before:left-[5px] before:top-3 before:bottom-3 before:w-px before:bg-white/10">
          {experience.items.map((item) => (
            <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
          ))}
        </ol>
      </Card>
    </section>
  );
};

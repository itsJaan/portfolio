import { useContent } from '../i18n';
import { Card, SectionTitle } from '../components/ui';

// Se oculta mientras no haya testimonios aprobados en src/i18n/en.ts y es.ts
export const Testimonials = () => {
  const { testimonials } = useContent();
  if (testimonials.items.length === 0) return null;

  return (
    <section id="testimonials" className="mt-16 scroll-mt-24">
      <SectionTitle eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <div className={`mt-6 grid gap-6 ${testimonials.items.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {testimonials.items.map((item) => (
          <Card key={item.author}>
            <figure>
              <blockquote className="text-base leading-8 text-slate-200 md:text-xl">“{item.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-300">
                  {item.author
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span>
                  <span className="block font-semibold text-white">{item.author}</span>
                  <span className="block text-sm text-slate-400">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          </Card>
        ))}
      </div>
    </section>
  );
};

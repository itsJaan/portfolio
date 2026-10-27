import { useContent } from '../i18n';
import { Card, SectionTitle } from '../components/ui';

// Se oculta mientras no haya testimonios aprobados en src/i18n/en.ts y es.ts
export const Testimonials = () => {
  const { testimonials } = useContent();
  if (testimonials.items.length === 0) return null;

  return (
    <section id="testimonials" className="mt-16 scroll-mt-24">
      <SectionTitle eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {testimonials.items.map((item) => (
          <Card key={item.author}>
            <figure>
              <blockquote className="text-base leading-7 text-slate-200 md:text-lg">“{item.quote}”</blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </figcaption>
            </figure>
          </Card>
        ))}
      </div>
    </section>
  );
};

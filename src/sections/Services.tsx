import { useContent } from '../i18n';
import { Button, Card, SectionTitle } from '../components/ui';

export const Services = () => {
  const { services } = useContent();

  return (
    <section id="services" className="mt-16 scroll-mt-24">
      <SectionTitle eyebrow={services.eyebrow} title={services.title} />
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">{services.intro}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {services.items.map((service) => (
          <Card key={service.title} interactive className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                  {point}
                </li>
              ))}
            </ul>
            {service.example ? <p className="mt-auto pt-5 text-xs font-medium text-sky-300/80">{service.example}</p> : null}
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{services.processTitle}</h3>
        <ol className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.process.map((step, index) => (
            <li key={step.title}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/40 text-sm font-semibold text-sky-300">
                {index + 1}
              </span>
              <p className="mt-3 font-semibold text-white">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-7">
          <Button href="#contact" variant="primary">
            {services.cta}
          </Button>
        </div>
      </Card>
    </section>
  );
};

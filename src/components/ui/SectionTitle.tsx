type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export const SectionTitle = ({ eyebrow, title }: SectionTitleProps) => (
  <div>
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">{eyebrow}</p>
    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
  </div>
);

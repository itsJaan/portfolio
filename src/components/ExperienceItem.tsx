import type { Experience } from '../types';

export const ExperienceItem = ({ item }: { item: Experience }) => (
  <li className="relative pl-8">
    <span className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950" />
    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
      <h3 className="text-lg font-semibold text-white">{item.role}</h3>
      <p className="text-sm text-slate-500">{item.period}</p>
    </div>
    <p className="text-sm font-medium text-sky-300/80">{item.company}</p>
    {item.summary ? <p className="mt-2 text-sm italic text-slate-400">{item.summary}</p> : null}
    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
      {item.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-2">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
          {highlight}
        </li>
      ))}
    </ul>
  </li>
);

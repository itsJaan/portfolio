import type { Project } from '../types';
import { ProjectMediaPreview } from './ProjectMediaPreview';
import { Button, Card, StatusBadge, TagList } from './ui';

export const ProjectCard = ({ project }: { project: Project }) => {
  const hasVisual = Boolean(project.media || project.illustration);
  const isFeatured = Boolean(project.featured && hasVisual);

  return (
    <Card
      interactive
      className={`flex h-full flex-col gap-6 ${isFeatured ? 'md:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-8' : ''}`}
    >
      {hasVisual ? <ProjectMediaPreview project={project} /> : null}

      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{project.category}</p>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        {project.client ? <p className="mt-1 text-sm text-sky-300/80">{project.client}</p> : null}

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-slate-400">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <TagList items={project.stack} />
          {project.links?.length || project.note ? (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {project.links?.map((link) => (
                <Button key={link.href} href={link.href} variant="light" external>
                  {link.label}
                </Button>
              ))}
              {project.note ? <span className="text-xs text-slate-500">{project.note}</span> : null}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

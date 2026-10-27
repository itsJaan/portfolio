import { useContent } from '../i18n';
import { ProjectCard } from '../components/ProjectCard';
import { SectionTitle, TagList } from '../components/ui';

export const Projects = () => {
  const { projects } = useContent();

  return (
    <section id="projects" className="mt-16 scroll-mt-24">
      <SectionTitle eyebrow={projects.eyebrow} title={projects.title} />
      <p className="mt-3 text-sm text-slate-400 md:text-base">{projects.intro}</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{projects.sideTitle}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.side.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-sky-400/30 hover:bg-white/[0.06]"
          >
            <p className="font-semibold text-white">
              {project.title} <span className="text-slate-500 transition group-hover:text-sky-400">↗</span>
            </p>
            <p className="mt-2 mb-4 text-sm leading-6 text-slate-400">{project.description}</p>
            <div className="mt-auto">
              <TagList items={project.stack} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

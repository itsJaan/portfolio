import { useState } from 'react';
import type { Project } from '../types';
import { TrackingIllustration } from './illustrations/TrackingIllustration';
import { Lightbox } from './ui';

const illustrations = {
  tracking: TrackingIllustration,
};

type ProjectMediaPreviewProps = {
  project: Project;
  className?: string;
};

export const ProjectMediaPreview = ({ project, className = '' }: ProjectMediaPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { media, illustration } = project;
  const frame = `relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 ${className}`;

  if (media) {
    return (
      <>
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className={`${frame} group block w-full text-left`}
          aria-label={`Open ${project.title} screenshots`}
        >
          <img
            src={media.cover}
            alt={media.gallery[0]?.caption ?? project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/90 to-transparent px-4 pb-3 pt-10 text-xs font-medium text-white">
            <span>View screenshots</span>
            <span className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur">{media.gallery.length} images</span>
          </span>
        </button>

        {activeIndex !== null ? (
          <Lightbox
            title={project.title}
            images={media.gallery}
            index={activeIndex}
            onChange={setActiveIndex}
            onClose={() => setActiveIndex(null)}
          />
        ) : null}
      </>
    );
  }

  if (illustration) {
    const Illustration = illustrations[illustration];
    return (
      <div className={frame}>
        <Illustration />
      </div>
    );
  }

  return null;
};

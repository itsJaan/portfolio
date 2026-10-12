export type LinkItem = {
  label: string;
  href: string;
};

export type ProjectStatus = 'Production' | 'Beta' | 'In development' | 'Demo';

export type ProjectImage = {
  src: string;
  caption: string;
};

export type ProjectMedia = {
  cover: string;
  gallery: ProjectImage[];
};

export type ProjectIllustration = 'tracking';

export type Project = {
  slug: string;
  title: string;
  category: string;
  client?: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  stack: string[];
  links?: LinkItem[];
  note?: string;
  media?: ProjectMedia;
  illustration?: ProjectIllustration;
  featured?: boolean;
};

export type SideProject = {
  title: string;
  description: string;
  stack: string[];
  github: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary?: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

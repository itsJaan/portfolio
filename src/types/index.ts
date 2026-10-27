export type Lang = 'en' | 'es';

export type LinkItem = {
  label: string;
  href: string;
};

export type ProjectStatus = 'production' | 'beta' | 'development' | 'demo';

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

export type Service = {
  title: string;
  description: string;
  points: string[];
  example?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Content = {
  lang: Lang;
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    locale: string;
  };
  nav: {
    projects: string;
    services: string;
    experience: string;
    about: string;
    cta: string;
    switchTo: string;
    switchLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    tagline: string;
    intro: string;
    primaryCta: string;
    hiringCta: string;
  };
  stats: Stat[];
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Project[];
    sideTitle: string;
    side: SideProject[];
    status: Record<ProjectStatus, string>;
    viewScreenshots: string;
    images: string;
    openScreenshots: (title: string) => string;
    gallery: {
      close: string;
      closeLabel: string;
      prev: string;
      next: string;
      goTo: (n: number) => string;
      screenshots: (title: string) => string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Service[];
    processTitle: string;
    process: ProcessStep[];
    cta: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Testimonial[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Experience[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    skillsEyebrow: string;
    skillsTitle: string;
    skills: SkillGroup[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    clients: {
      title: string;
      description: string;
      whatsapp: string;
      whatsappMessage: string;
      email: string;
    };
    hiring: {
      title: string;
      description: string;
      cv: string;
      cvOther: string;
    };
    location: string;
  };
  footer: string;
  whatsappFloat: string;
};

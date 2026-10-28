import type { Content } from '../types';
import { gallery, stacks, withDescriptions } from './shared';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Javier Nuñez — Full Stack & Mobile Developer | GPS Tracking & Custom Business Software',
    description:
      'Full Stack & Mobile Developer from Honduras. I build GPS tracking apps, custom business platforms and SaaS products with React, React Native and NestJS — for companies and as part of remote teams.',
    ogDescription:
      'GPS tracking apps, custom business software and SaaS — web & mobile, end to end. Available for client projects and remote roles.',
    locale: 'en_US',
  },
  nav: {
    projects: 'Projects',
    services: 'Services',
    experience: 'Experience',
    about: 'About',
    cta: 'Let’s talk',
    switchTo: 'ES',
    switchLabel: 'Ver en español',
  },
  hero: {
    eyebrow: 'Full Stack & Mobile Developer',
    headline: 'I build GPS tracking apps and custom software that businesses run on every day.',
    tagline: 'React · React Native · NestJS · TypeScript',
    intro:
      'I’m Javier, a developer from Honduras with 4+ years shipping production web and mobile apps — from the database to the App Store. I lead mobile development for a fleet-tracking company and build operations platforms and SaaS products for small and mid-sized businesses.',
    primaryCta: 'Start a project',
    hiringCta: 'Hiring? Download CV',
  },
  stats: [
    { value: '4+', label: 'Years shipping to production' },
    { value: '500+', label: 'Vehicles tracked for a single client' },
    { value: 'Daily', label: 'Client platform in use by a U.S. contractor' },
    { value: 'EN · ES', label: 'Bilingual, remote with U.S. & LATAM' },
  ],
  projects: {
    eyebrow: 'Portfolio',
    title: 'Products I’ve built',
    intro: 'Real products for real operations. Client screenshots use sample data.',
    items: [
      {
        slug: 'brightcoat',
        featured: true,
        title: 'BrightCoat Ops',
        category: 'Client project · Web & Mobile',
        client: 'BrightCoat Painting & Remodeling, LLC — Austin, TX',
        status: 'production',
        description:
          'Operations platform that replaced the client’s spreadsheets for jobs, properties, employees, invoicing, expenses and payroll. Designed and built end to end as the sole developer, and used daily by the owner in the field.',
        highlights: [
          'Field scheduling by week, property and employee',
          'Finance: invoicing, expenses and payroll with profit calculation',
          'KPI dashboard with 7 metrics, 5 charts and alerts',
          'Role-based access for owner, finance and staff',
        ],
        stack: stacks.brightcoat,
        note: 'Private client codebase — screenshots use sample data',
        media: {
          cover: '/projects/brightcoat/cover.webp',
          gallery: gallery('brightcoat', [
            ['dashboard', 'Owner dashboard: sales, payroll, expenses, profit and 12-month trends'],
            ['reportes', 'Financial report by date range with weekly sales and service breakdown'],
            ['horarios', 'Weekly field schedule by property, unit, service and employee'],
            ['cobros', 'Invoicing by property: amounts submitted and pending collection'],
            ['operaciones', 'Operations report: completed, pending and cancelled jobs over time'],
            ['propiedades', 'Property management with client type and contact'],
          ]),
        },
      },
      {
        slug: 'optimus',
        illustration: 'tracking',
        title: 'Optimus CA / MagnoTrack & Optimus Rutas',
        category: 'Company product · Seguridad Móvil GPS',
        status: 'production',
        description:
          'Fleet-tracking mobile apps used to monitor vehicles, routes and field personnel in real time, published on the App Store and Google Play. Used by clients in Honduras, Guatemala and Nicaragua — 500+ vehicles for a single client. I lead their architecture, development and releases.',
        highlights: [
          'Live vehicle tracking and route history on maps',
          'Continuous background geolocation',
          'Dashcam photo reports and automated reporting',
        ],
        stack: stacks.optimus,
        note: 'Proprietary company apps — illustration only',
      },
      {
        slug: 'assistiq',
        title: 'AssistIQ',
        category: 'SaaS product · CodingIQ',
        status: 'development',
        description:
          'Multi-tenant attendance and time-tracking system for Honduran companies, from clock-in to biweekly pay reports.',
        highlights: [
          'Three-tier access: super admin, company admin and employees',
          'Kiosk clock-in on shared devices with employee code + PIN',
          'Biweekly hours and pay with day/night rates per company',
          'Automated per-employee PDF reports',
        ],
        stack: stacks.assistiq,
        media: {
          cover: '/projects/assistiq/cover.webp',
          gallery: gallery('assistiq', [
            ['reportes', 'Biweekly hours report with day/night surcharges and total payroll'],
            ['empleados', 'Employee management with clock-in codes, roles and base salary'],
            ['empresas', 'Super admin view: multi-tenant company management with employee limits'],
            ['configuracion', 'Configurable surcharge rules by time band (night shift, early morning)'],
            ['kiosco', 'Shared-device kiosk: employees clock in with code + PIN'],
          ]),
        },
      },
      {
        slug: 'contaiq',
        title: 'ContaIQ',
        category: 'SaaS product · CodingIQ',
        status: 'beta',
        description:
          'Multi-tenant accounting platform for Honduran SMBs with general ledger, automatic journal entries, treasury, taxes and reports.',
        highlights: [
          'Automatic journal entries from expenses and sales',
          'Honduran ISV support (0%, 15%, 18%)',
          'Treasury, tax and financial reports with dashboard',
        ],
        stack: stacks.contaiq,
        media: {
          cover: '/projects/contaiq/cover.webp',
          gallery: gallery('contaiq', [
            ['dashboard', 'Business dashboard: sales, purchases, gross profit and ISV payable'],
            ['journal', 'General journal with balanced, automatically generated entries'],
            ['sales', 'Sales with ISV breakdown and SAR-format invoice numbers'],
            ['income-statement', 'Income statement for any date range'],
            ['accounts', 'Hierarchical chart of accounts with live balances'],
          ]),
        },
      },
      {
        slug: 'inventiq',
        title: 'InventiQ',
        category: 'Frontend · CodingIQ',
        status: 'demo',
        description:
          'Billing and inventory interface for Honduran SMBs, built as a component-driven frontend ready to connect to an API.',
        highlights: [
          'Invoicing with CAI and 15% ISV support',
          'Products, stock alerts and customer records',
          'Sales, inventory and financial reports with charts',
        ],
        stack: stacks.inventiq,
        media: {
          cover: '/projects/inventiq/cover.webp',
          gallery: gallery('inventiq', [
            ['dashboard', 'Dashboard with monthly sales, KPIs and top products'],
            ['invoices', 'Invoice list with payment status and methods'],
            ['products', 'Product catalog with stock levels and pricing'],
            ['clients', 'Customer directory with RTN and purchase history'],
            ['reports', 'Sales, financial and inventory reports'],
          ]),
        },
      },
    ],
    sideTitle: 'Open-source demos',
    side: withDescriptions([
      'Simulated real-time GPS tracking with route progress and tracking stats.',
      'SaaS-style dashboard with live metrics, event monitoring and charts.',
      'Check-in monitoring prototype with filtering and media preview.',
    ]),
    status: {
      production: 'Production',
      beta: 'Beta',
      development: 'In development',
      demo: 'Demo',
    },
    viewScreenshots: 'View screenshots',
    images: 'images',
    openScreenshots: (title) => `Open ${title} screenshots`,
    gallery: {
      close: 'Close',
      closeLabel: 'Close gallery',
      prev: 'Previous screenshot',
      next: 'Next screenshot',
      goTo: (n) => `Go to screenshot ${n}`,
      screenshots: (title) => `${title} screenshots`,
    },
  },
  services: {
    eyebrow: 'Services',
    title: 'What I can build for your business',
    intro:
      'I work directly with owners and small teams: one developer from idea to launch, with clear scope, weekly progress and support after release.',
    items: [
      {
        title: 'Custom business platforms',
        description: 'Replace spreadsheets and scattered tools with one system built around how your team actually works.',
        points: ['Jobs, scheduling and field operations', 'Invoicing, expenses and payroll', 'Dashboards, KPIs and reports', 'Roles and permissions'],
        example: 'Example: BrightCoat Ops',
      },
      {
        title: 'Mobile apps for iOS & Android',
        description: 'One React Native codebase for both platforms, published and maintained on the App Store and Google Play.',
        points: ['Native-feeling UI and offline-friendly flows', 'Push notifications and camera/photo capture', 'Store setup, releases and versioning'],
        example: 'Example: Optimus Rutas',
      },
      {
        title: 'GPS tracking & field teams',
        description: 'Know where your vehicles and people are, what they did and when — in real time.',
        points: ['Live location on maps', 'Continuous background tracking', 'Route history, visits and speed alerts', 'Automated reports'],
        example: 'Example: Optimus CA / MagnoTrack',
      },
      {
        title: 'SaaS products & MVPs',
        description: 'Turn your idea into a product customers can sign up for, with a solid base to grow on.',
        points: ['Multi-tenant architecture', 'Auth, roles and admin panels', 'REST APIs with NestJS', 'Deployment and hosting setup'],
        example: 'Examples: AssistIQ, ContaIQ',
      },
    ],
    processTitle: 'How we’d work together',
    process: [
      { title: 'Free call', description: 'We talk about your business, the problem and what success looks like.' },
      { title: 'Proposal', description: 'You get a clear scope, timeline and fixed price before any work starts.' },
      { title: 'Build with weekly demos', description: 'You see real progress every week and can adjust priorities early.' },
      { title: 'Launch & support', description: 'I deploy, train your team and stay available for fixes and improvements.' },
    ],
    cta: 'Tell me about your project',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What clients say',
    items: [
      {
        quote:
          'Before working with Javier we ran jobs, payroll and invoicing out of spreadsheets. He built us a web and mobile platform tailored to how we actually work, and now I check jobs, crews and numbers from my phone every day in the field. Reliable, responsive, and easy to work with.',
        author: 'David Lopez',
        role: 'Owner, BrightCoat Painting & Remodeling — Austin, TX',
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I’ve worked',
    items: [
      {
        role: 'Full Stack Developer · Mobile Lead',
        company: 'Seguridad Móvil GPS',
        period: 'Dec 2023 – Present',
        highlights: [
          'Lead developer of two React Native fleet-tracking apps (Optimus CA/MagnoTrack and Optimus Rutas) used by clients in Honduras, Guatemala and Nicaragua, including one account with 500+ vehicles.',
          'Real-time GPS tracking, route history, speed-limit monitoring, client visits and automated reports.',
          'Continuous background geolocation with TransistorSoft and map-based UIs for vehicles and field staff.',
          'Leading the Ant Design v4 → v6 migration of the company’s web platforms.',
          'Own versioning and releases on the App Store and Google Play as the platform expands into North America.',
        ],
      },
      {
        role: 'Independent Full Stack Developer',
        company: 'CodingIQ (personal brand)',
        period: '2025 – Present',
        summary: 'Client work and my own SaaS products for SMBs in Honduras and the U.S.',
        highlights: [
          'Sole developer of BrightCoat Ops, a web + mobile operations platform in daily production use for a U.S. contractor.',
          'Building AssistIQ (attendance & payroll hours) and ContaIQ (accounting) as multi-tenant SaaS products.',
        ],
      },
      {
        role: 'Frontend Developer',
        company: 'Chekku',
        period: 'Jul 2022 – Feb 2024',
        highlights: [
          'Led the migration of a legacy AngularJS platform to React.',
          'Built a dynamic check-in/check-out system with client-configurable forms.',
          'Dashboards for visit metrics plus map features with geolocation and markers.',
        ],
      },
      {
        role: 'Software Development Intern',
        company: 'Seguridad Móvil GPS',
        period: 'Jan 2022 – Jun 2022',
        highlights: ['Internal tools and web apps with JavaScript and Node.js, API development and database integration.'],
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'How I work',
    paragraphs: [
      'I build products end to end: database and REST APIs with NestJS and Supabase, web apps with React, and mobile apps with React Native, through release on the App Store and Google Play.',
      'Most of my work lives where software meets operations: live GPS tracking, route history, field teams, payroll hours, invoicing and dashboards that businesses rely on every day.',
    ],
    skillsEyebrow: 'Core skills',
    skillsTitle: 'Technical stack',
    skills: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Styled Components', 'Vite'] },
      { label: 'Mobile', items: ['React Native CLI', 'Expo', 'Background geolocation', 'Maps', 'App Store / Google Play'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'Prisma', 'REST APIs'] },
      { label: 'Data & Cloud', items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Vercel', 'Railway', 'DigitalOcean'] },
      { label: 'State & Tooling', items: ['Zustand', 'TanStack Query', 'Context API', 'Git', 'Xcode', 'Android Studio'] },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something together',
    intro: 'Pick the path that fits — I usually reply within one business day.',
    clients: {
      title: 'Have a project?',
      description: 'Tell me what your business needs. The first call is free and there’s no commitment.',
      whatsapp: 'Message me on WhatsApp',
      whatsappMessage: 'Hi Javier, I saw your portfolio and I’d like to talk about a project.',
      email: 'Or email me',
    },
    hiring: {
      title: 'Hiring?',
      description: 'Open to full-time remote roles with teams in LATAM or North America.',
      cv: 'Download CV (EN)',
      cvOther: 'CV in Spanish',
    },
    location: 'Honduras · Remote (UTC-6)',
  },
  footer: 'Built with React, TypeScript and Tailwind CSS',
  whatsappFloat: 'Chat on WhatsApp',
};

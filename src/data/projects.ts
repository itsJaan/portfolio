import type { Project, ProjectImage, SideProject } from '../types';

const gallery = (slug: string, items: [string, string][]): ProjectImage[] =>
  items.map(([file, caption]) => ({ src: `/projects/${slug}/${file}.webp`, caption }));

export const projects: Project[] = [
  {
    slug: 'brightcoat',
    featured: true,
    title: 'BrightCoat Ops',
    category: 'Client project · Web & Mobile',
    client: 'BrightCoat Painting & Remodeling, LLC — Austin, TX',
    status: 'Production',
    description:
      'Operations platform that replaced the client’s Excel-based tracking of jobs, properties, employees, invoicing, expenses and payroll. Designed and built end to end as the sole developer.',
    highlights: [
      'Field scheduling by week, property and employee',
      'Finance: invoicing, expenses and payroll with profit calculation',
      'KPI dashboard with 7 metrics, 5 charts and alerts',
      'Role-based access for owner, finance and staff',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'React Native CLI', 'Supabase'],
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
    slug: 'assistiq',
    title: 'AssistIQ',
    category: 'SaaS product · CodingIQ',
    status: 'In development',
    description:
      'Custom multi-tenant attendance and time-tracking system for Honduran companies, from clock-in to biweekly pay reports.',
    highlights: [
      'Three-tier access: super admin, company admin and employees',
      'Kiosk clock-in on shared devices with employee code + PIN',
      'Biweekly hours and pay with day/night rates per company',
      'Automated per-employee PDF reports',
    ],
    stack: ['NestJS', 'Prisma', 'React', 'TypeScript', 'Supabase', 'Vercel'],
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
    status: 'Beta',
    description:
      'Multi-tenant accounting platform for Honduran SMBs with general ledger, automatic journal entries, treasury, taxes and reports.',
    highlights: [
      'Automatic journal entries from expenses and sales',
      'Honduran ISV support (0%, 15%, 18%)',
      'Treasury, tax and financial reports with dashboard',
    ],
    stack: ['NestJS 11', 'Prisma', 'React 19', 'Zustand', 'TanStack Query', 'Supabase', 'Railway'],
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
    slug: 'optimus',
    illustration: 'tracking',
    title: 'Optimus CA / MagnoTrack & Optimus Rutas',
    category: 'Company product · Seguridad Móvil GPS',
    status: 'Production',
    description:
      'Fleet-tracking mobile apps used to monitor vehicles, routes and field personnel in real time, published on the App Store and Google Play.',
    highlights: [
      'Live vehicle tracking and route history on maps',
      'Continuous background geolocation',
      'Dashcam photo reports and automated reporting',
    ],
    stack: ['React Native', 'TypeScript', 'TransistorSoft', 'Maps'],
    note: 'Proprietary company apps — illustration only',
  },
  {
    slug: 'inventiq',
    title: 'InventiQ',
    category: 'Frontend · CodingIQ',
    status: 'Demo',
    description:
      'Billing and inventory interface for Honduran SMBs, built as a component-driven frontend ready to connect to an API.',
    highlights: [
      'Invoicing with CAI and 15% ISV support',
      'Products, stock alerts and customer records',
      'Sales, inventory and financial reports with charts',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind v4', 'Recharts', 'Vite'],
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
];

export const sideProjects: SideProject[] = [
  {
    title: 'React Native Tracking Demo',
    description: 'Simulated real-time GPS tracking with route progress and tracking stats.',
    stack: ['React Native', 'TypeScript', 'Maps'],
    github: 'https://github.com/itsJaan/ReactNativeTrackingDemo',
  },
  {
    title: 'Realtime Dashboard',
    description: 'SaaS-style dashboard with live metrics, event monitoring and charts.',
    stack: ['React', 'TypeScript', 'Recharts'],
    github: 'https://github.com/itsJaan/RealTimeDashboard',
  },
  {
    title: 'Chekku Dashboard Demo',
    description: 'Check-in monitoring prototype with filtering and media preview.',
    stack: ['React', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/itsJaan/ChekkuTest-Dashboard',
  },
  {
    title: 'Pokédex',
    description: 'API-driven frontend with reusable components and data visualization.',
    stack: ['React', 'React Query', 'Recharts'],
    github: 'https://github.com/itsJaan/ReactPokedex',
  },
];

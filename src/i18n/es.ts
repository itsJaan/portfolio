import type { Content } from '../types';
import { gallery, stacks, withDescriptions } from './shared';

export const es: Content = {
  lang: 'es',
  meta: {
    title: 'Javier Nuñez — Desarrollador Full Stack y Móvil | Rastreo GPS y Software a la Medida',
    description:
      'Desarrollador Full Stack y Móvil en Honduras. Construyo apps de rastreo GPS, sistemas a la medida y productos SaaS con React, React Native y NestJS para empresas y equipos remotos.',
    ogDescription:
      'Apps de rastreo GPS, sistemas a la medida y SaaS: web y móvil, de principio a fin. Disponible para proyectos y empleo remoto.',
    locale: 'es_HN',
  },
  nav: {
    projects: 'Proyectos',
    services: 'Servicios',
    experience: 'Experiencia',
    about: 'Sobre mí',
    cta: 'Hablemos',
    switchTo: 'EN',
    switchLabel: 'View in English',
  },
  hero: {
    eyebrow: 'Desarrollador Full Stack y Móvil',
    headline: 'Construyo apps de rastreo GPS y sistemas a la medida con los que las empresas operan todos los días.',
    tagline: 'React · React Native · NestJS · TypeScript',
    intro:
      'Soy Javier, desarrollador hondureño con más de 4 años llevando apps web y móviles a producción, desde la base de datos hasta la App Store. Lidero el desarrollo móvil en una empresa de rastreo vehicular y construyo plataformas operativas y productos SaaS para pequeñas y medianas empresas.',
    primaryCta: 'Iniciar un proyecto',
    hiringCta: '¿Reclutando? Descarga mi CV',
  },
  stats: [
    { value: '4+', label: 'Años llevando software a producción' },
    { value: '2', label: 'Apps de rastreo en App Store y Google Play' },
    { value: 'Diario', label: 'Plataforma en uso por un contratista en EE. UU.' },
    { value: 'ES · EN', label: 'Bilingüe, remoto con EE. UU. y LATAM' },
  ],
  projects: {
    eyebrow: 'Portafolio',
    title: 'Productos que he construido',
    intro: 'Productos reales para operaciones reales. Las capturas de clientes usan datos de ejemplo.',
    items: [
      {
        slug: 'brightcoat',
        featured: true,
        title: 'BrightCoat Ops',
        category: 'Proyecto de cliente · Web y móvil',
        client: 'BrightCoat Painting & Remodeling, LLC — Austin, TX',
        status: 'production',
        description:
          'Plataforma operativa que reemplazó las hojas de Excel del cliente para trabajos, propiedades, empleados, facturación, gastos y planilla. Diseñada y construida de principio a fin como único desarrollador, y usada a diario por el dueño en campo.',
        highlights: [
          'Programación de trabajo en campo por semana, propiedad y empleado',
          'Finanzas: facturación, gastos y planilla con cálculo de utilidad',
          'Dashboard de KPIs con 7 métricas, 5 gráficas y alertas',
          'Acceso por roles: dueño, finanzas y personal',
        ],
        stack: stacks.brightcoat,
        note: 'Código privado del cliente — las capturas usan datos de ejemplo',
        media: {
          cover: '/projects/brightcoat/cover.webp',
          gallery: gallery('brightcoat', [
            ['dashboard', 'Dashboard del dueño: ventas, planilla, gastos, utilidad y tendencia de 12 meses'],
            ['reportes', 'Reporte financiero por rango de fechas con ventas semanales y desglose por servicio'],
            ['horarios', 'Horario semanal en campo por propiedad, unidad, servicio y empleado'],
            ['cobros', 'Cobros por propiedad: montos enviados y pendientes de cobro'],
            ['operaciones', 'Reporte operativo: trabajos completados, pendientes y cancelados'],
            ['propiedades', 'Gestión de propiedades con tipo de cliente y contacto'],
          ]),
        },
      },
      {
        slug: 'optimus',
        illustration: 'tracking',
        title: 'Optimus CA / MagnoTrack y Optimus Rutas',
        category: 'Producto de empresa · Seguridad Móvil GPS',
        status: 'production',
        description:
          'Apps móviles de rastreo de flotas para monitorear vehículos, rutas y personal de campo en tiempo real, publicadas en App Store y Google Play. Lidero su arquitectura, desarrollo y publicaciones.',
        highlights: [
          'Rastreo de vehículos en vivo e historial de rutas en mapas',
          'Geolocalización continua en segundo plano',
          'Reportes con fotos de dashcam y reportes automáticos',
        ],
        stack: stacks.optimus,
        note: 'Apps propiedad de la empresa — solo ilustración',
      },
      {
        slug: 'assistiq',
        title: 'AssistIQ',
        category: 'Producto SaaS · CodingIQ',
        status: 'development',
        description:
          'Sistema multiempresa de asistencia y control de horas para empresas hondureñas, desde la marcación hasta el reporte de pago quincenal.',
        highlights: [
          'Tres niveles de acceso: super admin, admin de empresa y empleados',
          'Marcación tipo kiosco en dispositivos compartidos con código + PIN',
          'Horas y pago quincenal con tarifas diurnas y nocturnas por empresa',
          'Reportes PDF automáticos por empleado',
        ],
        stack: stacks.assistiq,
        media: {
          cover: '/projects/assistiq/cover.webp',
          gallery: gallery('assistiq', [
            ['reportes', 'Reporte quincenal de horas con recargos diurnos/nocturnos y total de planilla'],
            ['empleados', 'Gestión de empleados con códigos de marcación, roles y salario base'],
            ['empresas', 'Vista de super admin: gestión multiempresa con límite de empleados'],
            ['configuracion', 'Reglas de recargo configurables por franja horaria (nocturno, madrugada)'],
            ['kiosco', 'Kiosco compartido: los empleados marcan con código + PIN'],
          ]),
        },
      },
      {
        slug: 'contaiq',
        title: 'ContaIQ',
        category: 'Producto SaaS · CodingIQ',
        status: 'beta',
        description:
          'Plataforma contable multiempresa para PYMEs hondureñas con libro mayor, partidas automáticas, tesorería, impuestos y reportes.',
        highlights: [
          'Partidas contables automáticas a partir de gastos y ventas',
          'Soporte de ISV hondureño (0%, 15%, 18%)',
          'Tesorería, impuestos y estados financieros con dashboard',
        ],
        stack: stacks.contaiq,
        media: {
          cover: '/projects/contaiq/cover.webp',
          gallery: gallery('contaiq', [
            ['dashboard', 'Dashboard del negocio: ventas, compras, utilidad bruta e ISV por pagar'],
            ['journal', 'Libro diario con partidas balanceadas generadas automáticamente'],
            ['sales', 'Ventas con desglose de ISV y numeración de facturas formato SAR'],
            ['income-statement', 'Estado de resultados para cualquier rango de fechas'],
            ['accounts', 'Catálogo de cuentas jerárquico con saldos en vivo'],
          ]),
        },
      },
      {
        slug: 'inventiq',
        title: 'InventiQ',
        category: 'Frontend · CodingIQ',
        status: 'demo',
        description:
          'Interfaz de facturación e inventario para PYMEs hondureñas, construida por componentes y lista para conectarse a una API.',
        highlights: [
          'Facturación con CAI e ISV del 15%',
          'Productos, alertas de stock y registro de clientes',
          'Reportes de ventas, inventario y finanzas con gráficas',
        ],
        stack: stacks.inventiq,
        media: {
          cover: '/projects/inventiq/cover.webp',
          gallery: gallery('inventiq', [
            ['dashboard', 'Dashboard con ventas mensuales, KPIs y productos más vendidos'],
            ['invoices', 'Listado de facturas con estado y método de pago'],
            ['products', 'Catálogo de productos con stock y precios'],
            ['clients', 'Directorio de clientes con RTN e historial de compras'],
            ['reports', 'Reportes de ventas, finanzas e inventario'],
          ]),
        },
      },
    ],
    sideTitle: 'Demos de código abierto',
    side: withDescriptions([
      'Rastreo GPS simulado en tiempo real con progreso de ruta y estadísticas.',
      'Dashboard estilo SaaS con métricas en vivo, monitoreo de eventos y gráficas.',
      'Prototipo de monitoreo de check-ins con filtros y vista previa de fotos.',
    ]),
    status: {
      production: 'En producción',
      beta: 'Beta',
      development: 'En desarrollo',
      demo: 'Demo',
    },
    viewScreenshots: 'Ver capturas',
    images: 'imágenes',
    openScreenshots: (title) => `Abrir capturas de ${title}`,
    gallery: {
      close: 'Cerrar',
      closeLabel: 'Cerrar galería',
      prev: 'Captura anterior',
      next: 'Captura siguiente',
      goTo: (n) => `Ir a la captura ${n}`,
      screenshots: (title) => `Capturas de ${title}`,
    },
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Lo que puedo construir para tu empresa',
    intro:
      'Trabajo directamente con dueños y equipos pequeños: un solo desarrollador de la idea al lanzamiento, con alcance claro, avances cada semana y soporte después de entregar.',
    items: [
      {
        title: 'Sistemas a la medida',
        description: 'Reemplaza el Excel y las herramientas dispersas por un solo sistema hecho a la forma en que trabaja tu equipo.',
        points: ['Trabajos, horarios y operación en campo', 'Facturación, gastos y planilla', 'Dashboards, KPIs y reportes', 'Usuarios con roles y permisos'],
        example: 'Ejemplo: BrightCoat Ops',
      },
      {
        title: 'Apps móviles para iOS y Android',
        description: 'Un solo código en React Native para ambas plataformas, publicado y mantenido en App Store y Google Play.',
        points: ['Experiencia nativa y flujos que funcionan con mala señal', 'Notificaciones push y captura de fotos', 'Publicación en tiendas y control de versiones'],
        example: 'Ejemplo: Optimus Rutas',
      },
      {
        title: 'Rastreo GPS y equipos de campo',
        description: 'Sabe dónde están tus vehículos y tu personal, qué hicieron y cuándo, en tiempo real.',
        points: ['Ubicación en vivo en mapas', 'Rastreo continuo en segundo plano', 'Historial de rutas, visitas y alertas de velocidad', 'Reportes automáticos'],
        example: 'Ejemplo: Optimus CA / MagnoTrack',
      },
      {
        title: 'Productos SaaS y MVPs',
        description: 'Convierte tu idea en un producto al que tus clientes se puedan suscribir, con una base sólida para crecer.',
        points: ['Arquitectura multiempresa', 'Autenticación, roles y paneles de administración', 'APIs REST con NestJS', 'Despliegue y hosting'],
        example: 'Ejemplos: AssistIQ, ContaIQ',
      },
    ],
    processTitle: 'Cómo trabajaríamos',
    process: [
      { title: 'Llamada gratuita', description: 'Hablamos de tu negocio, del problema y de cómo se ve el resultado ideal.' },
      { title: 'Propuesta', description: 'Recibes alcance, tiempos y precio fijo claros antes de empezar.' },
      { title: 'Desarrollo con demos semanales', description: 'Ves avances reales cada semana y puedes ajustar prioridades a tiempo.' },
      { title: 'Lanzamiento y soporte', description: 'Publico el sistema, capacito a tu equipo y sigo disponible para mejoras.' },
    ],
    cta: 'Cuéntame de tu proyecto',
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen mis clientes',
    // Testimonio aprobado por el cliente: se muestra con sus palabras originales (en inglés)
    items: [
      {
        quote:
          'Before working with Javier we ran jobs, payroll and invoicing out of spreadsheets. He built us a web and mobile platform tailored to how we actually work, and now I check jobs, crews and numbers from my phone every day in the field. Reliable, responsive, and easy to work with.',
        author: 'David Lopez',
        role: 'Dueño, BrightCoat Painting & Remodeling — Austin, TX',
      },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Dónde he trabajado',
    items: [
      {
        role: 'Desarrollador Full Stack · Líder Móvil',
        company: 'Seguridad Móvil GPS',
        period: 'Dic 2023 – Actualidad',
        highlights: [
          'Desarrollador líder de dos apps de rastreo de flotas en React Native: Optimus CA/MagnoTrack y Optimus Rutas.',
          'Rastreo GPS en tiempo real, historial de rutas, monitoreo de límites de velocidad, visitas a clientes y reportes automáticos.',
          'Geolocalización continua en segundo plano con TransistorSoft e interfaces de mapas para vehículos y personal de campo.',
          'Liderando la migración de Ant Design v4 → v6 de las plataformas web de la empresa.',
          'Responsable de publicaciones, versiones y despliegues en App Store y Google Play.',
        ],
      },
      {
        role: 'Desarrollador Full Stack Independiente',
        company: 'CodingIQ (marca personal)',
        period: '2025 – Actualidad',
        summary: 'Proyectos para clientes y productos SaaS propios para PYMEs en Honduras y EE. UU.',
        highlights: [
          'Único desarrollador de BrightCoat Ops, plataforma web + móvil en uso diario por un contratista en EE. UU.',
          'Construyendo AssistIQ (asistencia y horas) y ContaIQ (contabilidad) como productos SaaS multiempresa.',
        ],
      },
      {
        role: 'Desarrollador Frontend',
        company: 'Chekku',
        period: 'Jul 2022 – Feb 2024',
        highlights: [
          'Lideré la migración de una plataforma heredada en AngularJS a React.',
          'Construí un sistema dinámico de check-in/check-out con formularios configurables por cliente.',
          'Dashboards de métricas de visitas y funciones de mapa con geolocalización y marcadores.',
        ],
      },
      {
        role: 'Desarrollador Full Stack',
        company: 'Seguridad Móvil GPS',
        period: 'Ene 2022 – Jun 2022',
        highlights: ['Herramientas internas y apps web con JavaScript y Node.js, desarrollo de APIs e integración de bases de datos.'],
      },
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Cómo trabajo',
    paragraphs: [
      'Construyo productos de principio a fin: base de datos y APIs REST con NestJS y Supabase, apps web con React y apps móviles con React Native, hasta su publicación en App Store y Google Play.',
      'La mayor parte de mi trabajo está donde el software se cruza con la operación: rastreo GPS en vivo, historial de rutas, equipos de campo, horas de planilla, facturación y dashboards de los que las empresas dependen cada día.',
    ],
    skillsEyebrow: 'Habilidades',
    skillsTitle: 'Stack técnico',
    skills: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Styled Components', 'Vite'] },
      { label: 'Móvil', items: ['React Native CLI', 'Expo', 'Geolocalización en segundo plano', 'Mapas', 'App Store / Google Play'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'Prisma', 'APIs REST'] },
      { label: 'Datos y nube', items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Vercel', 'Railway', 'DigitalOcean'] },
      { label: 'Estado y herramientas', items: ['Zustand', 'TanStack Query', 'Context API', 'Git', 'Xcode', 'Android Studio'] },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Construyamos algo juntos',
    intro: 'Elige el camino que te queda — normalmente respondo en menos de un día hábil.',
    clients: {
      title: '¿Tienes un proyecto?',
      description: 'Cuéntame qué necesita tu empresa. La primera llamada es gratis y sin compromiso.',
      whatsapp: 'Escríbeme por WhatsApp',
      whatsappMessage: 'Hola Javier, vi tu portafolio y me gustaría hablar sobre un proyecto.',
      email: 'O escríbeme al correo',
    },
    hiring: {
      title: '¿Estás reclutando?',
      description: 'Disponible para puestos remotos de tiempo completo con equipos en LATAM o Norteamérica.',
      cv: 'Descargar CV (ES)',
      cvOther: 'CV en inglés',
    },
    location: 'Honduras · Remoto (UTC-6)',
  },
  footer: 'Hecho con React, TypeScript y Tailwind CSS',
  whatsappFloat: 'Escribir por WhatsApp',
};

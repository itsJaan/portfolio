export default function PortfolioApp() {
  const projects = [
    {
      title: 'React Native Tracking Demo',
      description:
        'Mobile app that simulates real-time GPS tracking with map-based visualization, route progress, and tracking stats.',
      stack: ['React Native', 'TypeScript', 'Maps', 'Mobile UI'],
      github: 'https://github.com/itsJaan/ReactNativeTrackingDemo',
      demo: '',
      featured: true,
    },
    {
      title: 'Realtime Dashboard',
      description:
        'Modern SaaS-style dashboard with live metrics, event monitoring, and charts designed for operational visibility.',
      stack: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
      github: 'https://github.com/itsJaan/RealTimeDashboard',
      demo: '',
      featured: true,
    },
    {
      title: 'Chekku Dashboard Demo',
      description:
        'Dashboard prototype with mock authentication, check-in monitoring, filtering, and media preview to showcase API-oriented UI flows.',
      stack: ['React', 'TypeScript', 'Styled Components', 'Routing'],
      github: 'https://github.com/itsJaan/ChekkuTest-Dashboard',
      demo: '',
      featured: false,
    },
    {
      title: 'Pokédex',
      description:
        'Frontend app that consumes Pokémon API data with a clean interface, reusable components, and data visualization.',
      stack: ['React', 'Tailwind', 'React Query', 'Recharts'],
      github: 'https://github.com/itsJaan/ReactPokedex',
      demo: '',
      featured: false,
    },
  ];

  const skills = [
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NestJS',
    'REST APIs',
    'SQL',
    'Tailwind CSS',
    'Styled Components',
    'Maps & Geolocation',
    'Real-time Systems',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-10">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Full Stack Developer
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Javier Nuñez
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                I build modern web and mobile applications with React, React Native,
                and Node.js, with a strong focus on real-time systems, maps,
                geolocation, and clean product-oriented UI.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/itsJaan"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/javier-nunez-709318162/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:nunez0467@gmail.com"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:w-[320px]">
              <StatCard value="4+" label="Years Experience" />
              <StatCard value="4" label="Featured Projects" />
              <StatCard value="Web" label="Frontend & SaaS" />
              <StatCard value="Mobile" label="React Native Apps" />
            </div>
          </div>
        </header>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionTitle eyebrow="About" title="What I work on" />
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              My work has focused on mobile and web platforms with operational use
              cases, including route tracking, dashboards, API integrations, and
              production-ready interfaces. I enjoy building maintainable products
              that combine solid engineering with practical user experience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
              I am especially comfortable working on applications that involve
              live data, business workflows, geolocation, reporting, and scalable
              frontend architecture.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionTitle eyebrow="Core Skills" title="Technical stack" />
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle eyebrow="Portfolio" title="Selected projects" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {project.featured ? (
                      <span className="mt-2 inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                        Featured
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white text-slate-950 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-200"
                  >
                    GitHub Repo
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="rounded-2xl border border-white/10 bg-transparent px-4 py-2.5 text-sm text-slate-500">
                      Demo coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionTitle eyebrow="Experience" title="What I bring" />
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>Built and maintained mobile and web applications in production environments.</li>
              <li>Worked on real-time GPS tracking, route visibility, and map-based interfaces.</li>
              <li>Developed frontend dashboards with operational metrics and reporting flows.</li>
              <li>Integrated APIs, handled stateful UI, and focused on maintainable architecture.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionTitle eyebrow="Contact" title="Let’s connect" />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              I’m open to remote opportunities involving frontend, full stack, or
              React Native development.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>
                <span className="text-slate-500">Email:</span> nunez0467@gmail.com
              </p>
              <p>
                <span className="text-slate-500">GitHub:</span> github.com/itsJaan
              </p>
              <p>
                <span className="text-slate-500">LinkedIn:</span> linkedin.com/in/javier-nunez-709318162
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

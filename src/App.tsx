import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ContentProvider } from './i18n';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Testimonials } from './sections/Testimonials';
import type { Lang } from './types';

const PortfolioApp = ({ lang }: { lang: Lang }) => (
  <ContentProvider lang={lang}>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-10">
        <Hero />
        <Projects />
        <Services />
        <Testimonials />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </main>

      <WhatsAppFloat />
    </div>
  </ContentProvider>
);

export default PortfolioApp;

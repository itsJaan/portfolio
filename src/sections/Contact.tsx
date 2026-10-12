import { cvLinks, profile, socialLinks } from '../data/profile';
import { Button, Card, SectionTitle } from '../components/ui';

export const Contact = () => (
  <section id="contact" className="mt-16 scroll-mt-24">
    <Card className="text-center md:p-12">
      <div className="mx-auto max-w-2xl">
        <SectionTitle eyebrow="Contact" title="Let’s build something together" />
        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{profile.availability}</p>
        <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-lg font-semibold text-sky-300 hover:text-sky-200">
          {profile.email}
        </a>
        <p className="mt-1 text-sm text-slate-500">{profile.location}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <Button key={link.href} href={link.href} external>
              {link.label}
            </Button>
          ))}
          {cvLinks.map((cv) => (
            <Button key={cv.href} href={cv.href} download>
              {cv.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  </section>
);

import { cvLinks, profile, socialLinks, whatsappLink } from '../data/profile';
import { useContent } from '../i18n';
import { Button, Card, SectionTitle } from '../components/ui';
import { DownloadIcon, MailIcon, WhatsAppIcon } from '../components/ui/icons';

export const Contact = () => {
  const { lang, contact } = useContent();
  const otherLang = lang === 'en' ? 'es' : 'en';

  return (
    <section id="contact" className="mt-16 scroll-mt-24">
      <div className="text-center">
        <SectionTitle eyebrow={contact.eyebrow} title={contact.title} />
        <p className="mt-3 text-sm text-slate-400 md:text-base">{contact.intro}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col border-emerald-400/20">
          <h3 className="text-xl font-semibold text-white">{contact.clients.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{contact.clients.description}</p>
          <div className="mt-auto pt-6">
            <a
              href={whatsappLink(contact.clients.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              <WhatsAppIcon />
              {contact.clients.whatsapp}
            </a>
            <p className="mt-4 text-center text-sm text-slate-400">
              {contact.clients.email}:{' '}
              <a href={`mailto:${profile.email}`} className="font-medium text-sky-300 hover:text-sky-200">
                {profile.email}
              </a>
            </p>
          </div>
        </Card>

        <Card className="flex flex-col">
          <h3 className="text-xl font-semibold text-white">{contact.hiring.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{contact.hiring.description}</p>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Button href={cvLinks[lang]} variant="light" download>
              <DownloadIcon />
              {contact.hiring.cv}
            </Button>
            <Button href={cvLinks[otherLang]} download>
              {contact.hiring.cvOther}
            </Button>
            {socialLinks.map((link) => (
              <Button key={link.href} href={link.href} external>
                {link.label}
              </Button>
            ))}
            <Button href={`mailto:${profile.email}`}>
              <MailIcon className="h-4 w-4" />
              Email
            </Button>
          </div>
        </Card>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">{contact.location}</p>
    </section>
  );
};

import { whatsappLink } from '../data/profile';
import { useContent } from '../i18n';
import { WhatsAppIcon } from './ui/icons';

export const WhatsAppFloat = () => {
  const { contact, whatsappFloat } = useContent();
  return (
    <a
      href={whatsappLink(contact.clients.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label={whatsappFloat}
      title={whatsappFloat}
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 transition hover:scale-105 hover:bg-emerald-400"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

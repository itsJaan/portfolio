import type { Lang } from '../../types';

// SVG en vez de emoji: los emojis de bandera no se muestran en Windows (aparecen como "US"/"ES")
type FlagProps = { className?: string };

export const FlagUS = ({ className = 'h-3.5 w-5' }: FlagProps) => (
  <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
    <rect width="30" height="20" fill="#fff" />
    {Array.from({ length: 7 }, (_, i) => (
      <rect key={i} y={(i * 20) / 6.5} width="30" height={20 / 13} fill="#b22234" />
    ))}
    <rect width="12" height={(20 / 13) * 7} fill="#3c3b6e" />
    {[1.8, 4.6, 7.4, 10.2].map((y, row) =>
      (row % 2 === 0 ? [1.6, 4.4, 7.2, 10] : [3, 5.8, 8.6]).map((x) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.6" fill="#fff" />
      )),
    )}
  </svg>
);

// Versión civil (sin escudo): a este tamaño el escudo no se distingue
export const FlagES = ({ className = 'h-3.5 w-5' }: FlagProps) => (
  <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
    <rect width="30" height="20" fill="#aa151b" />
    <rect y="5" width="30" height="10" fill="#f1bf00" />
  </svg>
);

export const LangFlag = ({ lang, className }: { lang: Lang; className?: string }) =>
  lang === 'en' ? <FlagUS className={className} /> : <FlagES className={className} />;

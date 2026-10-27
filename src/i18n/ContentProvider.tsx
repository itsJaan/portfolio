import type { ReactNode } from 'react';
import type { Lang } from '../types';
import { ContentContext } from './context';
import { en } from './en';
import { es } from './es';

export const ContentProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => (
  <ContentContext.Provider value={lang === 'es' ? es : en}>{children}</ContentContext.Provider>
);

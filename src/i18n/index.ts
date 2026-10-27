import type { Content, Lang } from '../types';
import { en } from './en';
import { es } from './es';

export const contents: Record<Lang, Content> = { en, es };

export const langFromPath = (pathname: string): Lang => (/^\/es(\/|$)/.test(pathname) ? 'es' : 'en');

export { ContentProvider } from './ContentProvider';
export { useContent } from './useContent';

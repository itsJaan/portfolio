import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { contents } from './i18n';
import type { Lang } from './types';

export const render = (lang: Lang) =>
  renderToString(
    <StrictMode>
      <App lang={lang} />
    </StrictMode>,
  );

export const getMeta = (lang: Lang) => contents[lang].meta;

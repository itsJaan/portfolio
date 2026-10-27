import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { langFromPath } from './i18n';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App lang={langFromPath(window.location.pathname)} />
  </StrictMode>
);

// En producción el HTML viene pre-renderizado (scripts/prerender.mjs); en dev se renderiza en el cliente
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

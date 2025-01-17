import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const root = createRoot(document.getElementById('react-app-root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

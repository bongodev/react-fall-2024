import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App';
import { AboutPage, ProjectLayout, RootLayout } from '@/pages';
import { BongoDevProjectPage } from '@/pages/bongodev';
import { ThanWinProjectPage } from '@/pages/thanwin';
import { TalhaProjectPage } from '@/pages/talha';

import { appConfig } from './config';

import './index.css';

const root = createRoot(document.getElementById('react-app-root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${appConfig.BASE_ROUTE}/`} element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="projects/:projectId" element={<ProjectLayout />}>
            <Route path="bongodev" element={<BongoDevProjectPage />} />
            <Route path="talha" element={<TalhaProjectPage />} />
            <Route path="sumaiya" element={<h1>Sumaiya</h1>} />
            <Route path="thanwin" element={<ThanWinProjectPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

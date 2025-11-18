// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';

import Home from './routes/Home/index.tsx';
import Sobre from './routes/Sobre/index.tsx';
import FAQ from './routes/FAQ/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contato', element: <Contato /> },
      { path: '/integrantes', element: <Integrantes /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

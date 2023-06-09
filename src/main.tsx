import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './ui/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './ui/pages/Login';
import './reset.css';

import { AppProvider } from './config-adapter/user-context-provider';
const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login';
import { supabase } from './api/client/client';
import { Provider } from 'react-supabase';
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
    <Provider value={supabase}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

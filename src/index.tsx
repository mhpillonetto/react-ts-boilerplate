import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Root from './pages/Root/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/register",
    element: <div>Register Here!</div>
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

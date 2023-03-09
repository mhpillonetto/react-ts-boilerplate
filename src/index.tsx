import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons/pokemons';

const router = createBrowserRouter([
  {
    path: "/pokemons",
    element: <Pokemons/>
  },
  {
    path: "/register",
    element: <div>Register Here!</div>
  },
  {
    path: "/login",
    element: <div>Log in Here!</div>
  },
  {
    path: "/*",
    element: <Home />
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

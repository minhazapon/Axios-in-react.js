import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootAppLayOut from './RootAppLayOut';
import Home from './Home';
import Api from './Api';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootAppLayOut></RootAppLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Api",
        element: <Api></Api>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

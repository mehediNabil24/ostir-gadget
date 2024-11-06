import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Components/Root';
import Error from './Components/Error';
import GadgetDetails from './Components/GadgetDetails';
import Dashboard from './Components/DashBoard';
import Gadgets from './Components/Gadgets'; // Make sure Gadgets is imported
import Gadgetss from './assets/gadgets.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/gadget/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: async ({ params }) => {
          // const response = await fetch('gadgets.json');
          // const data = await response.json();
          

          // Return data and product ID to GadgetDetails
          return { data: Array.isArray(Gadgetss) ? Gadgetss : [], productId: params.product_id };
        },
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,  // Add Dashboard route
      },
      {
        path: '/products/:category',  // New route to handle category filtering
        element: <Gadgets></Gadgets>,  // Render Gadgets component for category pages
      },
      {
        path: '/products/all',  // Route for displaying all products
        element: <Gadgets></Gadgets>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

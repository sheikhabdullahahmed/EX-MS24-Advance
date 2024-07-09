import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Dashboard from '../view/Dashboard' 
import Details from '../view/Details'



const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />  ,
    },
    {
      path: "/details",
      element: <Details />  ,
    },
]);


export default function Router () {
  
   return <RouterProvider router={router} />
}
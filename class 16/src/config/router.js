import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from '../view/Dashboard'
import Deatils from '../view/Deatils'



const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
    {
        path: "/details",
        element: <Deatils />
      },
]);



  export default function Router () {
    return  
    <RouterProvider router={router} />
}
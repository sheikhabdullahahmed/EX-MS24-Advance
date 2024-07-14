import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "../view/Dashboard";
import Details from '../view/Detalis'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

const Apps = () => {
    return (
        <>        
        <RouterProvider router={router} />
        </>

    )
}


export default Apps
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../view/Dashboard";
import Details from '../view/Detalis'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/deatils/:id",
      element: <Details />,
    },
  ]);

const App = () => {
    return (
        <>        
        <RouterProvider router={router} />
        </>

    )
}

export default App



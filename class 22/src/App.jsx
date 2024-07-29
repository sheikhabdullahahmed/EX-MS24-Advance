import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './view/Signup'
import  Login  from "./view/Login";
import Adddata from './view/Adddata'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add",
    element: <Adddata />,
  },
]);


function App () {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
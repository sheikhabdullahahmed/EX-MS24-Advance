import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./view/Signup";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);



function App () {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}


export default  App
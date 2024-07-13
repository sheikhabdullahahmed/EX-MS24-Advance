// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

// import Dashboard from '../view/Dashboard' 
// import Details from '../view/Details'



// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Dashboard />  ,
//     },
//     {
//       path: "/details/id",
//       element: <Details />  ,
//     },
    
// ]);


// export default function Router () {
  
//    return <RouterProvider router={router} />
// }



import Dashboard from "../view/Dashboard";
import Details from "../view/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/details/:productId",
    element: <Details />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

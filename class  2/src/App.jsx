import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./view/Signup"; 
import Login from './view/login.jsx';
import Addproduct from './view/Addproduct'
import Render from './view/Render'
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
    element: <Addproduct />,
  },
  {
    path: "/render",
    element: <Render />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

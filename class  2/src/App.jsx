import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./view/Signup"; // Adjust the path as necessary
import Login from './view/login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

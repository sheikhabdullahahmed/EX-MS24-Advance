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

import Dashboard from "../view/Dashboard";
import Details from "../view/Details";
import Navebar from "../Components/Navebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store, persistor } from "../store"; // Fixed typo here
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
        <Navebar />
      </PersistGate>
    </Provider>
  );
}

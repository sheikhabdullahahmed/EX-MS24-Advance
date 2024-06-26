import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Screens/Home.jsx';
import About from './Screens/About.jsx';
import Contact from './Screens/Contact.jsx';
import Services from './Screens/Services.jsx';
import PersistentDrawerLeft from './components/Dashboard.jsx';
import Basic from './components/Basic.jsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <Basic/>
  },
  {
    path: 'dashboard',
    element: <PersistentDrawerLeft />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'service',
        element: <Services />
      }
    ]
  },
  {
    path: '*',
    element: <Basic/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)



// const router2 = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: 'about',
//     element: <About/>
//   }
// ])



//Institute management system

//main screen pa 3 routes honga login / register / admin

// admin nested route  institute / student / teacher / principal
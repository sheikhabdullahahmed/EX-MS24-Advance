import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './view/Signup';
import Login from './view/login.jsx';
import Addproduct from './view/Addproduct';
import Render from './view/Render';
import ProductDetail from './view/ProductDetail'; // Import the ProductDetail component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/add',
    element: <Addproduct />,
  },
  {
    path: '/render',
    element: <Render />,
  },
  {
    path: '/product/:productId',
    element: <ProductDetail />, // Add this route
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

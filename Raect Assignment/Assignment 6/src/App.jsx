import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom';

import About from './components/About'
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Header from './components/Header';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </>
  )
}

export default App
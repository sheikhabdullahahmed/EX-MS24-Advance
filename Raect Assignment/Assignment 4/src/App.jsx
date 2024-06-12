
import axios from 'axios'
import React, {useEffect, useEffeect, useState} from 'react'
import Navbar from './Compunents/Navebar'
import Card from './Compunents/Card'


const App = () => {
  const [products, setProducts ] = useState([])


  useEffect (() => {
    axios('https://dummyjson.com/products')
    .then ((res) => {
      setProducts(res.data.products)
    })
    .catch((err) => {
      console.log(err);
    })

  }, [])


  return (
    <>
    <Navbar />
    <div className='flex-justify-center'>
     {products ?
     products.map((item) => {
      return <Card key={item.id} title = {item.title} description = {item.description} img = {item.thumbnail} price = {item.price} />
     })
     : <h1><span className='loading loading-spineer'></span></h1>

     }
    </div>


    </>
  )

}


export default App
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { ColorRing } from 'react-loader-spinner'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='container'>
      {
        products.length > 0 ? (
          <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {
              products?.map((product, i) => {
                return (
                  <Card key={i} details={product} />
                )
              })
            }
          </div>
        ) : (

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh' }}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>

        )
      }
    </div>
  )
}

export default Products
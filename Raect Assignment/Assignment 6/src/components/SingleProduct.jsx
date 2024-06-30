import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const SingleProduct = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <Card details={product} />
        </div>

    )
}

export default SingleProduct
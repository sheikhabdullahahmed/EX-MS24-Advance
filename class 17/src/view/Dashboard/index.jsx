import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function Dashboard () {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data)
            console.log(res.data);
        })
        .catch ((error) => {
            console.log('error', error);
        })
    },[])


    const gotoDetails = (productid) => {
        console.log(productid);
    }


    return (
        <div>
            {products.map(item => {
                <div key={item.id}>
                    <img src={item.image} alt="" />
                    <h2>{item.category}</h2>
                    <p>{item.price}</p>
                    <button onClick={() => gotoDetails(item.id)}></button>

                </div>
            })}
        </div>
    )
}
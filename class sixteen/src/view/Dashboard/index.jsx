import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Dashboard () {
    const navigate = useNavigate()
    const [products, setproducts] = useState([])

    useEffect(() => {
        axios('https://fakestoreapi.com/products/1')
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log('error', error);
        })
    }, [])

    const gotodetails = (item) => {
        navigate =  (`/details/${item.id}`)
    }

    return (
    <div>
        <h1>Dashboard</h1>
        {products.map(item => {
            return <div onClick={() => gotodetails(item)}
            style={{border: '1px solid black', margin : 50 }}>
                <img src={item.image} width="50" alt="" />
                <h5>{item.titile}</h5>

            </div>
        })}
    </div>

    )





}
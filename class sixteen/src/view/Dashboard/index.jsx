import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default  function Dashboard () {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios('https://fakestoreapi.com/products/')
        .then((res) => {
            setProducts(res.data)
            console.log(res.data);
        })
        .catch((error) => {
            console.log('error', error);
        })
    }, [])

    const gotodetails = (item) => {
        navigate (`/detalis/${item.id}`)
    } 

    return (
        <>
        <h1>Dashboard</h1>
        
        {products.map(item => {
            return ( 
                <div
                 onClick={() => gotodetails(item)}
                style={{backgroundColor: "lightcyan", width: "100"}}>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5>
                    <h5>{item.description}</h5>

                </div>
            )
            
            
        })}
        </>
    )
}
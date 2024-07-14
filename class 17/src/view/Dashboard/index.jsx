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
    })
}
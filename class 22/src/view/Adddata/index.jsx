import { useState } from "react";
import { addProduct } from "../../config/firebase";
import { Link } from "react-router-dom";

function Addproducts () {
  const [title, setTitle] = useState()
  const [desscription, setDesscription] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  
  
  const handlesubmit = async (e) => {
    e.preventDefault();

    
  }
}

import { useState } from "react";
import { addProduct } from "../../config/firebase";
import { Link } from "react-router-dom";

function AddProducts() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      title,
      description,
      price,
      category,
    };

    try {
      await addProduct(product);
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
      <Link to="/render">
        <button>Show Products</button>
      </Link>
    </>
  );
}

export default AddProducts;

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-80">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 p-3 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 p-3 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 p-3 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mb-4 p-3 border rounded-lg w-full"
        />
        <button 
          type="submit" 
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
          Upload
        </button>
      </form>
      <Link to="/render">
        <button 
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Show Products
        </button>
      </Link>
    </div>
  );
}

export default AddProducts;

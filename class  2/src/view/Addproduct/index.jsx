import React, { useState } from 'react';
import { addProduct } from '../../config/firebase';
import { Link } from 'react-router-dom';

function AddProduct() {
  // State hooks to manage form input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a product object with the form input values
    const product = {
      title,
      description,
      category,
      price,
      image,
    };

    // Call the addProduct function to save the product to the database
    await addProduct(product);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input for product title */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Input for product description */}
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Input for product category */}
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Input for product price */}
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Input for product image */}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Upload
          </button>
          {/* Link to show products */}
          <Link to='/render'>
            <button
              className='w-full mt-2 border-2 border-blue-600 text-blue-600 p-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300'
            >
              Show Products
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

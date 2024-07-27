import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../../config/firebase';

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    }
    loadProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product: ', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-semibold mb-2">Category: {product.category}</p>
            <p className="text-gray-800 font-semibold mb-2">Price: ${product.price}</p>
            {product.fileURL && (
              <img
                src={product.fileURL}
                alt={product.title}
                className="mt-2 w-full h-48 object-cover rounded-lg"
              />
            )}
            <button
              onClick={() => handleDelete(product.id)}
              className="mt-4 w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;

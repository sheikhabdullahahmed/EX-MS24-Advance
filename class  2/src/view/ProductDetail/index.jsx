import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../config/firebase';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const products = await fetchProducts();
        const product = products.find(p => p.id === productId);
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product: ', error);
      }
    }
    loadProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-gray-800 font-semibold mb-4">Category: {product.category}</p>
        <p className="text-gray-800 font-semibold mb-4">Price: ${product.price}</p>
        {product.fileURL && (
          <img
            src={product.fileURL}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
}

export default ProductDetail;

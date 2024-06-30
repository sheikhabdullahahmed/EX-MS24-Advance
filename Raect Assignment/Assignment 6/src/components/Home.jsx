import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-container">
        <motion.div
            className="home-banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h1 style={{color: "black"}}>Welcome to Our Store</h1>
            <p style={{color: "black"}} >Discover our amazing products and enjoy the best shopping experience.</p>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Shop Now
            </motion.button>
        </motion.div>
        <motion.div
            className="home-products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
        >
            {/* <h2>Featured Products</h2> */}
            <div className="product-grid">
                {/* You can map through your products array and render product cards here */}
                {/* <div className="product-card">
                    <img src="https://i.pinimg.com/564x/91/0e/c0/910ec0406fa6f7d01e68f5a8beae1e1e.jpg" alt="Product 5" />
                    <h3>Product 1</h3>
                    <p>$29.99</p>
                </div>
                <div className="product-card">
                    <img src="https://i.pinimg.com/564x/91/0e/c0/910ec0406fa6f7d01e68f5a8beae1e1e.jpg" alt="Product 2" />
                    <h3>Product 3</h3>
                    <p>$49.99</p>
                </div> */}
                {/* Add more products as needed */}
            </div>
        </motion.div>
    </div>
);
}

export default Home
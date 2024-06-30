import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?cs=srgb&dl=pexels-mvdheuvel-2284169.jpg&fm=jpg" alt="About Us" />
      </motion.div>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <p>
          Welcome to our company. We are dedicated to providing the best
          services to our customers. Our team of professionals works
          tirelessly to ensure customer satisfaction and quality service.
        </p>
        <p>
          Our mission is to deliver exceptional value and exceed
          expectations in every project we undertake.
        </p>
      </motion.div>
    </div>
  );
}

export default About
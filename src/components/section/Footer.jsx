import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Social icon hover animation
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      backgroundColor: "#4a5568",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.section 
      className="relative w-full flex items-center justify-center overflow-hidden" 
      style={{ 
        backgroundColor: "#000000", 
        minHeight: '25vh'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="container mx-auto px-6 py-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo or Name with animation */}
        <motion.h2 
          className="text-2xl font-bold mb-4 text-white"
          variants={itemVariants}
        >
          Clever Developer
        </motion.h2>
        
        {/* Description with animation */}
        <motion.p 
          className="text-gray-300 max-w-2xl mb-8 text-sm"
          variants={itemVariants}
        >
          Master the art of web design and development with expertly crafted tutorials. Each guide is designed to 
          break down complex topics into clear, step-by-step instructions, complete with source code. Whether you're 
          starting your journey or looking to refine your skills, Clever Developer helps you unlock your potential 
          and build remarkable digital experiences. Join a community of smart creators shaping the web.
        </motion.p>
        
        {/* Social Links */}
        <motion.div 
          className="flex space-x-4 mb-6"
          variants={itemVariants}
        >
          {/* Social Icons with hover animations */}
          <motion.a 
            href="#" 
            className="bg-gray-700 rounded-full p-2 text-white transition-colors"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaFacebookF size={16} />
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-gray-700 rounded-full p-2 text-white transition-colors"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaTwitter size={16} />
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-gray-700 rounded-full p-2 text-white transition-colors"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaGoogle size={16} />
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-gray-700 rounded-full p-2 text-white transition-colors"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaInstagram size={16} />
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-gray-700 rounded-full p-2 text-white transition-colors"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <FaLinkedinIn size={16} />
          </motion.a>
        </motion.div>

        {/* Copyright with subtle animation */}
        <motion.div
          className="text-gray-500 text-xs mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          © {new Date().getFullYear()} Clever Developer. All rights reserved.
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
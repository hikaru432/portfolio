import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import GradientBackground from '../ui/GradientBackground';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  const formItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Background elements */}
      <GradientBackground />
      
      {/* Main content container */}
      <motion.div 
        className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left side - Text content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 pr-4"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              We Love Talking To Visionaries Like You.
            </h1>
            <motion.div 
              className="h-1 w-16 bg-yellow-500 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              If you have an idea in mind, feel free to reach out by submitting the form below to 
              schedule a discovery call with us.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              We build cutting-edge digital solutions—from AI and Web3 to e-commerce and 
              DevOps—that give your brand the edge in a tech-first world.
            </motion.p>
          </motion.div>

          {/* Contact information cards */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
          >
            {/* Production Office */}
            <motion.div 
              className="flex items-center bg-white rounded-lg p-4 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="mr-4 h-12 w-12 flex items-center justify-center bg-yellow-500 rounded-full"
                whileHover={{ rotate: 5 }}
              >
                <FaMapMarkerAlt size={24} className="text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-gray-800 uppercase text-sm">PRODUCTION OFFICE</h3>
                <p className="text-gray-600">Davao City Philippines</p>
              </div>
            </motion.div>
            
            {/* Phone Number */}
            <motion.div 
              className="flex items-center bg-white rounded-lg p-4 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="mr-4 h-12 w-12 flex items-center justify-center bg-yellow-500 rounded-full"
                whileHover={{ rotate: 5 }}
              >
                <FaPhone size={24} className="text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-gray-800 uppercase text-sm">PHONE NUMBER</h3>
                <p className="text-gray-600">+63-94850-11228</p>
              </div>
            </motion.div>
            
            {/* Email */}
            <motion.div 
              className="flex items-center bg-white rounded-lg p-4 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
            >
              <motion.div 
                className="mr-4 h-12 w-12 flex items-center justify-center bg-yellow-500 rounded-full"
                whileHover={{ rotate: 5 }}
              >
                <FaEnvelope size={24} className="text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-gray-800 uppercase text-sm">EMAIL</h3>
                <p className="text-gray-600">cabrerajhonrexey0909@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right side - Form */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={containerVariants}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
          >
            <form className="space-y-6">
              {/* Name field */}
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <motion.input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" }}
                />
              </motion.div>
              
              {/* Email and Phone fields side by side */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                <motion.div variants={formItemVariants}>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    placeholder="your.email@example.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" }}
                  />
                </motion.div>
                <motion.div variants={formItemVariants}>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                      +63
                    </div>
                    <motion.input 
                      type="tel" 
                      id="phone" 
                      placeholder="Phone number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Message field */}
              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <motion.textarea 
                  id="message" 
                  rows="6" 
                  placeholder="Write Message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)" }}
                ></motion.textarea>
              </motion.div>
              
              {/* Remember me checkbox */}
              <motion.div 
                className="flex items-center"
                variants={formItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                  whileHover={{ scale: 1.2 }}
                />
                <label htmlFor="remember" className="ml-2 text-gray-600">Remember me</label>
              </motion.div>
              
              {/* Submit button */}
              <motion.div
                variants={formItemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  variant="primary" 
                  type="submit" 
                  fullWidth 
                  bgColor="yellow-500"
                  className="py-3 text-[white]"
                >
                  Submit <span className="ml-2"></span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
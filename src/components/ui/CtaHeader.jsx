import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const CtaHeader = ({ title, subtitle }) => {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        height: "300px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/landpict2.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark glow effect in the center with animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute w-64 h-64 rounded-full bg-gray-900"
        style={{ 
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      ></motion.div>
      
      {/* Content container */}
      <div className="container relative z-10 text-center px-4 mx-auto">
        <motion.h1 
          variants={itemVariants}
          className="text-white text-5xl font-bold mb-4 tracking-wide"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-white text-lg max-w-3xl mx-auto opacity-90 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

// PropTypes for type checking
CtaHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

// Default props
CtaHeader.defaultProps = {
  title: "Let's Talk!",
  subtitle: "Providing Comprehensive and Tailored Solutions to Address Your Unique Business Challenges and Achieve Optimal Results."
};

export default CtaHeader;
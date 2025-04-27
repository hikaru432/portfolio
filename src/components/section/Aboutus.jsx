import React, { useState } from 'react';
import Button from '../ui/Button';
import GradientBackground from '../ui/GradientBackground';
import { motion, AnimatePresence } from 'framer-motion';

const Aboutus = () => {
  // State to track which image is active/expanded
  const [activeImage, setActiveImage] = useState(null);
  
  // Experience data for each image
  const experienceData = {
    img1: { years: '1+', title: 'UI/UX Design' },
    img2: { years: '6', title: 'React Development' },
    img3: { years: '1+', title: 'Frontend Experience' }
  };
  
  // Function to handle image click
  const handleImageClick = (imgId) => {
    setActiveImage(activeImage === imgId ? null : imgId);
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Image container animation variants
  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section
      className="relative flex items-center justify-center py-16 bg-white overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      
      <GradientBackground />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content - With motion */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.h3 
                className="text-[#800e13] font-semibold text-sm uppercase tracking-widest"
                variants={itemVariants}
              >
                About Me
              </motion.h3>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold leading-tight"
                variants={itemVariants}
              >
                Creative <span className="text-[#800e13]">Frontend</span> Craftsmanship
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-base leading-relaxed"
                variants={itemVariants}
              >
                I'm Jhon Rexey Cabrera, a Frontend Developer blending design precision with technical innovation to craft engaging digital products.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-[#800e13]/5 p-4 rounded-md border-l-4 border-[#800e13]"
              variants={itemVariants}
            >
              <p className="text-[#800e13] font-semibold">Mission</p>
              <p className="text-gray-700 text-sm mt-1">
                Building scalable, user-focused frontends that elevate both experience and performance.
              </p>
            </motion.div>

            <motion.ul 
              className="list-disc pl-5 text-gray-700 text-sm space-y-1"
              variants={itemVariants}
            >
              <motion.li variants={itemVariants}>Pixel-perfect UI/UX from Figma to code</motion.li>
              <motion.li variants={itemVariants}>Web3-ready interfaces with React & Motoko</motion.li>
              <motion.li variants={itemVariants}>Performance-first mindset: lazy loading, code splitting</motion.li>
              <motion.li variants={itemVariants}>CI/CD proficient for seamless deployment</motion.li>
              <motion.li variants={itemVariants}>Strong cross-team collaboration</motion.li>
            </motion.ul>

            <motion.div 
              className="text-gray-500 italic text-sm border-l-4 pl-4 border-gray-300 mt-4"
              variants={itemVariants}
            >
              "Great interfaces aren't coded — they're crafted with precision and empathy."
            </motion.div>

            <motion.div 
              className="pt-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" className="bg-[#800e13] hover:bg-[#800e13]/90">Book Now</Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* INTERACTIVE MULTI-IMAGE SECTION WITH SHADOWS - WITH MOTION */}
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center items-center"
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main image with stacked images effect */}
            <div className="relative h-96 w-80">
              {/* Background image - img1 with shadow (positioned left) */}
              <motion.div 
                className={`absolute top-4 -left-8 w-56 h-72 transition-all duration-300 cursor-pointer ${activeImage === 'img1' ? 'z-40' : 'z-10'}`}
                onClick={() => handleImageClick('img1')}
                whileHover={{ 
                  scale: activeImage === 'img1' ? 1.1 : 1.05,
                  rotate: 3,
                  transition: { type: "spring", stiffness: 300 }
                }}
                animate={{
                  scale: activeImage === 'img1' ? 1.1 : 1,
                  rotate: 3,
                  opacity: 1, 
                  x: 0
                }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/10 rounded-lg blur-md transform rotate-3"
                  animate={{ 
                    opacity: activeImage === 'img1' ? 0.15 : 0.1
                  }}
                ></motion.div>
                <motion.div 
                  className={`relative overflow-hidden rounded-lg border-2 ${activeImage === 'img1' ? 'border-[#800e13]' : 'border-[#800e13]/20'} bg-white transform rotate-3`}
                >
                  <img 
                    src="/images/img1.jpg" 
                    alt="Portfolio Image 1" 
                    className={`w-full h-full object-cover ${activeImage === 'img1' ? 'opacity-100' : 'opacity-70'}`}
                  />
                  
                  {/* Expandable info - only visible when active */}
                  <AnimatePresence>
                    {activeImage === 'img1' && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-[#800e13] to-transparent flex flex-col justify-end p-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.p 
                          className="text-3xl font-bold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {experienceData.img1.years}
                        </motion.p>
                        <motion.p 
                          className="text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Year Experience
                        </motion.p>
                        <motion.p 
                          className="text-sm font-medium mt-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {experienceData.img1.title}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
              
              {/* Middle image - img2 with shadow (positioned top) */}
              <motion.div 
                className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-60 h-72 transition-all duration-300 cursor-pointer ${activeImage === 'img2' ? 'z-40' : 'z-20'}`}
                onClick={() => handleImageClick('img2')}
                whileHover={{ 
                  scale: activeImage === 'img2' ? 1.1 : 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                animate={{
                  scale: activeImage === 'img2' ? 1.1 : 1,
                  opacity: 1,
                  y: 0
                }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/10 rounded-lg blur-md"
                  animate={{ 
                    opacity: activeImage === 'img2' ? 0.15 : 0.1
                  }}
                ></motion.div>
                <motion.div 
                  className={`relative overflow-hidden rounded-lg border-2 ${activeImage === 'img2' ? 'border-[#800e13]' : 'border-[#800e13]/40'} bg-white`}
                >
                  <img 
                    src="/images/img2.jpg" 
                    alt="Portfolio Image 2" 
                    className={`w-full h-full object-cover ${activeImage === 'img2' ? 'opacity-100' : 'opacity-80'}`}
                  />
                  
                  {/* Expandable info - only visible when active */}
                  <AnimatePresence>
                    {activeImage === 'img2' && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-[#800e13] to-transparent flex flex-col justify-end p-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.p 
                          className="text-3xl font-bold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {experienceData.img2.years}
                        </motion.p>
                        <motion.p 
                          className="text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Months Experience
                        </motion.p>
                        <motion.p 
                          className="text-sm font-medium mt-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {experienceData.img2.title}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
              
              {/* Main image container - img3 (positioned right) */}
              <motion.div 
                className={`absolute top-4 -right-8 w-56 h-72 overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 cursor-pointer ${activeImage === 'img3' ? 'z-40' : 'z-30'}`}
                onClick={() => handleImageClick('img3')}
                whileHover={{ 
                  scale: activeImage === 'img3' ? 1.1 : 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                animate={{
                  scale: activeImage === 'img3' ? 1.1 : 1,
                  opacity: 1,
                  x: 0
                }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Diagonal accent line */}
                <motion.div 
                  className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#800e13] transform rotate-45"
                  animate={{
                    rotate: activeImage === 'img3' ? 50 : 45,
                    scale: activeImage === 'img3' ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                
                {/* Front image */}
                <img 
                  src="/images/img3.jpg" 
                  alt="Jhon Rexey Cabrera" 
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#800e13]/20 to-transparent z-20"></div>
                
                {/* Frame corners */}
                <motion.div 
                  className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#800e13]"
                  animate={{
                    scale: activeImage === 'img3' ? 1.2 : 1,
                    x: activeImage === 'img3' ? -2 : 0,
                    y: activeImage === 'img3' ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <motion.div 
                  className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#800e13]"
                  animate={{
                    scale: activeImage === 'img3' ? 1.2 : 1,
                    x: activeImage === 'img3' ? 2 : 0,
                    y: activeImage === 'img3' ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#800e13]"
                  animate={{
                    scale: activeImage === 'img3' ? 1.2 : 1,
                    x: activeImage === 'img3' ? -2 : 0,
                    y: activeImage === 'img3' ? 2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#800e13]"
                  animate={{
                    scale: activeImage === 'img3' ? 1.2 : 1,
                    x: activeImage === 'img3' ? 2 : 0,
                    y: activeImage === 'img3' ? 2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                
                {/* Expandable info - only visible when active */}
                <AnimatePresence>
                  {activeImage === 'img3' && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#800e13] to-transparent flex flex-col justify-end p-4 text-white z-30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-3xl font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {experienceData.img3.years}
                      </motion.p>
                      <motion.p 
                        className="text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Years Experience
                      </motion.p>
                      <motion.p 
                        className="text-sm font-medium mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {experienceData.img3.title}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Experience badge - only visible when no image is active */}
              <AnimatePresence>
                {!activeImage && (
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-3 z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200 
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.span 
                        className="font-bold text-xl text-[#800e13]"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      >
                        2+
                      </motion.span>
                      <span className="text-gray-600 text-sm">Years Experience</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Helper text - only visible when no image is active */}
            <AnimatePresence>
              {!activeImage && (
                <motion.div 
                  className="absolute -bottom-12 text-center w-full text-sm text-gray-500 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Click on any image to see experience details
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Design elements rearranged */}
            <motion.div 
              className="absolute top-0 left-0"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "3.5rem" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-3 h-14 bg-[#800e13] rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "3.5rem" }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="w-3 h-14 bg-[#800e13]/60 rounded-full"></div>
            </motion.div>
            
            {/* Small decorative dots in strategic positions */}
            <motion.div 
              className="absolute top-1/4 -left-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              <div className="flex gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#800e13]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#800e13]/70"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 -right-4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              <div className="flex gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#800e13]/70"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#800e13]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Code brackets design element */}
            <motion.div 
              className="absolute -left-6 top-1/3 text-3xl font-mono text-[#800e13]/30 transform -rotate-12"
              initial={{ opacity: 0, x: -20, rotate: -20 }}
              animate={{ opacity: 1, x: 0, rotate: -12 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {"{"}
            </motion.div>
            <motion.div 
              className="absolute -right-6 bottom-1/3 text-3xl font-mono text-[#800e13]/30 transform rotate-12"
              initial={{ opacity: 0, x: 20, rotate: 20 }}
              animate={{ opacity: 1, x: 0, rotate: 12 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {"}"}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
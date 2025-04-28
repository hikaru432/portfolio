import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Robot from '../animation/Robot';
import GradientBackground from '../ui/GradientBackground';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden" 
      style={{ 
        backgroundColor: '#640d14',
        minHeight: '95vh'
      }}
    >
      <GradientBackground />
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
        {/* Left column - Content */}
        <motion.div 
          className="flex flex-col items-start justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg text-rose-200 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Hi, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Jhon Rexey
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Frontend Developer
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Building responsive, user-focused web interfaces with creativity and precision
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
              <Button 
                variant="primary"
                size="lg"
                href="https://calendly.com/cabrerajhonrexey0909/schedule-a-discovery-call"
              >
                Book now
              </Button>

          </motion.div>
        </motion.div>
        
        {/* Right column - Robot */}
        <motion.div 
          className="w-full h-[400px] lg:h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-full h-full">
            <Robot />
          </div>
        </motion.div>
      </div>
      
      {/* Particles or small decorative dots */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.2,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              opacity: [Math.random() * 0.3 + 0.2, Math.random() * 0.5 + 0.3],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 1 + 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 0.5,
          y: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-5 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-white/70 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          <p className="text-white/50 text-sm mt-2">Scroll</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
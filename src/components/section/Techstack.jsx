import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiStorybook } from 'react-icons/si';
import { TbBrandMeta } from 'react-icons/tb';
import { RiRobot2Fill } from 'react-icons/ri';

// UI components
import GradientBackground from '../ui/GradientBackground';

// Technology type definition for better type safety
/**
 * @typedef {Object} Technology
 * @property {number} id - Unique identifier
 * @property {string} name - Technology name
 * @property {JSX.Element} icon - Icon component
 * @property {string} category - Technology category
 * @property {string} description - Short description
 */

/**
 * TechStack component showcasing a developer's technical skills
 * with an animated timeline visualization
 */
const Techstack = () => {
  // Theme settings
  const themeColor = '#800e13';
  const themeColorTransparent = `${themeColor}15`;
  
  // Ref for scroll animations
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"]
  });
  
  // Transforms for scroll-based animations
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  
  // Technology data with icons
  const technologies = useMemo(() => [
    { 
      id: 1,
      name: 'React JS', 
      icon: <FaReact aria-hidden="true" />, 
      category: 'Frontend',
      description: 'Component-based library for building user interfaces'
    },
    { 
      id: 2,
      name: 'JavaScript', 
      icon: <FaJs aria-hidden="true" />, 
      category: 'Language',
      description: 'Programming language for web development'
    },
    { 
      id: 3,
      name: 'Motoko', 
      icon: <TbBrandMeta aria-hidden="true" />, 
      category: 'Backend',
      description: 'Language for Internet Computer blockchain development'
    },
    { 
      id: 4,
      name: 'Storybook', 
      icon: <SiStorybook aria-hidden="true" />, 
      category: 'Tools',
      description: 'UI component explorer and documentation'
    },
    { 
      id: 5,
      name: 'HTML', 
      icon: <FaHtml5 aria-hidden="true" />, 
      category: 'Frontend',
      description: 'Markup language for web pages'
    },
    { 
      id: 6,
      name: 'CSS', 
      icon: <FaCss3Alt aria-hidden="true" />, 
      category: 'Frontend',
      description: 'Styling language for web pages'
    },
    { 
      id: 7,
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss aria-hidden="true" />, 
      category: 'Frontend',
      description: 'Utility-first CSS framework'
    },
    { 
      id: 8,
      name: 'Bootstrap', 
      icon: <SiBootstrap aria-hidden="true" />, 
      category: 'Frontend',
      description: 'CSS framework for responsive design'
    },
    { 
      id: 9,
      name: 'Figma', 
      icon: <FaFigma aria-hidden="true" />, 
      category: 'Design',
      description: 'Collaborative interface design tool'
    },
    { 
      id: 10,
      name: 'CI/CD', 
      icon: <FaGithub aria-hidden="true" />, 
      category: 'DevOps',
      description: 'Continuous integration and deployment'
    },
    { 
      id: 11,
      name: 'AI/LLM', 
      icon: <RiRobot2Fill aria-hidden="true" />, 
      category: 'Technology',
      description: 'Artificial intelligence and language models'
    }
  ], []);

  // Animation variants for reusability
  const headerAnimations = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const titleAnimations = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const underlineAnimations = {
    hidden: { width: 0 },
    visible: { 
      width: "6rem",
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  const descriptionAnimations = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.6 }
    }
  };

  // Tech card component to reduce repetition
  const TechCard = ({ tech, isEven, index }) => {
    const cardAnimations = {
      hidden: { opacity: 0, x: isEven ? -50 : 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    };

    const lineAnimations = {
      hidden: { width: 0 },
      visible: { 
        width: '80px',
        transition: { duration: 0.6, delay: 0.2 }
      }
    };

    const cardScaleAnimations = {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.5, delay: 0.3 }
      }
    };

    return (
      <motion.div
        key={tech.id}
        className="mb-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={cardAnimations}
        data-testid={`tech-item-${tech.id}`}
      >
        {/* Connection line from center to card */}
        <motion.div
          className="absolute top-1/2 h-px z-10"
          style={{
            background: themeColor,
            [isEven ? 'right' : 'left']: '50%',
            [isEven ? 'left' : 'right']: 'auto',
            width: '80px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={lineAnimations}
          aria-hidden="true"
        ></motion.div>

        {/* Technology card */}
        <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
          <motion.div
            className={`relative bg-white rounded-xl shadow-lg overflow-hidden z-20 ${isEven ? 'mr-16' : 'ml-16'} 
              w-64 border-t-4 focus-within:ring-2 focus-within:ring-offset-2`}
            style={{ borderTopColor: themeColor }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardScaleAnimations}
            whileHover={{ 
              y: -5, 
              boxShadow: `0 15px 30px rgba(128, 14, 19, 0.15)`,
              transition: { duration: 0.2 }
            }}
            tabIndex={0}
          >
            <div className="p-5">
              {/* Icon and name */}
              <div className="flex items-center space-x-4 mb-3">
                <motion.div
                  className="rounded-full p-3 flex items-center justify-center"
                  style={{ background: themeColorTransparent }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  aria-hidden="true"
                >
                  <div className="text-2xl" style={{ color: themeColor }}>
                    {tech.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800">{tech.name}</h3>
              </div>
              
              {/* Category */}
              <div className="mb-3">
                <span 
                  className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: themeColorTransparent, color: themeColor }}
                >
                  {tech.category}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      ref={scrollRef} 
      className="relative py-20 min-h-screen bg-gray-50"
      aria-labelledby="techstack-title"
    >
      {/* Gradient background applied once for the entire section */}
      <GradientBackground />
      
      {/* Main container */}
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-20"
          initial="hidden"
          animate="visible"
          variants={headerAnimations}
        >
          <motion.h2 
            id="techstack-title"
            className="text-5xl font-bold mb-4 text-gray-800"
            variants={titleAnimations}
          >
            My Tech Stack
          </motion.h2>
          <motion.div 
            className="h-1 w-24 mx-auto mb-6"
            style={{ background: themeColor }}
            variants={underlineAnimations}
            aria-hidden="true"
          ></motion.div>
          <motion.p 
            className="text-gray-600 text-lg"
            variants={descriptionAnimations}
          >
            My journey through technologies that power modern web development
          </motion.p>
        </motion.div>
        
        {/* Main timeline container */}
        <div 
          className="relative max-w-5xl mx-auto"
          role="list"
          aria-label="Tech stack timeline"
        >
          {/* Center vertical line that grows with scroll */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-px" aria-hidden="true">
            {/* Background track for the line */}
            <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
            
            {/* Animated progress line */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ overflow: 'visible' }}
            >
              <motion.path
                d="M 0,0 L 0,100%"
                stroke={themeColor}
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                style={{
                  pathLength,
                  strokeDasharray: 1,
                  strokeDashoffset: 1,
                  strokeOpacity: opacity
                }}
              />
            </svg>
            
            {/* Glowing dots at each technology point */}
            {technologies.map((tech, index) => (
              <motion.div
                key={`dot-${tech.id}`}
                className="absolute w-4 h-4 -ml-1.5 rounded-full z-10 shadow-md"
                style={{ 
                  background: themeColor,
                  top: `${(index / (technologies.length - 1)) * 100}%`,
                  boxShadow: `0 0 10px ${themeColor}`
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  delay: 0.2 + (index * 0.05), 
                  duration: 0.5,
                  type: "spring"
                }}
              />
            ))}
          </div>
          
          {/* Technology items */}
          <div>
            {technologies.map((tech, index) => (
              <TechCard 
                key={tech.id} 
                tech={tech} 
                isEven={index % 2 === 0} 
                index={index} 
              />
            ))}
          </div>
        </div>
        
        {/* Animated caption at the bottom */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p 
            className="italic text-gray-500 mb-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            Scroll to explore my technical journey
          </motion.p>
          <motion.div 
            className="inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
            aria-hidden="true"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke={themeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;
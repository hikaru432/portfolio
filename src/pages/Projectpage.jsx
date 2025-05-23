import React from 'react'
import { motion } from 'framer-motion'
import Project from '../components/section/Project'

const Projectpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Project />
    </motion.div>
  )
}

export default Projectpage
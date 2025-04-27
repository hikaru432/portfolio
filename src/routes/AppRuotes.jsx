import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavbarLayout from '../components/layout/NavbarLayout';

// Public Routes
import Home from '../pages/Homepage'
import About from '../pages/Aboutpage'
import Contact from '../pages/Contactpage'

const AppRuotes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>


    </Routes>
  )
}

export default AppRuotes
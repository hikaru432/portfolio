import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../section/Footer';

const NavbarLayout = () => {
  const customNavItems = [
    { name: 'Home', to: '/' },
    { name: 'About me', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        title="Portfolio"
        navItems={customNavItems}
        showLogin={true}
        loginPath="/login"
        primaryColor="#600e13"
        hoverColor="#c9184a"
      />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default NavbarLayout;
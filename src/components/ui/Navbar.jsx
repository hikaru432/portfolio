import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

// ui components
import InlineIcons from './InlineIcons';

const Navbar = ({
  title = "Portfolio",
  navItems = [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ],
    showLogin = true,
    loginPath = '/login',
    primaryColor = '#800e13',
    hoverColor = '#c9184a',
    className = '',
    ...props
    }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  // Base classes for the navbar
  const baseClasses = 'w-full z-[9999] text-white fixed top-0 left-0 right-0';
  
  // Color classes
  const colorClasses = 'shadow-lg';
  
  // Mobile menu classes
  const mobileMenuClasses = `${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`;
  
  // Mobile menu item classes
  const mobileMenuItemClasses = `flex items-center px-3 py-2 rounded-md text-white hover:text-white transition-colors duration-200`;

  return (
    <nav 
      className={`${baseClasses} ${colorClasses} ${className}`} 
      style={{ 
        backgroundColor: primaryColor,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Fixed width */}
          <div className="flex-shrink-0 font-bold text-xl w-40">
            <Link to="/" className="hover:text-gray-200 transition-colors duration-200">{title}</Link>
          </div>

          {/* Desktop Menu - Using fixed width for nav items */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="flex justify-center space-x-[4px]">
              {navItems.map((item) => (
                <div key={item.name} className="px-3 py-2">
                  <Link 
                    to={item.to}
                    className={`relative flex items-center text-white hover:text-gray-200 transition-colors duration-200 ${
                      isActive(item.to) ? 'font-semibold' : ''
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span 
                        className={`absolute left-0 right-0 bottom-[-4px] h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out ${
                          isActive(item.to) ? 'scale-x-100' : 'scale-x-0'
                        } hover:scale-x-100`}
                      ></span>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Login Button - Fixed width */}
          <div className="hidden md:flex md:items-center w-40 justify-end">
            {showLogin && (
              <div className="ml-6">
                  <InlineIcons />
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white transition duration-200"
              style={{ backgroundColor: isOpen ? hoverColor : 'transparent' }}
              onClick={toggleMenu}
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={mobileMenuClasses}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ borderTop: `1px solid ${hoverColor}` }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={mobileMenuItemClasses}
              style={{ backgroundColor: isActive(item.to) ? hoverColor : 'transparent' }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {showLogin && (
            <Link 
              to={loginPath}
              className="flex w-full items-center px-3 py-2 rounded-md bg-[#a4133c] text-white hover:bg-[#c9184a] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  showLogin: PropTypes.bool,
  loginPath: PropTypes.string,
  primaryColor: PropTypes.string,
  hoverColor: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
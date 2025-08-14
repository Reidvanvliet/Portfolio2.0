import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../contexts/ScrollContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollRef, numPages } = useScrollProgress();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Define scroll positions for each section based on your app structure
    const sectionPositions = {
      'home': 0,
      'projects': 0.6 / numPages, // RTS Solutions starts around here
      'experience': 2.4 / numPages, // Experience section
      'contact': 3 / numPages // Contact section
    };

    const targetPosition = sectionPositions[section] || 0;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const targetScroll = targetPosition * scrollHeight;

    scrollContainer.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-60">
        <div className="flex justify-between items-start px-6 lg:px-12 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Logo.svg" 
              alt="Logo" 
              className="h-20 lg:h-32 w-auto"
            />
          </div>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 mt-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-xs backdrop-invert-15 hover:bg-white/20 transition-all duration-300 text-gray-200"
          >
            <span className="text-white font-medium">Menu</span>
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Floating Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 lg:top-18 right-6 lg:right-12 z-65 bg-white/10 backdrop-blur-xs backdrop-invert-15 border border-white/20 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-60"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
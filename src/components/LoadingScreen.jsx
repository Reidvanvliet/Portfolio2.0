import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({onLoadingComplete}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Critical images that need to load before showing the site
    const criticalImages = [
      '/Origami-background.jpg',
      '/Logo.svg',
      '/RTS.png',
      '/RTS-mobile.png',
      '/Golden-chopsticks.png',
      '/Golden-chopsticks-mobile.png',
      '/Jamming.png',
      '/Jamming-mobile.png',
      '/Cork-background.jpg',
      '/Index-card.jpg',
      '/Pushpin.png',
      '/Restaurants-delivered.png'
    ];

    let loadedCount = 0;
    const totalImages = criticalImages.length;

    const updateProgress = () => {
      const progress = Math.round((loadedCount / totalImages) * 100);
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 800);
        }, 500);
      }
    };

    // Load all critical images
    criticalImages.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        updateProgress();
      };
      img.onerror = () => {
        // Still count failed images to prevent infinite loading
        loadedCount++;
        updateProgress();
      };
      img.src = src;
    });

    // Fallback timeout in case images take too long
    const fallbackTimeout = setTimeout(() => {
      if (loadingProgress < 100) {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 800);
        }, 500);
      }
    }, 10000); // 10 second timeout

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete, loadingProgress]);

  return (
    <motion.div 
    className="fixed flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 absolute inset-0 z-100"
    initial={{ opacity: 1 }}
    animate={isComplete ? { opacity: 0 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#FFD700", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#FFA500", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#B8860B", stopOpacity:1}} />
          </linearGradient>
        </defs>
        
        {/* Black outline for first V */}
        <motion.path
          d="M 40 40 L 75 130 Q 80 135 85 130 L 120 40"
          fill="none"
          stroke="black"
          strokeWidth="26"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Black outline for second V */}
        <motion.path
          d="M 80 40 L 115 130 Q 120 135 125 130 L 160 40"
          fill="none"
          stroke="black"
          strokeWidth="26"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 0.7,
            ease: "easeInOut"
          }}
        />
        
        {/* Gold border for first V */}
        <motion.path
          d="M 40 40 L 75 130 Q 80 135 85 130 L 120 40"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 1.0,
            ease: "easeInOut"
          }}
        />
        
        {/* Gold border for second V */}
        <motion.path
          d="M 80 40 L 115 130 Q 120 135 125 130 L 160 40"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 1.2,
            ease: "easeInOut"
          }}
        />
        
        {/* Black fill for first V */}
        <motion.path
          d="M 40 40 L 75 130 Q 80 135 85 130 L 120 40"
          fill="none"
          stroke="black"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 1.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Black fill for second V */}
        <motion.path
          d="M 80 40 L 115 130 Q 120 135 125 130 L 160 40"
          fill="none"
          stroke="black"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.5,
            delay: 1.7,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
      
      {/* Loading Progress Bar */}
      <div className="mt-4 w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
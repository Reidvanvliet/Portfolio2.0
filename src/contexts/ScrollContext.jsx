import { createContext, useContext, useRef } from 'react';
import { useScroll } from 'framer-motion';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const numPages = 2.7;

  return (
    <ScrollContext.Provider value={{ scrollYProgress, numPages, scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollProgress = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollProgress must be used within a ScrollProvider');
  }
  return context;
};
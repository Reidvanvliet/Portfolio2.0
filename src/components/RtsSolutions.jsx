import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext"

const RtsSolutions = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [0.3 / numPages, .6 / numPages],
    ["circle(0)", "circle(100%)"]
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="sticky w-full h-screen z-10 top-1/2 overflow-hidden left-1/2 transform -translate-y-1/2"
      style={{
        clipPath: circle,
        background: "center no-repeat url(RTS.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen backdrop-blur-[3px]">
        {windowWidth < 700 ? (
          <img src="RTS-mobile.png" />
        ) : (
          <img src="RTS.png" className="max-h-full" />
        )}
        <a 
          href="https://rtssolutionsltd.ca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bg-sunset text-red-900 font-[Reglisse] text-5xl left-1/2 z-12 transform -translate-x-1/2 -translate-y-1/2 bottom-1/8 px-10 py-3 text-center shadow-xl/60 transition-all duration-200 rounded-2xl shadow-md/50 hover:text-red-950 active:shadow-none active:scale-95 border-3"
        >
          RTS Solutions
        </a>
      </div>
    </motion.div>
  );
};

export default RtsSolutions;
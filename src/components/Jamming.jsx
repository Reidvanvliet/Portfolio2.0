import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Jamming = ({ numPages }) => {
  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [1.4 / numPages, 1.6 / numPages],
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
      className="fixed w-full h-full z-30 top-1/2 overflow-hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        clipPath: circle,
        background: "center no-repeat url(Jamming.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen backdrop-blur-[3px]">
        {windowWidth < 700 ? (
          <img src="Jamming-mobile.png" />
        ) : (
          <img src="Jamming.png" className="max-h-full" />
        )}
        <a
          href="https://rtssolutionsltd.ca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute whitespace-nowrap text-slate-200 bg-gradient-to-b from-gray-400 via-gray-700 via-gray-900 to-gray-400 text-black left-1/2 z-35 transform -translate-x-1/2 -translate-y-1/2 bottom-1/8 px-12 py-5 text-center drop-shadow-xl hover:from-stone-200 hover:via-stone-300 hover:via-stone-700 hover:to-stone-300 transition-all duration-200 text-4xl font-[RacingSans] rounded-2xl shadow-md/50 hover: active:shadow-inner active:scale-95"
        >
          Visit Jamming
        </a>
      </div>
    </motion.div>
  );
};

export default Jamming;
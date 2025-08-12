import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Jamming = ({ numPages }) => {
  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [0.9 / numPages, 1.2 / numPages],
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
      </div>
    </motion.div>
  );
};

export default Jamming;
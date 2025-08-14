import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext"

const RtsSolutions = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [0.3 / numPages, 0.6 / numPages],
    ["circle(0)", "circle(100%)"]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.6 / numPages, 0.7 / numPages, 1],
    [1, 1, 0, 0],
    { clamp: false }
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
      className="sticky top-0 w-full h-screen z-10 overflow-hidden"
      style={{
        clipPath: circle,
        background: "center no-repeat url(RTS.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen backdrop-blur-[3px]">
        {windowWidth < 700 ? (
          <img src="RTS-mobile.png" />
        ) : (
          <img src="RTS.png" />
        )}
      <motion.div
        className="absolute flex flex-col justify-center items-center w-96 h-96 xl:h-144 xl:w-144 border border-white/20 bg-blue-500/20 backdrop-blur-md z-14 rounded-full"
        style={{
          scale
        }}
      >
        <div className="w-full h-full p-8 flex flex-col items-center justify-center pt-24">
          <p 
            className="text-sm xl:text-base text-center leading-relaxed mb-4"
            style={{
              shapeOutside: 'circle(50%)',
              textAlign: 'center'
            }}
          >
            RTS Solutions Ltd is a React-based SPA for a Kelowna-area general contracting and renovation company. Built with React 19.1, React Router, GSAP, and custom CSS modules, it features an image-rich gallery, local SEO optimization, and PWA support. Deployed on Netlify with a custom domain, it highlights services like kitchen, bathroom, and full home renovations to attract clients across Kelowna, West Kelowna, and the Okanagan Valley.
          </p>
          <a 
            href="https://rtssolutionsltd.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm xl:text-base px-4 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Visit Site
          </a>
        </div>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default RtsSolutions;
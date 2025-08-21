import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext";

const GoldenChopsticks = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [0.65 / numPages, 0.9 / numPages],
    ["circle(0)", "circle(100%)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.9 / numPages, 1 / numPages, 1],
    [1, 1, 0, 0],
    { clamp: false }
  );

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
        background: "center no-repeat url(Golden-chopsticks.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen backdrop-blur-[3px]">
        {windowWidth < 700 ? (
          <img src="Golden-chopsticks-mobile.png" />
        ) : (
          <img src="Golden-chopsticks.png" />
        )}
        <motion.div
          className="absolute flex flex-col justify-center items-center w-96 h-96 xl:h-144 xl:w-144 border border-white/20 bg-pink-400/30 backdrop-blur-md z-24 rounded-full"
          style={{
            scale,
          }}
        >
          <div className="w-full h-full p-8 flex flex-col items-center justify-center pt-24">
            <p
              className="text-sm xl:text-base text-center leading-relaxed mb-4"
              style={{
                shapeOutside: "circle(50%)",
                textAlign: "center",
              }}
            >
              Dragon Bite is a full-stack React web application
              featuring user authentication via Google OAuth, menu
              management, cart functionality, and
              Stripe payments. The frontend uses React 19 with React
              Router, Tailwind CSS, and Google Maps API for address
              autocomplete. The Node.js/Express backend implements JWT
              authentication, PostgreSQL database with Sequelize ORM, admin menu
              management, order processing, and Google Cloud Storage for file
              uploads. <str className="font-bold">(Demo Site)</str>
            </p>
            <a
              href="https://golden-chopsticks.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm/4 xl:text-base px-4 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Visit Site
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GoldenChopsticks;

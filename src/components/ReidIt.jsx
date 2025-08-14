import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext";

const RtsSolutions = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [1.05 / numPages, 1.3 / numPages],
    ["circle(0)", "circle(100%)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1.3 / numPages, 1.4 / numPages, 1],
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
      id="projects"
      className="sticky top-0 w-full h-screen z-10 overflow-hidden"
      style={{
        clipPath: circle,
        background: "center no-repeat url(ReidIt.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen backdrop-blur-[3px]">
        {windowWidth < 700 ? (
          <img src="ReidIt-mobile.png" />
        ) : (
          <img src="ReidIt.png" />
        )}
        <motion.div
          className="absolute flex flex-col justify-center items-center w-96 h-96 xl:h-144 xl:w-144 border border-white/20 bg-white/30 backdrop-blur-md z-14 rounded-full"
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
              ReidIt is a Reddit clone built with React and Redux Toolkit that
              replicates core Reddit functionality. The application fetches
              real-time data from Reddit using a CORS proxy to bypass
              browser restrictions. Features include browsing popular posts,
              viewing subreddit communities, reading comments, and navigating
              articles. The responsive interface mimics Reddit's design while
              providing smooth state management and asynchronous data handling
              for an authentic social experience.
            </p>
            <a
              href="https://reidit.netlify.app/"
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

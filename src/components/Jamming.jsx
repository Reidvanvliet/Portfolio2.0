import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext";

const Jamming = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const circle = useTransform(
    scrollYProgress,
    [1.15 / numPages, 1.4 / numPages],
    ["circle(0)", "circle(100%)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1.4 / numPages, 1.5 / numPages, 1],
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
        background: "center no-repeat url(Jamming.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen backdrop-blur-[3px]">
        {windowWidth < 700 ? (
          <img src="Jamming-mobile.png" />
        ) : (
          <img src="Jamming.png" />
        )}
        <motion.div
          className="absolute text-gray-200 flex flex-col justify-center items-center w-96 h-96 xl:h-144 xl:w-144 border border-white/20 bg-green-500/20 backdrop-blur-md z-14 rounded-full"
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
              Jammming is a React web application that integrates with Spotify's
              Web API for music discovery and playlist management. Built with
              Vite and modern React hooks, it enables users to search for
              tracks, artists, and albums using Spotify's client credentials
              flow. The app features OAuth authentication for playlist creation,
              allowing logged-in users to curate custom playlists and save them
              directly to their Spotify accounts. The interface displays search
              results in a responsive grid layout with mobile optimization.
            </p>
            <a
              href="https://jamming-reidvanvliet.netlify.app/"
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

export default Jamming;

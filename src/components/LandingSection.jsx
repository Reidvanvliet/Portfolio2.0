import React, { useEffect, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext";

const LandingSection = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const lastLoggedValue = useRef(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (Math.abs(latest - lastLoggedValue.current) >= 0.1) {
        console.log("Scroll progress:", latest.toFixed(2));
        lastLoggedValue.current = latest;
      }
    });
  }, [scrollYProgress]);

  const text = "Reid VanVliet";

  const y = useTransform(scrollYProgress, [0/numPages , 0.15/numPages], ["80vh", "0vh"]);

  return (
    <motion.div
      id="home"
      className="sticky top-0 w-full h-screen z-2 opacity-100 overflow-hidden left-1/2"
      style={{
        backgroundImage: "url(Origami-background.jpg)",
        backgroundPosition: "80% 50%",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute text-center sm:text-9xl text-7xl tracking-wider left-1/2 top-1/4 mt-10 w-full transform -translate-x-1/2 -translate-y-1/2  text-red-900 z-5">
        {text.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="block font-[Reglisse]">
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block" }}
                animate={{
                  y: [0, 5, 0],
                  rotate: [-7, 7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: i * 0.5, // stagger inside each word
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      <h2 className="text-5xl sm:text-7xl mt-10 font-bold">PORTFOLIO</h2>
      </div>
      <motion.img 
        src="myFaceAnimated.png"
        alt="Image of Reid Vanvliet"
        className="transform translate-y-1/2 sm:translate-y-1/4 lg:translate-y-0 z-1"
        style={{
          y
        }}
      />
    </motion.div>
  );
};

export default LandingSection;

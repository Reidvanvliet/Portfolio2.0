import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingSection = ({numPages}) => {
  const { scrollYProgress } = useScroll();
  const lastLoggedValue = useRef(0);
  let animationStart = 0;

  const titles = ["Web Developer", "Builder", "Entrepreneur", "Manager"];

  const animation = (title, index) => {
    const animationEnd = ((index + 1) * 0.2/numPages).toFixed(2)
    const animationMiddle1 = parseFloat(animationStart) + 0.08/numPages;
    const animationMiddle2 = parseFloat(animationStart) + 0.12/numPages;

      console.log("start " + animationStart)
      console.log("middle1 " + animationMiddle1)
      console.log("middle2 " + animationMiddle2)
      console.log("end " + animationEnd);

    const opacity = useTransform(scrollYProgress, [animationStart, animationMiddle1, animationMiddle2, animationEnd], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [animationStart, animationEnd], ['0', "-100vh"]);
    const scale = useTransform(scrollYProgress, [animationStart, animationMiddle1, animationMiddle2, animationEnd], [.5, 1, 1, .5]);

    animationStart = animationEnd;

    return (
      <motion.div
          style={{ opacity, y, scale }}
          >
          <h1 className="absolute text-gray-300 left-1/2 z-2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">{title}</h1>
        </motion.div>
    )
  }


  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (Math.abs(latest - lastLoggedValue.current) >= 0.1) {
        console.log("Scroll progress:", latest.toFixed(2));
        lastLoggedValue.current = latest;
      }
    });
  }, [scrollYProgress]);


  return (
    <motion.div 
    className="fixed w-full z-1 opacity-100 overflow-hidden left-1/2 transform -translate-x-1/2"
    >
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(0.8)",
        zIndex: -2,
      }}
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
            <motion.img
          src="/Me.png"
          alt="Reid Vanvliet"
          style={{
            width: 'auto',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        />
    {titles.map((title, index) => {
      return animation(title, index)
    })}
      </motion.div>
  );
};

export default LandingSection;

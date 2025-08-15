import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext";

const ExperienceSection = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [flippedCards, setFlippedCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false
  });

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const opacity = useTransform(
    scrollYProgress,
    [1.8 / numPages, 2.0 / numPages],
    [0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [1.8 / numPages, 1.81 / numPages],
    [0, 1]
  );

  // Individual card animations (delayed by 0.1 after main animation starts)
  const card1Opacity = useTransform(
    scrollYProgress,
    [1.9 / numPages, 2.0 / numPages],
    [0, 1]
  );
  const card1Scale = useTransform(
    scrollYProgress,
    [1.9 / numPages, 2.0 / numPages],
    [2, 1]
  );
  const card1Rotate = useTransform(
    scrollYProgress,
    [1.9 / numPages, 2.0 / numPages],
    [-5, -5]
  );

  const card2Opacity = useTransform(
    scrollYProgress,
    [2.0 / numPages, 2.1 / numPages],
    [0, 1]
  );
  const card2Scale = useTransform(
    scrollYProgress,
    [2.0 / numPages, 2.1 / numPages],
    [2, 1]
  );
  const card2Rotate = useTransform(
    scrollYProgress,
    [2.0 / numPages, 2.1 / numPages],
    [3, 3]
  );

  const card3Opacity = useTransform(
    scrollYProgress,
    [2.1 / numPages, 2.2 / numPages],
    [0, 1]
  );
  const card3Scale = useTransform(
    scrollYProgress,
    [2.1 / numPages, 2.2 / numPages],
    [2, 1]
  );
  const card3Rotate = useTransform(
    scrollYProgress,
    [2.1 / numPages, 2.2 / numPages],
    [-3, -3]
  );

  const card4Opacity = useTransform(
    scrollYProgress,
    [2.2 / numPages, 2.3 / numPages],
    [0, 1]
  );
  const card4Scale = useTransform(
    scrollYProgress,
    [2.2 / numPages, 2.3 / numPages],
    [2, 1]
  );
  const card4Rotate = useTransform(
    scrollYProgress,
    [2.2 / numPages, 2.3 / numPages],
    [5, 5]
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
      className="sticky top-0 w-full h-screen z-40 top-0 left-0 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 justify-center justify-items-center items-center p-4 select-none overflow-hidden"
      style={{
        opacity,
        scale,
        background: "center no-repeat url(Cork-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Web Developer Card */}
      <motion.div 
        style={{ opacity: card1Opacity, scale: card1Scale, rotate: card1Rotate }}
        className="relative h-64 w-96 lg:max-w-120 mx-2 mt-15 p-3 lg:p-4 flex flex-col justify-center items-center text-center cursor-pointer"
        onClick={() => handleCardClick('card1')}
      >
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            className="absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d"
            animate={{ rotateY: flippedCards.card1 ? 180 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            
            {/* Front of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <img 
                src="/Pushpin.png" 
                alt="Pushpin" 
                className="absolute lg:w-12 lg:h-8 mt-3 lg:mt-5 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 z-20"
              />
              <div className="relative z-12 text-black h-full flex flex-col items-center justify-center">
                <h2 className="text-xl lg:text-2xl font-bold">Web Developer</h2>
                <p className="text-xs mt-2 opacity-60">Click to flip</p>
              </div>
            </div>
            {/* Back of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <div className="relative z-12 text-black p-6 h-full flex flex-col justify-center">
                <p className="text-xs lg:text-sm">I'm a full-stack developer with experience through courses on Codecademy and a certification in Full-Stack Engineering. I specialize in the PERN stack and have worked on multiple professional and personal projects. I have a strong understanding of web security and frequently integrate AI tools into development. I'm constantly seeking new challenges and opportunities to grow because web development is AWESOME!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Builder Card */}
      <motion.div 
        style={{ opacity: card2Opacity, scale: card2Scale, rotate: card2Rotate }}
        className="relative h-64 w-96 lg:max-w-120 mx-2 -mt-5 p-3 lg:p-4 flex flex-col justify-center items-center text-center cursor-pointer"
        onClick={() => handleCardClick('card2')}
      >
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            className="absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d"
            animate={{ rotateY: flippedCards.card2 ? 180 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <img 
                src="/Pushpin.png" 
                alt="Pushpin" 
                className="absolute lg:w-12 lg:h-8 mt-3 lg:mt-5 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 z-20"
              />
              <div className="relative z-10 text-black h-full flex flex-col items-center justify-center">
                <h2 className="text-xl lg:text-2xl font-bold">Builder</h2>
                <p className="text-xs mt-2 opacity-60">Click to flip</p>
              </div>
            </div>
            {/* Back of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <div className="relative z-10 text-black p-6 h-full flex flex-col justify-center">
                <p className="text-xs lg:text-sm">I bring 5 years of cumulative experience in construction, working on a diverse range of projects including new home builds, sheet metal structures, and complex renovations with challenging concept designs. I thrive on the creativity and problem-solving that construction demands, and I genuinely enjoy building, creating, and taking on new challenges that push my skills forward.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Entrepreneur Card */}
      <motion.div 
        style={{ opacity: card3Opacity, scale: card3Scale, rotate: card3Rotate }}
        className="relative h-64 w-96 lg:max-w-120 mx-2 -mt-5 p-3 lg:p-4 flex flex-col justify-center items-center text-center cursor-pointer"
        onClick={() => handleCardClick('card3')}
      >
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            className="absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d"
            animate={{ rotateY: flippedCards.card3 ? 180 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <img 
                src="/Pushpin.png" 
                alt="Pushpin" 
                className="absolute lg:w-12 lg:h-8 mt-3 lg:mt-5 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 z-20"
              />
              <div className="relative z-10 text-black h-full flex flex-col items-center justify-center">
                <h2 className="text-xl lg:text-2xl font-bold">Entrepreneur</h2>
                <p className="text-xs mt-2 opacity-60">Click to flip</p>
              </div>
            </div>
            {/* Back of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <div className="relative z-10 text-black p-6 h-full flex flex-col justify-center">
                <p className="text-xs lg:text-sm">At 20 years old, I founded a restaurant delivery service. I started with one major restaurant and, over the course of three years, scaled the business to include 15 restaurants, a team of 7 employees, and over 2,000 deliveries per month. This experience sharpened my skills in operations, logistics, customer service, and business development—while fueling my passion for building efficient systems from the ground up.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Manager Card */}
      <motion.div 
        style={{ opacity: card4Opacity, scale: card4Scale, rotate: card4Rotate }}
        className="relative h-64 w-96 lg:max-w-120 mx-2 -mt-5 -mb-5 p-3 lg:p-4 flex flex-col justify-center items-center text-center cursor-pointer"
        onClick={() => handleCardClick('card4')}
      >
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            className="absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d"
            animate={{ rotateY: flippedCards.card4 ? 180 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <img 
                src="/Pushpin.png" 
                alt="Pushpin" 
                className="absolute lg:w-12 lg:h-8 mt-3 lg:mt-5 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 z-20"
              />
              <div className="relative z-10 text-black h-full flex flex-col items-center justify-center">
                <h2 className="text-xl lg:text-2xl font-bold">Manager</h2>
                <p className="text-xs mt-2 opacity-60">Click to flip</p>
              </div>
            </div>
            {/* Back of card */}
            <div className="absolute inset-0 w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
                style={{ backgroundImage: 'url(/Index-card.jpg)' }}
              />
              <div className="relative z-10 text-black p-6 h-full flex flex-col justify-center">
                <p className="text-xs lg:text-sm">When Papa John's West Kelowna came under new ownership, I saw an opportunity to help. Over the next three years, I worked with the owner to build a strong, reliable team and establish a positive reputation within the community. Together, we implemented operational practices that improved efficiency, consistency, and overall performance, transforming the store into a well-run, respected business.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Center image for large screens only */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1">
        <img 
          src="/Restaurants-delivered.png" 
          alt="Restaurants delivered" 
          className="shadow-lg/50 max-w-xs brightness-85"
        />
        <img 
          src="/Pushpin.png" 
          alt="Pushpin" 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2 w-8 h-6 z-20"
        />
      </div>
    </motion.div>
  );
};

export default ExperienceSection;

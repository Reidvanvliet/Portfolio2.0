import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ExperienceSection = ({ numPages }) => {
  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let animationStart = 1.8 / numPages;

  const experience = [
    { title: "Web Developer", body: "I’m a full-stack developer with 1,000+ hours of experience through courses on Codecademy with a certification in Full-Stack Engineering. I specialize in the PERN stack and have worked on multiple professional and personal projects. I have a strong understanding of web security and frequently integrate AI tools into my development process. I'm constantly seeking new challenges and opportunities to grow because web development is AWESOME!" },
    { title: "Builder", body: "I bring 5 years of cumulative experience in construction, working on a diverse range of projects including new home builds, sheet metal structures, and complex renovations with challenging concept designs. I thrive on the creativity and problem-solving that construction demands, and I genuinely enjoy building, creating, and taking on new challenges that push my skills forward." },
    { title: "Entrepreneur", body: "At 20 years old, I founded a restaurant delivery service. I started with one major restaurant and, over the course of three years, scaled the business to include 15 restaurants, a team of 7 employees, and over 2,000 deliveries per month. This experience sharpened my skills in operations, logistics, customer service, and business development—while fueling my passion for building efficient systems from the ground up." },
    { title: "Manager", body: "When Papa John’s West Kelowna came under new ownership, I saw an opportunity to step in and make a difference. Over the next three years, I worked closely with the owner to build a strong, reliable team and establish a positive reputation within the community. Together, we implemented a variety of operational practices that improved efficiency, consistency, and overall performance, transforming the store into a well-run, respected business." },
  ];

  const opacity = useTransform(
    scrollYProgress,
    [1.7 / numPages, 1.9 / numPages],
    [0, 1]
  );

  const animation = (experience, index) => {
    const animationEnd =
      parseFloat(animationStart) + parseFloat((0.2 / numPages).toFixed(2));

    console.log("start " + animationStart);
    console.log("end " + animationEnd);

    const opacity = useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [0, 1]
    );
    const scale = useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [4, 1]
    );

    animationStart = animationEnd;

    const tiltAngle = index % 2 === 0 ? -5 : 5;
    const rotate = useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [tiltAngle, tiltAngle]
    );
    
    return (
      <motion.div 
        style={{ opacity, scale, rotate }}
        className="relative h-64 max-w-120 m-2 p-4 flex flex-col justify-center items-center text-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg/50"
          style={{ backgroundImage: 'url(/Index-card.jpg)' }}
        />
        <img 
          src="/Pushpin.png" 
          alt="Pushpin" 
          className="absolute lg:mt-7 lg:w-12 lg:h-8 mt-4 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 z-20"
        />
        <div className="relative z-10 text-black">
          <h2 className="text-2xl font-bold mb-2">
            {experience.title}
          </h2>        
          <p className="text-xs sm:text-sm">{experience.body}</p>
        </div>
      </motion.div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
// lg:grid lg:grid-cols-2 lg:gap-4 lg:place-items-center lg:max-h-screen lg:max-w-4xl lg:mx-auto lg:my-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
  return (
    <motion.div
      className="fixed w-full h-full z-20 top-0 left-0 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 justify-center justify-items-center items-center p-4"
      style={{
        opacity,
        background: "center no-repeat url(Cork-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {experience.map((experience, index) => {
        return animation(experience, index);
      })}
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

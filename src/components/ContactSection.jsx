import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollProgress } from "../contexts/ScrollContext";

const ContactSection = () => {
  const { scrollYProgress, numPages } = useScrollProgress();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    additionalInfo: ''
  });

  const height = useTransform(
    scrollYProgress,
    [2.3 / numPages, 2.5 / numPages],
    ["0vh", "100vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [2.3 / numPages, 2.31 / numPages],
    [0, 1]
  );

   const opacity2 = useTransform(
    scrollYProgress,
    [2.5 / numPages, 2.6 / numPages],
    [0, 1]
  );

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <motion.div
      className="fixed w-full h-full z-50 top-0 left-0 flex flex-col justify-center items-center med:p-4 overflow-y-hidden bg-slate-100"
      style={{
        height,
        opacity,
      }}
    >
      <div className="bg-slate-50 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-full">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 md:gap-6 gap-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
            
            <button
              onClick={downloadResume}
              className="w-full bg-green-600 text-white md:py-2 md:px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Download Resume
            </button>
          </div>
        </form>

        <div className="text-center my-8">
          <div className="hidden md:flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <p className="-mt-3 md:mt-8 text-lg font-medium text-gray-700">
            Call <a href="tel:250-718-9276" className="text-blue-600 hover:underline">250-718-9276</a>
          </p>
        </div>
      </div>
    <motion.button
        style={{
            opacity: opacity2
        }}
        onClick={scrollToTop}
        className="fixed bottom-0 left-0 right-0 bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-200 z-30"
    >
        Back to Start
    </motion.button>
    </motion.div>
  );
};

export default ContactSection;
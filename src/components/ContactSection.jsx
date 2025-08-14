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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [phoneError, setPhoneError] = useState('');

  const height = useTransform(
    scrollYProgress,
    [2.35 / numPages, 2.55 / numPages],
    ["0vh", "100vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [2.35 / numPages, 2.36 / numPages],
    [0, 1]
  );

   const opacity2 = useTransform(
    scrollYProgress,
    [2.55 / numPages, 2.65 / numPages],
    [0, 1]
  );

  const validatePhoneNumber = (phone) => {
    // Regex for North American phone numbers (with or without country code)
    // Accepts formats like: (123) 456-7890, 123-456-7890, 123.456.7890, 123 456 7890, +1 123 456 7890
    const phoneRegex = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(phone.replace(/\s+/g, ' ').trim());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate phone number on change
    if (name === 'phoneNumber') {
      if (value && !validatePhoneNumber(value)) {
        setPhoneError('Please enter a valid phone number (e.g., 250-718-9276)');
      } else {
        setPhoneError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate phone number before submission if provided
    if (formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber)) {
      setPhoneError('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '54a6242d-e4ce-452d-ab07-726d2044d0ef');
    formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('company', formData.companyName);
    formDataToSend.append('phone', formData.phoneNumber);
    formDataToSend.append('message', formData.additionalInfo);
    formDataToSend.append('subject', 'New Contact Form Submission from Portfolio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    document.getElementById("app").scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Reid_VanVliet_2025-08-14.pdf';
    link.download = 'Reid_VanVliet_2025-08-14.pdf';
    link.click();
  };

  return (
    <motion.div
      className="sticky top-0 w-full h-screen z-50 top-0 left-0 flex flex-col justify-center items-center p-2 md:p-4 overflow-y-hidden bg-slate-100"
      style={{
        height,
        opacity,
      }}
    >
      <div className="bg-slate-50 backdrop-blur-sm rounded-lg shadow-xl p-4 md:p-8 max-w-2xl w-full max-h-full overflow-y-hidden">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-gray-800">Get In Touch</h2>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Sorry, there was an error sending your message. Please try again or contact me directly.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                className="w-full px-3 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-3 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className={`w-full px-3 py-1.5 md:py-2 border rounded-md focus:outline-none focus:ring-2 ${
                phoneError 
                  ? 'border-red-300 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {phoneError && (
              <p className="mt-1 text-sm text-red-600">{phoneError}</p>
            )}
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="3"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full px-3 py-1.5 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 md:gap-6 gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-1.5 md:py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-200 text-sm md:text-base"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            <button
              onClick={downloadResume}
              className="w-full bg-green-600 text-white py-1.5 md:py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm md:text-base"
            >
              Download Resume
            </button>
          </div>
          
          <button
            onClick={() => window.location.href = 'tel:250-718-9276'}
            className="w-full bg-gray-600 text-white py-1.5 md:py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm md:text-base"
          >
            Call 250-718-9276
          </button>
        </form>
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
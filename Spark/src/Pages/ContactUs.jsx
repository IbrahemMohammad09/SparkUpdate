import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import HeroSection from "../assets/image/ContactUs/ContactUs Photo.png";

const ContactUs = () => {
  const animationProps = {
    initial: { scale: 1.1, y: -10 },
    animate: { scale: 1, y: 0 },
    transition: { duration: 3, ease: "easeOut" },
  };

  return (
    <div className="flex items-center justify-center relative overflow-hidden py-10 min-h-[calc(100vh-80px)]">
      {/* Background Image */}
      <motion.img
        src={HeroSection}
        alt="Background"
        className="absolute top-10 w-full h-[70vh] z-0 rounded-lg shadow-lg"
        {...animationProps}
      />

      {/* Dark Overlay with same animation */}
      <motion.div
        className="absolute top-10 w-full h-[70vh] bg-black opacity-20 z-10 rounded-lg"
        {...animationProps}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center mt-40">
        <motion.h2
          className="text-4xl lg:text-7xl font-bold text-white mb-10 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="bg-white p-12 rounded-3xl shadow-2xl flex flex-col items-center space-y-10 w-82 lg:w-[500px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              We're Here to Help!
            </h3>
            <p className="text-gray-600">
              Have questions or need support? Our team is always ready to assist
              you. Feel free to reach out via email or phone, and we'll be happy
              to respond to your inquiry as soon as possible.
            </p>
          </motion.div>

          <motion.a
            href="mailto:Spark.contact.it@gmail.com"
            className="flex items-center justify-center w-3/4 px-8 py-4 bg-gradient-to-r from-[#1a92ce] to-[#176fa6] text-white rounded-full shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl hover:from-[#3ba8e0] hover:to-[#2f8ac3]"
            whileHover={{ scale: 1.05 }}
          >
            <FiMail className="mr-2 text-xl" /> Email Us
          </motion.a>
          <motion.a
            href="tel:+963962272881"
            className="flex items-center justify-center w-3/4 px-8 py-4 bg-gradient-to-r from-[#1a92ce] to-[#176fa6] text-white rounded-full shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl hover:from-[#3ba8e0] hover:to-[#2f8ac3]"
            whileHover={{ scale: 1.05 }}
          >
            <FiPhone className="mr-2 text-xl" /> Call Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { motion } from "framer-motion";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import image2 from "../assets/image/OurApp/11.png";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";


const OurApp = () => {
  MainTitle(" | Our App");
  return (
    <>
    <NavigationBar />
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 md:px-12 lg:px-24 xl:px-32 py-12 md:py-24">
      <div className="flex flex-col items-start text-left w-full md:w-1/2 max-w-2xl mx-auto mt-8 md:mt-0 md:mr-12 lg:mr-16">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-6 md:mb-8 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Our <span className="text-[#1a92ce]">App</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Experience the best of technology with our app, available on Google
          Play and the Apple Store. Fast, secure, and user-friendly.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.sparkengdev.app&pli=1"
            className="flex items-center justify-center gap-2 bg-[#1a92ce] hover:bg-[#165069] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base sm:text-lg font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <AiFillAndroid size={24} />
            Google Play
          </motion.a>

          <motion.a
            href="https://apps.apple.com/de/app/spark-company/id6667110509?l=en-GB"
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base sm:text-lg font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <AiFillApple size={24} />
            Apple Store
          </motion.a>
        </motion.div>
      </div>

      {/* الصورة */}
      <motion.div
        className="w-full md:w-1/2 max-w-xl pl-20 mb-8 md:mb-0 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={image2}
          alt="App Screenshot"
          className="w-full h-auto rounded-3xl transform hover:scale-[1.02] transition-transform duration-300"
        />
      </motion.div>
    </div> 
    <Footer />
    </>
  );
};

export default OurApp;

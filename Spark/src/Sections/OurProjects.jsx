import { motion,AnimatePresence } from "framer-motion";
import { FiArrowRight, FiSmartphone, FiGlobe,FiX } from "react-icons/fi";
import bgImage from "../assets/image/OurProjects/Bg.png";

import STEP from "../assets/image/OurProjects/STEP.jpg";
import SEA from "../assets/image/OurProjects/SEA.jpg";
import SOE from "../assets/image/OurProjects/SOE.jpg";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const OurProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const projects = [
    {
      id : 1,
      title: "STEP",
      type: "Web",
      description: "Buy and sell properties with confidence. Discover premium real estate opportunities tailored to your needs.",
      image: STEP,
      url : "https://Step-syria.com"
    },
    {
      id : 2,
      title: "SEA DETAILING",
      type: "Web",
      description: "Professional cleaning services for cars and home furniture — bringing freshness, shine, and comfort to your everyday life.",
      image: SEA,
      url : "https://sea-cardetailing.com"
    },
    {
      id : 3,
      title: "Star Of Elegance",
      type: "Web",
      description: "We specialize in innovative, custom furniture design that blends craftsmanship with modern aesthetics. Our mission is to transform ideas into reality, delivering exceptional quality and attention to detail.",
      image: SOE,
      url : "https://Starofelegance.com"
    },
  ];

  const primaryColor = "#1a92ce";
  const primaryHover = "#1476a3";

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      />
      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            OurProjects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our innovative solutions that transform ideas into digital
            reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl p-8 cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(26,146,206,0.3)] relative"
              style={{
                boxShadow: `0 4px 6px -1px ${primaryColor}10`,
                border: `1px solid ${primaryColor}10`,
              }}
            >
              <div 
                className="relative  rounded-lg overflow-hidden"
                onClick={() => handleImageClick(project.image)}
                >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full  object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>

                <div
                  className="px-3 py-1 rounded-full text-sm inline-flex items-center mt-2"
                  style={{
                    background: `${primaryColor}15`,
                    color: primaryColor,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {project.type === "Mobile" ? (
                    <FiSmartphone className="mr-2" />
                  ) : (
                    <FiGlobe className="mr-2" />
                  )}
                  {project.type} Application
                </div>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 relative h-[2px] bg-gray-200">
                  <div className="absolute bottom-0 left-0 w-0 h-full bg-[#1a92ce] transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    className="flex items-center px-4 py-2 rounded-full transition-all relative overflow-hidden border-2 group/button cursor-pointer"
                    style={{
                      borderColor: primaryColor,
                      color: primaryColor,
                    }}
                  >
                    <Link to={project.url}>
                      <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
                      Visit the website
                      </span>
                    </Link>

                    <FiArrowRight className="ml-2 transition-transform group-hover/button:translate-x-1 relative z-10 group-hover/button:text-white" />

                    <div
                      className="absolute inset-0 bg-[#1a92ce]  opacity-0 transition-all duration-300 w-0 group-hover/button:w-full group-hover/button:opacity-100"
                      style={{
                        background: `linear-gradient(to right, ${primaryColor} 50%, ${primaryHover} 100%)`,
                      }}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center items-center mt-12"
        >
          <Link
            to="/our_projects"
            className="relative tracking-wide flex items-center justify-center gap-2 px-8 py-4 bg-[#1a92ce] text-white font-medium rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:brightness-110 hover:translate-y-[-2px] hover:shadow-xl"
          >
           <span className="z-10">See All Projects</span>
           <span className="z-10 animate-wiggle"><FaArrowRight/></span>
           <span className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 rounded-full animate-shine pointer-events-none"></span>
         </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 bg-opacity-70 backdrop-blur-sm"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute -top-10 right-0 text-white p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                <FiX size={20} />
              </button>
              <motion.img
                src={selectedImage}
                alt="Enlarged project"
                className="w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurProjects;

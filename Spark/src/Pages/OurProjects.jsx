import MainTitle from "../Components/MainTitle";
import projects from "../Utils/ProjectsData";
import { FiArrowRight, FiSmartphone, FiGlobe } from "react-icons/fi";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import NavigationBar from "../Components/NavigationBar";
import { Link } from "react-router-dom";



export default function OurProjects() {
  MainTitle(" | Our Projects");

  const primaryColor = "#1a92ce";
  const primaryHover = "#1476a3";
  return (
    <>
      <NavigationBar />
      <div className="relative overflow-hidden bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-[#2fb0cd] text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg font-medium leading-relaxed">
              At <span className="text-[#2fb0cd] text-xl">SPARK</span>, We
              create modern, high-performance websites tailored to your business
              goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
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
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  
                  style={{
                    // minWidth: "100%",
                    // minHeight: "100%",
                    // objectFit: "contain",
                  }}
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
                        View Details
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
        </div>
        <Footer />
      </div>
    </>
  );
}

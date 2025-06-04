import MainTitle from "../Components/MainTitle";
import projects from "../Utils/ProjectsData";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationBar from "../Components/NavigationBar";

export default function OurProjects() {
  MainTitle("Our Projects");
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
            {projects.map(
              ({ id, title, description, imageUrl, projectUrl }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#2fb0cd] rounded-tr-2xl z-10"></div>

                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-scale-down"
                      style={{
                        minWidth: "100%",
                        minHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#2fb0cd]">
                      {title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        to={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-[#2fb0cd] to-[#17899a] shadow-md hover:shadow-lg transition-all duration-300 group-hover:from-[#17899a] group-hover:to-[#2fb0cd]"
                      >
                        <span>View Project</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FaArrowRight className="w-3.5 h-3.5" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#2fb0cd]/10 rotate-45"
                    whileHover={{
                      rotate: 50,
                      backgroundColor: "rgba(47, 176, 205, 0.15)",
                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

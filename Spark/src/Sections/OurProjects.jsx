import { motion } from "framer-motion";
import { FiArrowRight, FiSmartphone, FiGlobe } from "react-icons/fi";
import image1 from "../assets/image/OurProjects/1.jpg";
import image2 from "../assets/image/OurProjects/2.png";
import bgImage from "../assets/image/OurProjects/Bg.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const OurProjects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      type: "Web",
      description: "Modern online shopping solution with AI ",
      image: image1,
    },
    {
      title: "Fitness App",
      type: "Mobile",
      description: "Personalized workout and nutrition tracking application",
      image: image2,
    },
    {
      title: "Dashboard Analytics",
      type: "Web",
      description: "Real-time business intelligence dashboard",
      image: image1,
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
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[420] h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
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
                    <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
                      View Details
                    </span>

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
    </section>
  );
};

export default OurProjects;

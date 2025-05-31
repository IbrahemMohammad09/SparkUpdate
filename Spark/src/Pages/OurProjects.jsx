import MainTitle from "../Components/MainTitle";
import projects from "../Utils/ProjectsData";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
export default function OurProjects() {
  MainTitle("Our Projects");
  return (
    <div className="relative overflow-hidden bg-gray-50 ">
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:px-8">
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#2fb0cd] text-center text-5xl font-bold mb-6"
        >
          Our Projects
        </motion.p>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg font-medium mb-16 leading-relaxed">
        At <span className="text-[#2fb0cd] text-xl">SPARK </span>, We create modern, high-performance websites tailored to your business goals. Our projects combine innovative
           design, solid development, and a<span className="text-[#2fb0cd] "  > deep focus </span> on user experience — delivering digital solutions that leave a 
           lasting impact.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map(({ id, title, description, imageUrl, projectUrl }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.30 }}
              className=" before:content-[''] before:absolute before:top-0 before:right-0 before:w-24 before:h-24 before:border-t-4 before:border-r-4 before:border-[#2fb0cd] before:rounded-tr-[24px] before:z-10 group shadow-[0_4px_8px_rgba(47,176,205,0.1),_0_8px_16px_rgba(47,176,205,0.15)] relative flex flex-col bg-white rounded-[24px]  overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] 
              w-full sm:w-[47%] lg:w-[48%] max-w-full "
            >
             
              <div className="relative h-56  overflow-hidden hover:cursor-pointer">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-96  h-full px-3 m-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#2fb0cd]">
                  {title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="mt-auto">
                  <Link
                    to={projectUrl}
                    target="_blank"
                    className="relative inline-flex items-center justify-center space-x-2 px-6 py-3 overflow-hidden rounded-full text-white font-semibold bg-gradient-to-r from-[#2fb0cd] via-[#1aa0bc] to-[#17899a] shadow-lg transition-all duration-400 group-hover:from-[#1aa0bc] group-hover:to-[#2fb0cd]"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {/* المعين */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#2fb0cd]/20 rotate-45"></div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

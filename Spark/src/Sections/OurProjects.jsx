import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import image1 from "../assets/image/OurProjects/1.jpg";
import image2 from "../assets/image/OurProjects/2.png";
import { Link } from "react-router-dom";

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      title: "House Build",
      type: "Web Application",
      location: "Sremeka Mitrovica",
      description: "Modern architectural solution for residential complexes",
      image: image1,
    },
    {
      id: 2,
      title: "Exterior Design",
      type: "Mobile App",
      location: "Novi Sad",
      description: "3D visualization tool for exterior design projects",
      image: image2,
    },
    {
      id: 3,
      title: "Interior Design",
      type: "Web Platform",
      location: "Beograd",
      description: "Interactive interior design configurator with AR support",
      image: image1,
    },
    {
      id: 4,
      title: "Decoration",
      type: "Mobile App",
      location: "Subotica",
      description: "AI-powered decoration assistant with real-time preview",
      image: image2,
    },
  ];

  const animationConfig = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-2xl font-bold text-gray-800"
          >
            ARCHITECH
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {["Projects", "Services", "About Us", "Blog"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 pt-24 pb-16 text-center">
        <motion.h2
          {...animationConfig}
          className="text-4xl md:text-6xl font-bold mb-4 text-[#1a92ce]"
        >
          OUR PROJECTS
        </motion.h2>
        <motion.p
          {...animationConfig}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Explore our latest projects showcasing innovative design solutions
          across architecture, interior, and exterior visualizations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{
                delay: index * 0.3,
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97],
              }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-full h-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
                <motion.div
                  className="absolute inset-0 bg-black/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 backdrop-blur-sm flex items-center justify-center p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                  }}
                >
                  <p className="text-sm text-gray-200 text-center">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              <motion.span
                className="absolute top-6 left-6 text-6xl font-bold opacity-50 text-white "
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: index * 0.3 + 0.4 }}
              >
                0{project.id}
              </motion.span>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-6 right-6 bg-white p-3 rounded-full cursor-pointer"
              >
                <FiArrowUpRight className="text-xl text-gray-800" />
              </motion.div>

              <div className="absolute bottom-6 left-6 text-white text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white ">
                    {project.title}
                  </h3>
                  <span className="text-sm px-2 py-1 bg-white/10 rounded-full text-white ">
                    {project.type}
                  </span>
                </div>
                <p className="mt-1 text-white ">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
            }}
            className="px-8 md:px-30  py-4 rounded-full bg-[#1a92ce] text-white text-lg md:text-xl font-bold shadow-md transition-all"
          >
            <Link to="#">See All</Link>
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default OurProjects;

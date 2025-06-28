import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import freeCodeData from "../Utils/FreeCodeData";
import MainTitle from "../Components/MainTitle";

export default function OurFreeCode() {
  MainTitle (" | Free Codes")
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardItem = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateX: 10,
      scale: 0.96,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.7,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 40px -15px rgba(47, 176, 205, 0.35)",
      borderColor: "#2fb0cd",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <>
      <NavigationBar />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#2fb0cd]">Free Codes</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg">
              Premium quality code snippets for your next project
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4"
            style={{
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            {freeCodeData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                whileHover="hover"
                className="relative flex flex-col bg-gradient-to-br from-gray-50 to-white rounded-t-3xl rounded-b-xl overflow-hidden shadow-md transition-all border-l-[5px] border-l-[#2fb0cd33]"
                style={{
                  width: "340px",
                  minHeight: "480px",
                  border: "2px solid transparent",
                }}
              >
                <div className="relative pt-[100%] overflow-hidden mx-3 mt-3 rounded-xl">
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.15 + index * 0.1,
                      duration: 0.7,
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow relative group">
                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-gray-800 mb-2 relative"
                  >
                    {item.title}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="h-[2px] bg-[#2fb0cd] mt-1 rounded"
                    />
                  </motion.h3>

                  <motion.p
                    className="text-gray-500 text-base mb-5 line-clamp-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-base font-medium text-[#2fb0cd] hover:text-white hover:bg-[#2fb0cd] transition-all duration-300 border-2 border-[#2fb0cd]"
                      whileHover={{
                        scale: 1.06,
                        boxShadow: "0 8px 20px -5px rgba(47, 176, 205, 0.4)",
                      }}
                    >
                      <span>Get Code</span>
                      <FaArrowRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}

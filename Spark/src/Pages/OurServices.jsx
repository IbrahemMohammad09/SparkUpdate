import { motion } from "framer-motion";
import { FiArrowRight, FiGlobe, FiUsers, FiCode, FiCpu } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { SiCoinmarketcap } from "react-icons/si";
import { PiGraphicsCardBold } from "react-icons/pi";
import { FaWordpress , FaShopify  } from "react-icons/fa";

import { services } from "../Utils/ServicesData";
import Navbar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import MainTitle from "../Components/MainTitle";

const OurServices = () => {
  MainTitle(" | Our Services")
  const primaryColor = "#1a92ce";

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      <section className="relative flex-grow">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl font-bold mb-4"
                style={{ color: primaryColor }}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
              >
                We provide comprehensive digital solutions tailored to your
                needs. From business development to educational support, our
                services are designed to empower your digital journey with
                cutting-edge technology and innovative approaches.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                let Icon;
                if (service.title.includes("Web")) {
                  Icon = CgWebsite;
                } else if (service.title.includes("Mobile")) {
                  Icon = CiMobile1;
                } else if (service.title.includes("Marketing")) {
                  Icon = SiCoinmarketcap;
                } else if (service.title.includes("SCRS")) {
                  Icon = FiCpu;
                } else if (service.title.includes("Graphic")) { 
                  Icon = PiGraphicsCardBold;
                } 
                else if (service.title.includes("UI/UX")){
                  Icon = FiUsers
                }
                else if (service.title.includes("WordPress")){
                  Icon = FaWordpress
                }
                else if (service.title.includes("Shopify")){
                  Icon = FaShopify
                }
                else {
                  Icon = FiGlobe;
                }

                return (
                  <motion.div
                    key={service.id}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "0px" }}
                    variants={cardVariants}
                    transition={{
                      delay: 0.2 + index * 0.2,
                    }}
                    className="group relative"
                  >
                    <div className="h-full bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col border border-gray-200 pb-4">
                      <div className="relative h-40 overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                          loading="lazy"
                        />
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white/20 z-10"
                          initial={{ scale: 1 }}
                          whileHover={{
                            scale: 1.15,
                            boxShadow: "0 0 30px 8px rgba(26,146,206,0.5)",
                            y: -8,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          <Icon
                            className="text-3xl"
                            style={{ color: primaryColor }}
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>

                      <div className="p-5 pt-12 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow text-center">
                          {service.description}
                        </p>

                        <div className="mt-auto">
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={lineVariants}
                            viewport={{ once: false, margin: "0px" }}
                            className="h-[1.5px] bg-gray-200 mb-3"
                          >
                            <div className="h-full bg-[#1a92ce]" />
                          </motion.div>
                          <Link
                            to={`/service/${service.id}`}
                            state={{ serviceName: service.title }}
                          >
                            <motion.button
                              className="flex items-center justify-between px-4 py-2 rounded-full mx-auto text-sm"
                              style={{
                                border: `2px solid ${primaryColor}`,
                                color: primaryColor,
                              }}
                              whileHover={{
                                backgroundColor: primaryColor,
                                color: "white",
                                boxShadow: `0 5px 20px ${primaryColor}60`,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                            >
                              <span>{service.buttonText}</span>
                              <motion.span
                                animate={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 10,
                                }}
                              >
                                <FiArrowRight className="ml-2" />
                              </motion.span>
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;

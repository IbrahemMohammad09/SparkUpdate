import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { services } from "../Utils/ServicesData";
import Navbar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import background from "../assets/image/OurServices/22623064.jpg";

const OurServices = () => {
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
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      <section className="relative flex-grow">
        <div className="absolute inset-0 -z-10">
          <img
            src={background}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80 " />
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl font-bold mb-4"
                style={{ color: primaryColor }}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We provide comprehensive digital solutions tailored to your
                needs. From business development to educational support, our
                services are designed to empower your digital journey with
                cutting-edge technology and innovative approaches.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="group"
                >
                  <div className="h-full bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col border border-gray-200">
                    <div className="h-48 overflow-hidden relative">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-5 flex-grow">
                        {service.description}
                      </p>

                      <motion.button
                        className="flex items-center justify-between px-5 py-3 rounded-full border-2 self-start mt-auto"
                        style={{
                          borderColor: primaryColor,
                          color: primaryColor,
                        }}
                        whileHover={{
                          backgroundColor: primaryColor,
                          color: "white",
                          boxShadow: `0 5px 15px ${primaryColor}50`,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <span>{service.buttonText}</span>
                        <motion.span
                          animate={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FiArrowRight className="ml-2" />
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;

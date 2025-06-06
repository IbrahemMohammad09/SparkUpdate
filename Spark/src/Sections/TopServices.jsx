import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";
import img from "../assets/image/OurServices/free_code.jpg";
import { Link } from "react-router-dom";
const services = [
  {
    title: "Web Development",
    icon: <FaCode />,
    features: [
      "Full-stack Development",
      "API Integration",
      "Performance Optimization",
      "Progressive Web Apps",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    features: [
      "Interactive Prototyping",
      "User Research & Testing",
      "Design Systems",
      "Micro-Interactions",
    ],
  },
  {
    title: "Mobile Apps Development",
    icon: <FaMobileAlt />,
    features: [
      "Cross-platform Solutions",
      "Native iOS/Android",
      "Push Notifications",
      "App Store Optimization",
    ],
  },
  {
    title: "E-Marketing",
    icon: <FaChartLine />,
    features: [
      "SEO Strategy",
      "Social Media Campaigns",
      "Conversion Optimization",
      "Analytics & Reporting",
    ],
  },
];

const AnimatedGradientText = ({ children }) => (
  <motion.span
    className="font-bold bg-gradient-to-r from-[#0f70a3] to-[#23b4ff] bg-clip-text text-transparent"
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{ duration: 6, repeat: Infinity }}
    style={{
      backgroundSize: "200% 200%",
    }}
  >
    {children}
  </motion.span>
);

const ServicesSection = () => {
  const primaryColor = "#1a92ce";
  const secondaryColor = "#0f70a3";

  return (
    <section className="relative py-20 px-4 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-mono"
            initial={{ letterSpacing: "0.5em" }}
            animate={{ letterSpacing: "0.1em" }}
            transition={{ duration: 1 }}
            style={{ color: primaryColor }}
          >
            OUR CORE SERVICES
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We are dedicated to{" "}
            <AnimatedGradientText>crafting</AnimatedGradientText> compelling
            brand <AnimatedGradientText>identities</AnimatedGradientText>,
            stunning <AnimatedGradientText>visuals</AnimatedGradientText>, and
            immersive{" "}
            <AnimatedGradientText>digital experiences</AnimatedGradientText>{" "}
            that captivate audiences.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                rotateY: 15,
                rotateX: 5,
                translateY: -15,
                boxShadow: `0 35px 60px -15px ${primaryColor}25`,
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#1a92ce]/10 transform-style-preserve-3d"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-[#1a92ce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="flex justify-center mb-6"
                whileHover={{
                  rotateZ: [0, -10, 10, 0],
                  transition: { duration: 0.6 },
                }}
              >
                <div
                  className="text-6xl p-5 rounded-2xl shadow-inner-lg"
                  style={{
                    color: primaryColor,
                    backgroundColor: `${primaryColor}08`,
                    boxShadow: `inset 0 0 15px ${primaryColor}15`,
                  }}
                >
                  {service.icon}
                </div>
              </motion.div>

              <div className="relative space-y-4">
                <motion.h3
                  className="text-2xl font-bold mb-4 font-mono text-center"
                  style={{ color: secondaryColor }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors text-sm md:text-base"
                      whileHover={{ x: 10 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <motion.span
                        className="mr-3"
                        style={{ color: primaryColor }}
                        animate={{
                          rotate: [0, 20, -20, 0],
                          transition: { repeat: Infinity, duration: 1.5 },
                        }}
                      >
                        ➤
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="rounded-2xl shadow-2xl p-6 w-80 my-10"
          style={{
            background:
              "linear-gradient(145deg, #0f1e2e 0%, #103f5d 50%, #1a92ce 100%)",
          }}
        >
          <img
            src={img}
            alt="free-code"
            className="w-28 h-28 object-cover rounded-full mx-auto border-4 border-[#2fb0cd] shadow-md"
          />
          <p className="text-center text-white text-xl font-semibold mt-4 tracking-wide">
            Our Free Codes
          </p>
          <Link
            to="/our_free_code"
            className="text-base block mt-4 mx-auto bg-[#2fb0cd] text-white text-center px-5 py-2 rounded-xl w-24 font-medium tracking-wide transition hover:bg-[#27a1ba] hover:scale-110 shadow"
          >
            View
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

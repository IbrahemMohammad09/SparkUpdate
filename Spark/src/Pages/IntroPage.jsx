import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from "react-router-dom";
import MainTitle from "../Components/MainTitle";

const IntroPage = () => {
  MainTitle ("");
  const primaryColor = "#1a92ce";
  const gradientStart = "#23b4ff";
  const gradientEnd = "#1a92ce";
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              color: { value: primaryColor },
              links: {
                color: primaryColor,
                distance: 150,
                enable: true,
                opacity: 0.3,
              },
              move: {
                enable: true,
                speed: 2.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
              },
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
            },
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="pt-16 pb-24"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-[#23b4ff] to-[#1a92ce] bg-clip-text text-transparent">
              SPARK
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.p
              className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Igniting Digital Transformation
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${primaryColor}80`,
                filter: "drop-shadow(0 0 15px #23b4ff)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#23b4ff] to-[#1a92ce] text-white px-12 py-4 rounded-xl text-xl font-semibold transition-all cursor-pointer group"
              onClick={handleClick}
            >
              <span className="relative z-10">Start Journey</span>
              <div
                className="absolute inset-0 blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"
                style={{
                  background: `linear-gradient(45deg, ${gradientStart}80, ${gradientEnd}80)`,
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroPage;

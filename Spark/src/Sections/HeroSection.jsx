import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
const HeroSection = () => {
  const primaryColor = "#1a92ce";

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [text] = useTypewriter({
    words: ["Web Solutions", "Digital Innovation", "Tech Excellence"],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-white overflow-hidden">
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
              number: { value: 60 },
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-gray-800 mb-4">Transform Your</span>
            <span className="bg-gradient-to-r from-[#0f70a3] to-[#23b4ff] bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor cursorColor={primaryColor} />
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting exceptional digital experiences with modern technology
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1a92ce] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

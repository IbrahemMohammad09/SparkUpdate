import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useMemo } from "react";

const HeroSection = () => {
  const primaryColor = "#1a92ce";

  const binaryElements = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        char: Math.random() > 0.5 ? "1" : "0",
        left: Math.random() * 100,
        size: 20 + Math.random() * 12,
        duration: 8 + Math.random() * 4,
        delay: 0,
      })),
    []
  );

  const [text] = useTypewriter({
    words: ["Web Solutions", "Digital Innovation", "Tech Excellence"],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <section
      className="relative h-[70vh] flex items-center justify-center bg-white overflow-hidden"
      style={{
        boxShadow: "0 20px 40px rgba(26, 146, 206, 0.1)",
        borderBottom: "1px solid rgba(26, 146, 206, 0.05)",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {binaryElements.map((binary) => (
          <motion.div
            key={binary.id}
            className="absolute font-mono text-blue-400"
            initial={{
              opacity: 0.5,
              y: "-20vh",
            }}
            animate={{
              opacity: [0.5, 0.5, 0],
              y: "120vh",
            }}
            transition={{
              duration: binary.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              fontSize: `${binary.size}px`,
              left: `${binary.left}%`,
              textShadow: `0 0 8px ${primaryColor},
                          0 0 15px rgba(26,146,206,0.3)`,
              filter: "blur(0.5px)",
            }}
          >
            {binary.char}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-14"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-800 mb-4">Transform Your</span>
            <span className="bg-gradient-to-r from-[#0f70a3] to-[#23b4ff] bg-clip-text text-transparent">
              {text}
            </span>
            <Cursor cursorColor={primaryColor} />
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting exceptional digital experiences with modern technology
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

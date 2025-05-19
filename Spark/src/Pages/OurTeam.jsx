import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import teamData from "../Utils/TeamData";

export default function OurTeam() {
  const [current, setCurrent] = useState(0);
  const [activeOverlay, setActiveOverlay] = useState(false);

  const handleNext = () => {
    setActiveOverlay(false);
    setCurrent((prev) => (prev + 1) % teamData.length);
  };
  const handlePrev = () => {
    setActiveOverlay(false);
    setCurrent((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  const currentMember = teamData[current];
  const bioWords = currentMember.bio.split(" ");

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${currentMember.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-3xl md:text-5xl font-bold text-center mt-10"
      >
        Meet Our Team of <span className="text-[#1a92ce]">Creative</span>{" "}
        Experts
      </motion.h1>

      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="z-10 text-lg md:text-xl font-normal text-center mt-4 max-w-xl"
      >
        We’re a group of passionate professionals dedicated to delivering
        top-notch solutions and exceeding expectations.
      </motion.p>

      <div className="z-10 flex items-center gap-4 mt-12 px-4 w-full justify-center">
        <button
          onClick={handlePrev}
          className="text-3xl transition duration-300 hover:text-[#1a92ce] hover:shadow-[0_0_15px_#1a92ce]"
        >
          <FaArrowLeft />
        </button>

        <div className="relative w-full max-w-6xl flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative cursor-pointer group"
              onClick={() => setActiveOverlay((prev) => !prev)}
            >
              <div className="w-[300px] md:w-[400px] h-[500px] bg-white text-black rounded-2xl overflow-hidden shadow-xl relative transition duration-300 group-hover:shadow-[0_0_25px_#1a92ce]">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-3/5 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{currentMember.name}</h3>
                  <p className="text-gray-600 font-normal">
                    {currentMember.position}
                  </p>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-xl mt-4"
                  >
                    <FaChevronDown className="mx-auto text-gray-500" />
                  </motion.div>
                  <p className="text-[#1a92ce] mt-2">Click me</p>
                </div>

                {/* Overlay Bio without card flip */}
                <AnimatePresence>
                  {activeOverlay && (
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bottom-0 left-0 w-full h-full bg-white/80 backdrop-blur-md text-black flex flex-col justify-center items-center p-6 z-20"
                    >
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-3/4 h-0.5 bg-[#1a92ce] mb-4 origin-left"
                      ></motion.div>

                      <div className="text-center text-lg font-medium max-w-xs">
                        {bioWords.map((word, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 * index }}
                            className="inline-block mr-1"
                          >
                            {word}
                          </motion.span>
                        ))}
                      </div>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-3/4 h-0.5 bg-[#1a92ce] mt-4 origin-right"
                      ></motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="text-3xl transition duration-300 hover:text-[#1a92ce] hover:shadow-[0_0_15px_#1a92ce]"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

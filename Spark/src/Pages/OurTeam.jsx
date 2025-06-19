import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import teamData from "../Utils/TeamData";
import Team_bg from "../assets/image/OurTeam/team-bg.png";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

export default function OurTeam() {
  MainTitle(" | Our Team");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: teamData.length }, (_, i) => i % 5)
  );
  const [activeOverlayIndex, setActiveOverlayIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setActiveOverlayIndex(null);
    setDirection(1);
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % teamData.length);
    } else {
      setPositionIndexes((prevIndexes) => {
        return prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      });
    }
  };

  const handlePrev = () => {
    setActiveOverlayIndex(null);
    setDirection(-1);
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
    } else {
      setPositionIndexes((prevIndexes) => {
        return prevIndexes.map((prevIndex) => (prevIndex + 4) % 5);
      });
    }
  };

  const positions = ["left", "left1", "center", "right1", "right"];

  const cardVariants = {
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    center: { x: "0%", scale: 1, zIndex: 5 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
  };

  // Animation For Mobile Screen
  const mobileCardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <>
      <NavigationBar />
      <div
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `url(${Team_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-3xl lg:text-5xl font-normal text-center mt-10"
        >
          Meet Our Team of <span className="text-[#1a92ce]">Creative</span>{" "}
          Experts
        </motion.h1>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="z-10 text-lg lg:text-xl font-normal text-center mt-4 max-w-xl"
        >
          We're a group of passionate professionals dedicated to delivering
          top-notch solutions and exceeding expectations.
        </motion.p>

        {/* Arrow top The Card*/}
        <div className="z-10 flex lg:hidden items-center gap-8 mt-10 mb-4">
          <button
            onClick={handlePrev}
            className="text-2xl transition duration-300 hover:text-[#1a92ce] hover:shadow-[0_0_10px_#1a92ce]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-2xl transition duration-300 hover:text-[#1a92ce] hover:shadow-[0_0_10px_#1a92ce]"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="z-10 flex items-center gap-4 mt-4 lg:mt-12 px-4 w-full justify-center">
          <button
            onClick={handlePrev}
            className="hidden lg:block text-3xl transition duration-300 hover:text-[#1a92ce] hover:shadow-[0_0_15px_#1a92ce]"
          >
            <FaArrowLeft />
          </button>

          <div className="relative w-full max-w-6xl h-[500px] flex justify-center items-center">
            {isMobile ? (
              // 1 Card In Mobile Screen
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={mobileCardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[300px] h-[500px] bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_#1a92ce] transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActiveOverlayIndex(
                      activeOverlayIndex === currentIndex ? null : currentIndex
                    )
                  }
                >
                  <img
                    src={teamData[currentIndex].image}
                    alt={teamData[currentIndex].name}
                    className="w-full h-3/5 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-normal">
                      {teamData[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 font-normal">
                      {teamData[currentIndex].position}
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

                  <AnimatePresence>
                    {activeOverlayIndex === currentIndex && (
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

                        <div className="text-center text-lg font-normal max-w-xs">
                          {teamData[currentIndex].bio
                            .split(" ")
                            .map((word, wordIndex) => (
                              <motion.span
                                key={wordIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.15 * wordIndex }}
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
                </motion.div>
              </AnimatePresence>
            ) : (
              // More 1 Card in Desktop Screen
              teamData.slice(0, 5).map((member, index) => (
                <motion.div
                  key={member.id}
                  className="absolute w-[400px] h-[500px] bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_#1a92ce] transition-all duration-300 cursor-pointer"
                  initial="center"
                  animate={positions[positionIndexes[index]]}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    if (positions[positionIndexes[index]] === "center") {
                      setActiveOverlayIndex(
                        activeOverlayIndex === index ? null : index
                      );
                    }
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-3/5 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-normal">{member.name}</h3>
                    <p className="text-gray-600 font-normal">
                      {member.position}
                    </p>
                    {positions[positionIndexes[index]] === "center" && (
                      <>
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                          className="text-xl mt-4"
                        >
                          <FaChevronDown className="mx-auto text-gray-500" />
                        </motion.div>
                        <p className="text-[#1a92ce] mt-2">Click me</p>
                      </>
                    )}
                  </div>

                  <AnimatePresence>
                    {activeOverlayIndex === index && (
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

                        <div className="text-center text-lg font-normal max-w-xs">
                          {member.bio.split(" ").map((word, wordIndex) => (
                            <motion.span
                              key={wordIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.15 * wordIndex }}
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
                </motion.div>
              ))
            )}
          </div>

          <button
            onClick={handleNext}
            className="hidden lg:block text-3xl transition duration-300 hover:text-[#1a92ce] hover:shadow-[0_0_15px_#1a92ce]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

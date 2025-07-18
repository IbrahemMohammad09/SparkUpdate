import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import teamData from "../Utils/TeamData";
import Team_bg from "../assets/image/OurTeam/team-bg.png";
import bgCard from "../assets/image/OurTeam/bgCard.png";
import MainTitle from "../Components/MainTitle";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

export default function OurTeam() {
  MainTitle(" | Our Team");
  const [currentIndex, setCurrentIndex] = useState(0);
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
    setCurrentIndex((prev) => (prev + 1) % teamData.length);
  };

  const handlePrev = () => {
    setActiveOverlayIndex(null);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  const handleCardClick = (index) => {
    if (index === currentIndex) {
      setActiveOverlayIndex(activeOverlayIndex === index ? null : index);
    } else {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setActiveOverlayIndex(null);
    }
  };

  const getCardPosition = (index) => {
    const diff = (index - currentIndex + teamData.length) % teamData.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === teamData.length - 1) return "left";
    return "hidden"; // إخفاء الكروت الأخرى
  };

  const cardVariants = {
    left: { x: "-80%", scale: 0.8, zIndex: 2, opacity: 0.8 },
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    right: { x: "80%", scale: 0.8, zIndex: 2, opacity: 0.8 },
    hidden: { opacity: 0, scale: 0, zIndex: 0, pointerEvents: "none" },
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
            className="text-2xl transition duration-300 hover:text-[#1a92ce]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-2xl transition duration-300 hover:text-[#1a92ce]"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="z-10 flex items-center gap-4 mt-4 lg:mt-12 px-4 w-full justify-center">
          <button
            onClick={handlePrev}
            className="hidden lg:block text-3xl transition duration-300 hover:text-[#1a92ce]"
          >
            <FaArrowLeft />
          </button>

          <div className="relative w-full max-w-6xl h-[600px] flex justify-center items-center">
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
                  className="absolute w-[300px] h-[500px] bg-white text-black rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                  onClick={() =>
                    setActiveOverlayIndex(
                      activeOverlayIndex === currentIndex ? null : currentIndex
                    )
                  }
                >
                  {/* إضافة خلفية للصورة */}
                  <div
                    className="w-full h-[65%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgCard})` }}
                  >
                    <img
                      src={teamData[currentIndex].image}
                      alt={teamData[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center mt-auto">
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
              // عرض 3 كروت فقط في الشاشات الكبيرة
              teamData.map((member, index) => {
                const position = getCardPosition(index);

                // إظهار الكروت الثلاثة فقط وإخفاء الباقي
                if (position === "hidden") return null;

                return (
                  <motion.div
                    key={member.id || index}
                    className="absolute w-[400px] h-[550px] bg-white text-black rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                    initial={position}
                    animate={position}
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* إضافة خلفية للصورة */}
                    <div
                      className="w-full h-[65%] bg-cover bg-center"
                      style={{ backgroundImage: `url(${bgCard})` }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center mt-auto">
                      <h3 className="text-xl font-normal">{member.name}</h3>
                      <p className="text-gray-600 font-normal">
                        {member.position}
                      </p>
                      {position === "center" && (
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
                );
              })
            )}
          </div>

          <button
            onClick={handleNext}
            className="hidden lg:block text-3xl transition duration-300 hover:text-[#1a92ce]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

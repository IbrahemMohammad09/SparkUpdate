// App.jsx
import { useState, useEffect } from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const [messages] = useState([
    "The page flew away with the snowflakes! ❄️",
    "Error: Winter magic in progress! 🌨️",
    "Lost in a snowstorm of code! ☃️",
  ]);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [stars, setStars] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHappy, setIsHappy] = useState(false);

  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 100; i++) {
        starsArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * -100,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 3 + 2,
          delay: Math.random() * 5,
        });
      }
      setStars(starsArray);
    };
    generateStars();

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateEyePosition = (eyeCenter) => {
    const dx = mousePos.x - eyeCenter.x;
    const dy = mousePos.y - eyeCenter.y;
    const angle = Math.atan2(dy, dx);
    return {
      x: Math.cos(angle) * 6,
      y: Math.sin(angle) * 6,
    };
  };

  return (
    <div
      className="relative min-h-screen bg-white overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-[#1a92ce] rounded-full ${
            isHovering ? "opacity-100" : "opacity-70"
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `fall ${star.speed}s linear ${star.delay}s infinite, twinkle 2s ease-in-out infinite`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <div
          className="relative cursor-pointer group transition-all duration-300 hover:drop-shadow-[0_0_15px_#1a92ce]"
          onClick={() => {
            setCurrentMessage(
              messages[Math.floor(Math.random() * messages.length)]
            );
          }}
        >
          <div
            className="w-40 h-40 bg-[#1a92ce] rounded-[50%] relative mb-8 
            animate-float shadow-lg"
          >
            <div
              className="absolute -top-8 left-4 w-12 h-16 bg-[#1a92ce] 
              rounded-t-full rotate-12 transform origin-bottom"
            />
            <div
              className="absolute -top-8 right-4 w-12 h-16 bg-[#1a92ce] 
              rounded-t-full -rotate-12 transform origin-bottom"
            />

            <div className="absolute top-12 left-1/2 -translate-x-1/2">
              <div className="flex space-x-6 mb-4">
                {" "}
                <div
                  className="w-10 h-10 bg-white rounded-full relative 
                  animate-blink overflow-hidden"
                >
                  {" "}
                  <div
                    className="w-6 h-6 bg-[#1a92ce] rounded-full absolute transition-all duration-200"
                    style={{
                      transform: `translate(${
                        calculateEyePosition({ x: 280, y: 240 }).x
                      }px, 
                                  ${
                                    calculateEyePosition({ x: 280, y: 240 }).y
                                  }px)`,
                      ...(isHappy && {
                        background: "#ff69b4",
                        clipPath:
                          "polygon(40% 0%, 60% 0%, 90% 30%, 50% 70%, 10% 30%)",
                      }),
                    }}
                  />
                </div>
                <div
                  className="w-10 h-10 bg-white rounded-full relative 
                  animate-blink overflow-hidden"
                >
                  <div
                    className="w-6 h-6 bg-[#1a92ce] rounded-full absolute transition-all duration-200"
                    style={{
                      transform: `translate(${
                        calculateEyePosition({ x: 360, y: 240 }).x
                      }px, 
                                  ${
                                    calculateEyePosition({ x: 360, y: 240 }).y
                                  }px)`,
                      ...(isHappy && {
                        background: "#ff69b4",
                        clipPath:
                          "polygon(40% 0%, 60% 0%, 90% 30%, 50% 70%, 10% 30%)",
                      }),
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              {isHappy ? (
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <path
                    d="M10 15 Q30 30 50 15"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <div className="w-16 h-1 bg-white rounded-full transform rotate-180 scale-y-150" />
              )}
            </div>
          </div>
        </div>
        <h1 className="mt-8 text-9xl font-bold text-[#1a92ce] glitch-effect">
          404
        </h1>
        =
        <p className="mt-4 text-2xl text-center text-[#1a92ce] animate-pulse">
          {currentMessage}
        </p>
        <Link
          to="/"
          className="mt-8 px-8 py-3 bg-[#1a92ce] hover:bg-[#1474a4] 
            rounded-full text-white font-bold transition-all duration-300 
            hover:scale-105 shadow-lg"
          onMouseEnter={() => setIsHappy(true)}
          onMouseLeave={() => setIsHappy(false)}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

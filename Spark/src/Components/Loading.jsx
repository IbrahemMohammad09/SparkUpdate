import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spinner  from "../Components/Spinner"
const letters = ["S", "P", "A", "R", "K"];

export default function Loading() {
  const [completed, setCompleted] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState([]);

  useEffect(() => {
    let timeoutIds = [];
    letters.forEach((letter, i) => {
      timeoutIds.push(
        setTimeout(() => {
          setVisibleLetters((prev) => [...prev, letter]);
          if (i === letters.length - 1) {
            setTimeout(() => setCompleted(true), 800);
          }
        }, i * 700)
      );
    });
    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#2fb0cd] font-bold text-5xl space-y-8 select-none">
      {!completed && (
        <Spinner/>
      )}
         {/** كتابة Spark */}
      <div className="flex space-x-4">
        {visibleLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: -50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="drop-shadow-md"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}



{/** 
import { BeatLoader } from 'react-spinners';
const Loading = () => (
  <div className='h-dvh flex flex-col justify-center items-center ' >
    < BeatLoader color="#2fb0cd" size={40} /> 
  </div>
);

export default Loading;

*/}
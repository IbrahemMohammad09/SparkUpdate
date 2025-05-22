import "./RequestSuccess.css"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RequestSuccess() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white overflow-hidden ">
      {show && (
        <>
          <motion.div
            className="relative z-10"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <div className="w-28 h-28 rounded-full flex flex-col items-center justify-center relative overflow-hidden 
            conic-gradient-box">
              {/* eyes*/}
              <div className="flex justify-between w-16 mt-8 px-2">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              </div>

              {/* smile*/}
              <svg className="mt-4" width="40" height="20" viewBox="0 0 40 20" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M5 5 C 12 20, 28 20, 35 5" stroke="#374151" strokeWidth="3" strokeLinecap="round" 
                fill="none"
                />
              </svg>
            </div>
          </motion.div>

          {/* الظل  */}
          <div className="mt-2 w-28 h-6 rounded-full blurred-bg"></div>
        </>
      )}
      <motion.span
        className="text-2xl font-bold text-[#2fb0cd] mt-6  "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Request sent successfully!
      </motion.span>
    </div>
  );
}



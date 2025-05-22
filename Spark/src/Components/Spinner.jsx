import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      className="relative w-20 h-20 rounded-full "
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      style={{
        background: `conic-gradient(
          from 0deg,
          #2fb0cd 0%,
          #d1d5db 40%,
          #f0f0f0 60%,
          #2fb0cd 100%
        )`,
      }}
    >
      <div className="absolute inset-4 rounded-full bg-[#e5e7eb]" />
    </motion.div>
  );
}

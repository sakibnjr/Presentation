import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const AmazingButton = () => {
  const [launched, setLaunched] = useState(false);

  const handleClick = () => {
    setLaunched(true);
    setTimeout(() => {
      window.open(
        "https://www.canva.com/design/DAGWLjLxGV4/H7h7XNmg1lN6O5XGp6KHUw/view?utm_content=DAGWLjLxGV4&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        "_blank"
      );
    }, 1000); // Delay to allow the animation to finish before opening the link
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <motion.button
        onClick={handleClick}
        className="relative flex items-center justify-center px-8 py-4 font-semibold text-white bg-rose-500 rounded-lg shadow-lg overflow-hidden"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#4299e1",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-600 opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.05, 1] }} // Pulsating effect
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={launched ? { y: -200, opacity: 0 } : {}} // Rocket flying away
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <FaRocket className="" />
        </motion.div>
        <span className="uppercase text-lg mx-2">Start</span>
      </motion.button>
    </div>
  );
};

export default AmazingButton;

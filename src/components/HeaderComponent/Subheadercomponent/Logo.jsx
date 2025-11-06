import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hover:cursor-pointer min-w-fit ml-4 sm:pl-10 md:pl-20"
    >
      <motion.a
        href="/"
        className="flex items-center gap-2 group"
        whileHover={{ scale: 1.05 }}
      >
        {/* Cyberpunk Bar */}
        <div className="w-2 h-8 bg-gradient-to-b from-[#FF0080] to-[#00FFFF] rounded-full shadow-[0_0_10px_#FF0080]"></div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-2xl font-black bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_12px_#FF0080]">
            HNAINE
          </span>
          <span className="text-[#CCCCCC] text-xs font-medium tracking-widest -mt-1">
            HIBA
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Logo;

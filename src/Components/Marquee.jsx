import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".01"
      className="w-full py-20 rounded-tl-[1vw] rounded-tr-[1vw] bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 text-white border-[#4D837C] flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-['Founders_Grotesk'] uppercase font-semibold pt-4 -mb-32 tracking-tighter pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] leading-none font-['Founders_Grotesk'] uppercase font-semibold pt-4 -mb-32 tracking-tighter pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

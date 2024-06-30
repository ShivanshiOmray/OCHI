import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-100 pt-1"
    >
      <div className="textstructure mt-36 px-14">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[4.8vw] -top-[1vw] relative bg-green-500 overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[8vw] leading-[.65] font-['Founders_Grotesk'] font-semibold tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-3 px-14">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-[1.1vw] font-regular tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-1 border-[1px] border-neutral-800 text-[.9vw] font-medium uppercase rounded-full">
            Start the project
          </div>
          <div className="flex items-center justify-center border-[1px] border-neutral-800 rounded-full p-2">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

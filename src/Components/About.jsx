import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full py-[6vw] px-[4vw] bg-[#CDEA68] rounded-tl-[1vw] rounded-tr-[1vw]"
    >
      <h1 className="text-[3vw] tracking-tight leading-[3.5vw] font-medium">
        Ochi is a strategic partner for fast-growing tech <br /> businesses that
        need to raise funds, sell products, <br /> explain complex ideas, and
        hire great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-5 mt-10 border-[#99AD53]">
        <div className="w-1/2">
          <h1 className="text-5xl font-medium">Our approach:</h1>
          <button className="flex items-center gap-9 px-7 py-4 bg-zinc-900 mt-5 uppercase rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-[.8vw] bg-red-600 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

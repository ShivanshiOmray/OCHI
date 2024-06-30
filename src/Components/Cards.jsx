import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-14">
      <div className="cardcontainer h-[60vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 text-[#C3E266] border-[#C3E266] rounded-full border-2 left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[60vh] w-1/2">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 tracking-tighter uppercase text-zinc-100 border-zinc-100 rounded-full border-2 left-10 bottom-10">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-[7vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 py-1 tracking-tighter uppercase text-zinc-100 border-zinc-100 rounded-full border-2 left-10 bottom-10">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

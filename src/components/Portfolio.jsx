import React from "react";
import photo1 from "../assets/photo-1.png";
import photo2 from "../assets/photo-2.png";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" py-[60px] md:pt-[120px] xl:pt-[160px] 2xl:pt-[220px] bg-[#BA9273] md:bg-[#C99E7D]"
    >
      <h1 className="text-white text-center text-3xl font-bold drop-shadow-[2px_2px_5px_#1A1A19] tracking-[3px]   ">
        PORTFOLIO
      </h1>
      <div className="flex flex-col mx-auto mt-10 w-[90%] sm:w-[450px] lg:flex-row lg:w-[950px]  ">
        <div className="w-[100%]">
          <p className="text-[#eee] drop-shadow-[2px_2px_5px_#1A1A19] text-xl font-bold mb-2">
            1. Guess the number
          </p>
          <img className="lg:h-[200px] lg:w-[450px]" src={photo1} alt="" />
          <div className="flex w-[100%] justify-between mt-2 lg:w-[260px] lg:mx-auto ">
            <div className="border-2 py-3 hover:bg-[#fff] hover:text-black hover:border-[#fff] border-[2px] border-[#fff] text-[#fff] transition-[250ms]">
              <a
                className="px-4 py-3"
                href="https://guess-the-number-neon.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                live demo
              </a>
            </div>
            <div className=" border-2 py-3 hover:bg-[#fff] hover:text-black hover:border-[#fff] border-[2px] border-[#fff] text-[#fff] transition-[250ms]">
              <a
                className="px-4 py-3"
                href="https://github.com/murito7/guess-the-number"
                target="_blank"
                rel="noreferrer"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-10 lg:mt-0">
          <p className="text-[#eee] drop-shadow-[2px_2px_5px_#1A1A19] text-xl font-bold mb-2">
            2. Pig Game
          </p>
          <img className="lg:h-[200px] lg:w-[450px]" src={photo2} alt="" />
          <div className="flex w-[100%] justify-between mt-2 lg:w-[260px] lg:mx-auto">
            <div className="border-2 py-3 hover:bg-[#fff] hover:text-black hover:border-[#fff] border-[2px] border-[#fff] text-[#fff] transition-[250ms]">
              <a
                className="px-4 py-3"
                href="https://pig-game-rose.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                live demo
              </a>
            </div>
            <div className="border-2 py-3 hover:bg-[#fff] hover:text-black hover:border-[#fff] border-[2px] border-[#fff] text-[#fff] transition-[250ms]">
              <a
                className="px-4 py-3"
                href="https://github.com/murito7/pig-game"
                target="_blank"
                rel="noreferrer"
              >
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
      <p
        id="contact"
        className="text-center text-[#eee] drop-shadow-[2px_2px_5px_#1A1A19] mt-10"
      >
        See more projects at my{" "}
        <a
          className="underline"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/murito7?tab=repositories"
        >
          Github account.
        </a>
      </p>
    </div>
  );
}

export default Portfolio;

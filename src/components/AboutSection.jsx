import React from "react";
import meImg from "../assets/me-person_250x280.png";
import SkillsSet from "./SkillsSet";

function AboutSection() {
  return (
    <div
      id="about"
      className="relative py-[60px] md:py-[120px] lg:py-[220px] bg-[#C99E7D] lg:flex lg:justify-center z-[1] "
    >
      <div className="me--picture w-[85%] xs:w-[320px] h-[420px] lg:w-[400px] mx-auto   lg:mx-0 lg:mx-5 relative ">
        <img className="z-[5] border-[10px] border-white" src={meImg} alt="" />
      </div>
      <div className="mt-5 p-7 lg:w-[550px] sm:px-[100px] lg:p-0 lg:mx-5 2xl:w-[680px]">
        <h1 className="text-white text-3xl font-bold drop-shadow-[2px_2px_5px_#1A1A19] tracking-[3px] ">
          ABOUT ME
        </h1>
        <p className="mt-4 text-[18px] text-[#fff] drop-shadow-[2px_2px_5px_#1A1A19] leading-[27px] text-justify">
          Hello everyone! Welcome to my website portfolio. My name is Mariyan
          Popov. I’m a seventeen years old boy living in a small Bulgarian town.
        </p>
        <p className="mt-3 text-[18px]   text-[#fff] drop-shadow-[2px_2px_5px_#1A1A19] leading-[27px] text-justify">
          I enjoy studying computer technologies especially front - end
          development. My technological journey began a year ago. During this
          time I have learnt lots of new things and I kept improving every day.
          If you have ideas for a project contact with me
        </p>
        <h1 className="mt-5 text-white text-3xl font-bold drop-shadow-[2px_2px_5px_#1A1A19] tracking-[3px]">
          SKILLS
        </h1>
        <SkillsSet />
        <a href="#contact">
          <button className="mt-5 px-5 py-3 bg-inherit hover:bg-[#fff] hover:text-black hover:border-[#fff] border-[2px] border-[#fff] text-[#fff]  duration-[250ms] ">
            hire me
          </button>
        </a>
      </div>
      <div className="custom-shape-divider-bottom-1662158351 desktop-responsive:hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default AboutSection;

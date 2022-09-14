import React from "react";

function Footer() {
  return (
    <div className="bg-[#1A1A19] pt-[50px] pb-[20px]">
      <div className="md:w-[350px] mx-auto  text-center  ">
        <a
          href="#home"
          className="text-5xl text-white font-bold text-center tracking-[5px] "
        >
          MARIYAN
        </a>
        <div className="mt-10">
          <h1 className="text-white text-center text-3xl font-bold tracking-[3px]   ">
            CONTENT
          </h1>
          <ul className="mt-5 text-[#eee] text-xl ">
            {" "}
            <li className="hover:text-[#ccc]">
              <a href="#home">home</a>
            </li>
            <li className="mt-2 hover:text-[#ccc]">
              <a href="#about">about</a>
            </li>
            <li className="mt-2 hover:text-[#ccc]">
              <a href="#services">services</a>
            </li>
            <li className="mt-2 hover:text-[#ccc]">
              <a href="#portfolio">portfolio</a>
            </li>
            <li className="mt-2 hover:text-[#ccc]">
              <a className="text-[#D0A380] " href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-[#ccc]">Created By: Mariyan Popov</p>
    </div>
  );
}

export default Footer;

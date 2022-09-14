import React from "react";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <div
        className={`w-[100%] h-[80px] bg-[#1A1A19] py-[20px] flex items-center justify-between px-5 lg:px-14 2xl:px-[250px] desktop-responsive:w-[2000px] fixed z-[20]`}
      >
        <a
          href="#home"
          className="text-3xl text-white font-bold tracking-[5px] "
        >
          MARIYAN
        </a>
        {showNav ? (
          <p onClick={openNav} className="text-5xl md:hidden text-white">
            &#x2715;
          </p>
        ) : (
          <p onClick={openNav} className="text-5xl md:hidden text-white">
            &#9776;
          </p>
        )}
        <ul className="text-xl text-white  hidden md:flex  ">
          <li className="mr-4 duration-[250ms] hover:text-[#ccc]">
            <a href="#home">Home</a>
          </li>
          <li className="mr-4 duration-[250ms] hover:text-[#ccc]">
            <a href="#about">About</a>
          </li>
          <li className="mr-4 duration-[250ms] hover:text-[#ccc]">
            <a href="#services">Services</a>
          </li>
          <li className="mr-4 duration-[250ms] hover:text-[#ccc]">
            <a href="#portfolio">Portfolio</a>
          </li>

          <li className=" text-[#D0A380] ">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div
        className={`w-[100%] fixed mt-[80px] bg-[#1A1A19] h-[470px] transition-all duration-[0.3s] ease-in border-t-[1px] border-white text-3xl text-white flex flex-col justify-between py-[60px] pl-5 tracking-[3px] md:hidden z-[10] ${
          showNav ? "ml-0" : "-ml-[800px]"
        }`}
      >
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a className="text-[#D0A380] " href="#contact">
            contact
          </a>
        </li>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };

  const listItems = [
    { text: "Home", id: "#home" },
    { text: "About", id: "#about" },
    { text: "Services", id: "#services" },
    { text: "Portfolio", id: "#portfolio" },
    { text: "Contact", id: "#contact" },
  ];
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
        <p onClick={openNav} className="text-5xl md:hidden text-white">
          {showNav ? <>&#x2715;</> : <>&#9776;</>}
        </p>
        <ul className="text-xl text-white  hidden md:flex  ">
          {listItems.map((listItem, i) => {
            return (
              <React.Fragment key={i}>
                <li
                  className={`mr-4 duration-[250ms] hover:text-[#aaa] ${
                    listItem.text === "Contact" && "text-[#D0A380]"
                  } ${listItem.text === "Contact" && "hover:text-[#523625]"} `}
                >
                  <a href={listItem.id}>{listItem.text}</a>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div
        className={`w-[100%] fixed mt-[80px] bg-[#1A1A19] h-[470px] transition-all duration-[0.3s] ease-in border-t-[1px] border-white text-3xl text-white flex flex-col justify-between py-[60px] pl-5 tracking-[3px] md:hidden z-[10] ${
          showNav ? "ml-0" : "-ml-[800px]"
        }`}
      >
        {listItems.map((listItem, i) => {
          return (
            <React.Fragment key={i}>
              <li>
                <a
                  className={`lowercase ${
                    listItem.id === "#contact" && "text-[#D0A380]"
                  }`}
                  href={listItem.id}
                >
                  {listItem.text}
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Header;

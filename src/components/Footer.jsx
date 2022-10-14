import React from "react";

function Footer() {
  const listItems = [
    { text: "Home", id: "#home" },
    { text: "About", id: "#about" },
    { text: "Services", id: "#services" },
    { text: "Portfolio", id: "#portfolio" },
    { text: "Contact", id: "#contact" },
  ];
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
          <ul className="mt-5 flex flex-col h-[180px] justify-between text-[#eee] text-xl ">
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
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-[#ccc]">Created By: Mariyan Popov</p>
    </div>
  );
}

export default Footer;

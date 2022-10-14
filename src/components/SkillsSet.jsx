import React from "react";
import HtmlIcon from "./PortfolioIcons/HtmlIcon";
import CssIcon from "./PortfolioIcons/CssIcon";
import JavaScriptIcon from "./PortfolioIcons/JavaScriptIcon";
import GitIcon from "./PortfolioIcons/GitIcon";
import ReactIcon from "./PortfolioIcons/ReactIcon";
import TailwindIcon from "./PortfolioIcons/TailwindIcon";

function SkillsSet() {
  return (
    <div className="mt-5 flex justify-between flex-wrap drop-shadow-[2px_2px_5px_#1A1A19]  w-[250px] 2xl:w-[700px]  ">
      <HtmlIcon />
      <CssIcon />
      <JavaScriptIcon />
      <GitIcon />
      <ReactIcon />
      <TailwindIcon />
    </div>
  );
}

export default SkillsSet;

import React from "react";
import documentIcon from "../assets/documentIcon.png";
import "../css/RightNavbar.css";

function RightNavbar() {
  return (
    <div className="sticky top-10 rightNavbar rounded-xl flex flex-col text-xs w-40">
      <div className="title  p-1 flex items-center justify-center gap-2">
        <img src={documentIcon} className="h-10" alt="documentIcon" />
        <p>On this page</p>
      </div>
      <div className="hover-item duration-300 p-1 h-10 cursor-pointer flex items-center justify-center">
        Full stack developer
      </div>
      <div className="hover-item duration-300 p-1 h-10 cursor-pointer flex items-center justify-center">
        Skills
      </div>
      <div className="hover-item duration-300 p-1 h-10 cursor-pointer flex items-center justify-center">
        Projects
      </div>
      <div className="hover-item duration-300 p-1 h-10 cursor-pointer flex items-center justify-center">
        Jobly
      </div>
      <div className="hover-item rounded-lg duration-300 p-1 h-10 cursor-pointer flex items-center justify-center">
        Shoppers Side
      </div>
    </div>
  );
}

export default RightNavbar;

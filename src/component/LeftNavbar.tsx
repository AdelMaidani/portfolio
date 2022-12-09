import React from "react";
import profile from "../assets/profile.png";
import email from "../assets/Vector.png";
import github from "../assets/GitHub.png";
import linkedin from "../assets/LinkedIn.png";
import "../css/LeftNavbar.css";

function LeftNavbar() {
  return (
    <div className="sticky top-10 text-xs flex flex-col gap-8 sm:w-40">
      <img
        src={profile}
        alt="Profile"
        className="profile h-24 w-24 border rounded-full p-1 decoration-emerald-700"
      />
      <div className="flex flex-col gap-2">
        <div className="name">Mohammed Adel Maidani</div>
        <p>
          Through continually writing code and building my YouTube channel, I’ve
          built strong skills in software and entrepreneurship. With every role,
          I bring more than the ability to write code. I bring the ability to
          turn software into a valuable tool that anyone can use and understand.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <img src={github} alt="github" className="h-10" />
        <img src={email} alt="email" className="h-7 w-8" />
        <img src={linkedin} alt="linkedin" className="h-10" />
      </div>
    </div>
  );
}

export default LeftNavbar;
